import { PROTOCOL, validateId } from '../shared/model.js';
import { validateCaptureGeometry, sameCaptureGeometry } from '../shared/media.js';
const EXPORT_KEY = 'mockai.media.export.v1';
const OFFSCREEN_PATH = 'offscreen/index.html';
export function createMediaCoordinator(api) {
  let pageRun = null;
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
    if (pageRun) {
      const run = pageRun; run.cancelled = true; pageRun = null;
      try { await api.tabs.sendMessage(run.tabId, { protocol: PROTOCOL, type: 'page.restore', jobId: run.jobId }); }
      catch { /* O documento pode ter navegado. */ }
    }
    if (await exists()) {
      try { await command('media.cancel'); } catch { /* O documento pode ter sido interrompido. */ }
      await api.offscreen.closeDocument().catch(() => {});
    }
    await api.storage.session.remove(EXPORT_KEY);
  }
  async function finish(value) {
    await notify(value.tabId, value);
    if (value.state === 'error') await clear();
  }
  async function checkActive(id, expectedURL) {
    const tab = await api.tabs.get(id);
    const active = await api.tabs.query({ active: true, windowId: tab.windowId });
    const window = await api.windows.get(tab.windowId);
    if (!tab.active || active[0]?.id !== id || !window.focused || tab.url !== expectedURL) throw new Error('Volte à aba do simulador antes de capturar.');
    return tab;
  }
  async function pageRequest(run, type, data = {}) {
    const result = await api.tabs.sendMessage(run.tabId, { protocol: PROTOCOL, type, jobId: run.jobId, ...data });
    if (!result?.ok) throw new Error(result?.error ?? 'Não foi possível percorrer a página.');
    return result.page;
  }
  async function capturePage(run, session) {
    const active = () => pageRun === run && !run.cancelled;
    let covered = 0, lastCapture = 0;
    try {
      while (active()) {
        const page = await pageRequest(run, 'page.step', { offset: covered });
        if (!active()) return;
        await checkActive(run.tabId, session.url);
        // captureVisibleTab permite no máximo duas capturas por segundo.
        const delay = Math.max(0, 550 - (Date.now() - lastCapture));
        if (delay) await new Promise(resolve => setTimeout(resolve, delay));
        if (!active()) return;
        const dataUrl = await api.tabs.captureVisibleTab(run.windowId, { format: 'png' });
        lastCapture = Date.now();
        if (!active()) return;
        await checkActive(run.tabId, session.url);
        const verified = await pageRequest(run, 'page.verify');
        if (!active()) return;
        if (!sameCaptureGeometry(page.geometry, verified.geometry) || Math.abs(page.offset - verified.offset) > 0.5 ||
            page.width !== verified.width || page.viewportHeight !== verified.viewportHeight) {
          throw new Error('A página mudou durante a captura. Tente novamente.');
        }
        page.height = Math.max(page.height, verified.height);
        const value = await command('media.page.append', { jobId: run.jobId, ...page, dataUrl });
        if (!active()) return;
        await notify(run.tabId, value);
        const next = Math.min(page.height, page.offset + page.viewportHeight);
        if (next <= covered + 0.5) throw new Error('Não foi possível avançar a rolagem da página.');
        covered = next;
        if (covered >= page.height - 0.5) break;
      }
      if (!active()) return;
      await pageRequest(run, 'page.restore');
      if (!active()) return;
      const value = await command('media.page.finish', { jobId: run.jobId });
      if (active()) { pageRun = null; await finish(value); }
    } catch (error) {
      if (active()) {
        await clear().catch(() => {});
        await notify(run.tabId, { state: 'error', reason: error.message });
      }
    }
  }
  async function startPage(id, session, tab) {
    const run = { tabId: id, windowId: tab.windowId, jobId: crypto.randomUUID(), cancelled: false };
    pageRun = run;
    try {
      const page = await pageRequest(run, 'page.prepare');
      await ensure();
      const result = await command('media.page.start', { jobId: run.jobId, tabId: id, width: page.width, height: page.height });
      // As próximas etapas deixam Parar/Cancelar e as consultas de estado livres.
      void capturePage(run, session);
      return result;
    } catch (error) { await clear().catch(() => {}); throw error; }
  }
  async function start(id, session, message) {
    if (!['image', 'video', 'full-page'].includes(message.mode)) throw new Error('Tipo de captura inválido.');
    if (message.mode === 'video' && !['webm', 'mp4'].includes(message.format)) throw new Error('Formato de vídeo inválido.');
    let previous = await state();
    if (previous.state === 'error') { await clear(); previous = { state: 'idle' }; }
    if (previous.state !== 'idle') throw new Error('Finalize ou descarte a captura anterior antes de iniciar outra.');
    if (message.mode === 'video' && (!api.tabCapture?.getMediaStreamId || !await api.permissions.contains({ permissions: ['tabCapture'] }))) {
      throw new Error('A permissão de gravação está desatualizada. Recarregue a extensão em chrome://extensions e atualize esta página.');
    }
    const tab = await checkActive(id, session.url);
    if (message.mode === 'full-page') return startPage(id, session, tab);
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
      }
      await checkActive(id, session.url);
      const verified = await api.tabs.sendMessage(id, { protocol: PROTOCOL, type: 'media.verify' });
      if (!verified?.ok || !sameCaptureGeometry(geometry, verified.geometry)) throw new Error('A posição da tela mudou. Tente capturar novamente.');
      // O ID expira rapidamente: obtenha-o depois de verificar a geometria e use-o já.
      if (message.mode === 'video') source = { streamId: await api.tabCapture.getMediaStreamId({ targetTabId: id }) };
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
    async preview(id, jobId) {
      const current = await state();
      if (current.tabId !== id || current.jobId !== validateId(jobId) || current.state !== 'ready') throw new Error('A captura não está mais disponível.');
      return command('artifact.inline', { jobId });
    },
    async release(id, jobId) {
      const current = await state();
      if (current.tabId !== id || current.jobId !== validateId(jobId)) throw new Error('Captura não autorizada ou expirada.');
      await clear();
      return { state: 'idle' };
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
      if ((current.tabId === id && current.state !== 'idle') || pageRun?.tabId === id) {
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
