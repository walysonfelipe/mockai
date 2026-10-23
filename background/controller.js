import { PROTOCOL, defaultWorkspace, migrateView, validateWorkspace, pageURL } from '../shared/model.js';
import { readOptions, updateOptions } from '../shared/options.js';
import { changeLibrary, readLibrary } from './library.js';

export function createController(api, media = null) {
  // Serialização também protege biblioteca e conjuntos usados por abas diferentes.
  let pending = Promise.resolve();
  function serial(task) {
    const next = pending.then(task);
    pending = next.catch(() => {});
    return next;
  }
  const sessionKey = id => `mockai.session.v2.${id}`;
  async function session(id) {
    const value = (await api.storage.session.get(sessionKey(id)))[sessionKey(id)];
    if (!value) return null;
    try {
      if (value.version !== 2) throw new Error('Versão de sessão inválida.');
      return { version: 2, url: pageURL(value.url), workspace: validateWorkspace(value.workspace) };
    } catch {
      await stop(id);
      return null;
    }
  }
  async function stop(id) {
    if (media) { try { await media.cancel(id); } catch { /* O fechamento da interface deve continuar. */ } }
    try { await api.tabs.sendMessage(id, { protocol: PROTOCOL, type: 'view.unmount' }); }
    catch { /* Documento fechado, navegado ou nunca injetado. */ }
    await api.storage.session.remove(sessionKey(id));
    await api.storage.session.remove(`mockai.session.v1.${id}`);
  }
  async function preferences() {
    const saved = (await api.storage.local.get('mockai.workspace.v2'))['mockai.workspace.v2'];
    if (saved?.version === 2) {
      try { return validateWorkspace(saved.workspace); } catch { /* Tenta preferências da primeira entrega. */ }
    }
    const previous = (await api.storage.local.get('mockai.settings.v1'))['mockai.settings.v1'];
    if (previous?.version === 1) {
      try { return migrateView(previous.view); } catch { /* Defaults se os dados estiverem corrompidos. */ }
    }
    return defaultWorkspace();
  }
  async function dispatch(message, sender) {
    if (sender.id !== api.runtime.id || message?.protocol !== PROTOCOL) throw new Error('Mensagem não autorizada.');
    if (message.type === 'media.event' && media) return media.event(sender);
    if (message.type?.startsWith('export.') && media) return media.exportRequest(message, sender);
    const popup = !sender.tab && sender.url === api.runtime.getURL('popup/index.html');
    const content = sender.tab && sender.frameId === 0;
    const exportPage = content && typeof sender.url === 'string' && sender.url.startsWith(api.runtime.getURL('export/index.html?job='));
    if (message.type === 'options.get' && (popup || exportPage)) return { options: await readOptions(api.storage.local) };
    if (message.type === 'options.update' && popup) return { options: await updateOptions(api.storage.local, message.patch) };
    if (!popup && !content) throw new Error('Origem da mensagem inválida.');
    const id = popup ? message.tabId : sender.tab.id;
    if (!Number.isInteger(id) || id < 0) throw new Error('Aba inválida.');
    // Fechar precisa funcionar mesmo se um registro de sessão estiver corrompido.
    if (message.type === 'session.stop') { await stop(id); return { active: false }; }
    const current = await session(id);
    if (content) {
      if (!current || current.url !== sender.url) throw new Error('Sessão encerrada.');
      if (message.type === 'options.get') return { options: await readOptions(api.storage.local) };
      if (message.type === 'options.update') return { options: await updateOptions(api.storage.local, message.patch) };
      if (message.type.startsWith('media.')) {
        if (!media) throw new Error('Captura disponível somente na extensão carregada no Chrome.');
        if (message.type === 'media.start') return media.start(id, current, message);
        if (message.type === 'media.stop') return media.stop(id);
        if (message.type === 'media.cancel') return media.cancel(id);
        if (message.type === 'media.status') return media.status(id);
        throw new Error('Operação de mídia desconhecida.');
      }
      if (message.type === 'workspace.save') {
        const workspace = validateWorkspace(message.workspace);
        await api.storage.local.set({ 'mockai.workspace.v2': { version: 2, workspace } });
        await api.storage.session.set({ [sessionKey(id)]: { ...current, workspace } });
        return { workspace };
      }
      if (message.type === 'library.get') return { library: await readLibrary(api.storage.local) };
      if (['profile.create', 'profile.delete', 'favorite.toggle', 'set.save', 'set.delete'].includes(message.type)) {
        return { library: await changeLibrary(api.storage.local, message) };
      }
      throw new Error('Operação indisponível neste contexto.');
    }
    if (['media.start', 'media.status', 'media.stop', 'media.cancel'].includes(message.type) && media) {
      if (!current) throw new Error('Abra o simulador antes de gravar.');
      if (message.type === 'media.start') return media.start(id, current, message);
      if (message.type === 'media.status') return media.status(id);
      if (message.type === 'media.stop') return media.stop(id);
      return media.cancel(id);
    }
    if (message.type === 'session.status') return { active: Boolean(current), session: current };
    if (message.type !== 'session.start') throw new Error('Operação desconhecida.');
    const tab = await api.tabs.get(id);
    const url = pageURL(tab.url);
    const workspace = current?.url === url ? current.workspace : await preferences();
    await api.scripting.executeScript({ target: { tabId: id }, files: ['content/simulator.js'] });
    const next = { version: 2, url, workspace };
    try {
      await api.storage.session.set({ [sessionKey(id)]: next });
      const result = await api.tabs.sendMessage(id, { protocol: PROTOCOL, type: 'view.mount', session: next, options: await readOptions(api.storage.local) });
      if (!result?.ok) throw new Error(result?.error ?? 'A interface não confirmou a abertura.');
      // Migração não destrutiva dos ajustes locais; sessões da versão anterior são descartadas.
      await api.storage.session.remove(`mockai.session.v1.${id}`);
    } catch (error) { await stop(id); throw error; }
    return { active: true, session: next };
  }
  return {
    navigate: (id, change) => serial(async () => {
      if (media) await media.navigate(id, change);
      await stop(id);
    }),
    revokeMedia: () => serial(() => media?.revoke()),
    handle: (message, sender) => serial(() => dispatch(message, sender)),
    forget: id => serial(async () => {
      if (media) await media.forget(id);
      await stop(id);
    })
  };
}
