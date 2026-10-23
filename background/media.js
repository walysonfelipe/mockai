import { PROTOCOL, validateId } from '../shared/model.js';
import { validateCaptureGeometry, sameCaptureGeometry } from '../shared/media.js';
const EXPORT_KEY = 'mockai.media.export.v1';
const OFFSCREEN_PATH = 'offscreen/index.html';
export function createMediaCoordinator(api) {
  async function exists() {
    return (await api.runtime.getContexts({ contextTypes: ['OFFSCREEN_DOCUMENT'], documentUrls: [api.runtime.getURL(OFFSCREEN_PATH)] })).length > 0;
  }
  async function ensure() {
    if (!await exists()) await api.offscreen.createDocument({ url: OFFSCREEN_PATH, reasons: ['USER_MEDIA', 'BLOBS'], justification: 'Recortar a tela selecionada e gerar imagens e gravações locais.' });
  }
  async function command(type, data = {}) {
    const response = await api.runtime.sendMessage({ protocol: PROTOCOL, target: 'offscreen', type, ...data });
    if (!response?.ok) throw new Error(response?.error ?? 'O serviço de mídia não respondeu.');
    return response.data;
  }
  async function state() { return await exists() ? command('media.status') : { state: 'idle' }; }
  async function notify(tabId, value) {
    try { await api.tabs.sendMessage(tabId, { protocol: PROTOCOL, type: 'media.state', state: value }); } catch { /* Aba encerrada. */ }
  }
  async function clear() {
    if (await exists()) {
      try { await command('media.cancel'); } catch { /* O documento pode ter sido interrompido. */ }
      await api.offscreen.closeDocument().catch(() => {});
    }
    await api.storage.session.remove(EXPORT_KEY);
  }
  async function openResult(value) {
    const saved = (await api.storage.session.get(EXPORT_KEY))[EXPORT_KEY];
    if (saved?.jobId === value.jobId) return;
    const tab = await api.tabs.create({ url: api.runtime.getURL(`export/index.html?job=${value.jobId}`) });
    await api.storage.session.set({ [EXPORT_KEY]: { jobId: value.jobId, resultTabId: tab.id } });
  }
  async function finish(value) {
    await notify(value.tabId, value);
    if (value.state === 'ready') await openResult(value);
    if (value.state === 'error') await clear();
  }
  async function checkActive(id, expectedURL) {
    const tab = await api.tabs.get(id);
    const active = await api.tabs.query({ active: true, windowId: tab.windowId });
    const window = await api.windows.get(tab.windowId);
    if (!tab.active || active[0]?.id !== id || !window.focused || tab.url !== expectedURL) throw new Error('Volte à aba do simulador antes de capturar.');
    return tab;
  }
  async function start(id, session, message) {
    if (!['image', 'video'].includes(message.mode)) throw new Error('Tipo de captura inválido.');
    if (message.mode === 'video' && !['webm', 'mp4'].includes(message.format)) throw new Error('Formato de vídeo inválido.');
    let previous = await state();
    if (previous.state === 'error') { await clear(); previous = { state: 'idle' }; }
    if (previous.state !== 'idle') throw new Error('Finalize ou descarte a captura anterior antes de iniciar outra.');
    if (message.mode === 'video' && !await api.permissions.contains({ permissions: ['tabCapture'] })) {
      throw new Error('Abra o popup do Mockaí e clique em “Gravar tela selecionada” para permitir a gravação.');
    }
    const tab = await checkActive(id, session.url);
    let prepared = false;
    try {
      const response = await api.tabs.sendMessage(id, { protocol: PROTOCOL, type: 'media.prepare', mode: message.mode });
      if (!response?.ok) throw new Error(response?.error ?? 'Não foi possível preparar a tela.');
      prepared = true;
      const geometry = validateCaptureGeometry(response.geometry);
      await ensure();
      const jobId = crypto.randomUUID();
      let source;
      if (message.mode === 'image') {
        source = { dataUrl: await api.tabs.captureVisibleTab(tab.windowId, { format: 'png' }) };
      } else {
        source = { streamId: await api.tabCapture.getMediaStreamId({ targetTabId: id }) };
      }
      await checkActive(id, session.url);
      const verified = await api.tabs.sendMessage(id, { protocol: PROTOCOL, type: 'media.verify' });
      if (!verified?.ok || !sameCaptureGeometry(geometry, verified.geometry)) throw new Error('A posição da tela mudou. Tente capturar novamente.');
      const result = await command('media.start', { jobId, tabId: id, mode: message.mode, format: message.format, geometry, ...source });
      await finish(result);
      return result;
    } catch (error) {
      await clear().catch(() => {});
      if (prepared) await notify(id, { state: 'idle', reason: error.message });
      throw error;
    }
  }
  return {
    start,
    async status(id) {
      const value = await state();
      return value.tabId === id ? value : { state: 'idle' };
    },
    async stop(id) {
      const current = await state();
      if (current.tabId !== id || current.state !== 'recording') throw new Error('Esta aba não possui gravação em andamento.');
      const value = await command('media.stop');
      await finish(value);
      return value;
    },
    async cancel(id) {
      const current = await state();
      if (current.tabId === id && !['ready', 'idle'].includes(current.state)) {
        await clear(); await notify(id, { state: 'idle', reason: 'Captura cancelada.' });
      }
      return { state: 'idle' };
    },
    async revoke() {
      const current = await state();
      if (['preparing', 'recording', 'stopping'].includes(current.state)) {
        await clear(); await notify(current.tabId, { state: 'idle', reason: 'A permissão de gravação foi removida.' });
      }
    },
    async navigate(id, change) {
      const saved = (await api.storage.session.get(EXPORT_KEY))[EXPORT_KEY];
      if (saved?.resultTabId === id && change.url && change.url !== api.runtime.getURL(`export/index.html?job=${saved.jobId}`)) {
        await clear(); return;
      }
      await this.cancel(id);
    },
    async forget(id) {
      const saved = (await api.storage.session.get(EXPORT_KEY))[EXPORT_KEY];
      if (saved?.resultTabId === id) { await clear(); return; }
      await this.cancel(id);
    },
    async event(sender) {
      if (sender.id !== api.runtime.id || sender.tab || sender.url !== api.runtime.getURL(OFFSCREEN_PATH)) throw new Error('Evento de mídia não autorizado.');
      // O estado enviado é só uma notificação; a decisão usa o estado real do offscreen.
      const current = await state();
      if (current.state !== 'idle') await finish(current);
      return { received: true };
    },
    async exportRequest(message, sender) {
      const saved = (await api.storage.session.get(EXPORT_KEY))[EXPORT_KEY];
      const jobId = validateId(message.jobId);
      if (sender.id !== api.runtime.id || sender.frameId !== 0 || sender.tab?.id !== saved?.resultTabId ||
          saved?.jobId !== jobId || sender.url !== api.runtime.getURL(`export/index.html?job=${jobId}`)) throw new Error('Exportação não autorizada ou expirada.');
      if (message.type === 'export.get') return command('artifact.get', { jobId });
      if (message.type === 'export.release') { await clear(); return { released: true }; }
      throw new Error('Operação de exportação desconhecida.');
    }
  };
}
