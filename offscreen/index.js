import { PROTOCOL } from '../shared/model.js';
import { createMediaEngine } from './engine.js';
import { browserPlatform } from './platform.js';
const engine = createMediaEngine(browserPlatform(state => {
  void chrome.runtime.sendMessage({ protocol: PROTOCOL, target: 'worker', type: 'media.event', state }).catch(() => {});
}));
chrome.runtime.onMessage.addListener((message, sender, respond) => {
  if (sender.id !== chrome.runtime.id || sender.tab || message?.protocol !== PROTOCOL || message.target !== 'offscreen' || (sender.url && sender.url !== chrome.runtime.getURL('background/index.js'))) return false;
  // O Chrome pode omitir sender.url para mensagens do service worker.
  return dispatch(message, respond);
});
function dispatch(message, respond) {
  let operation;
  try {
    switch (message.type) {
      case 'media.start':
        void engine.start(message).catch(() => {});
        respond({ ok: true, data: engine.status() });
        return false;
      case 'media.status': operation = engine.status(); break;
      case 'media.page.start': operation = engine.beginPage(message); break;
      case 'media.page.append': operation = engine.appendPage(message); break;
      case 'media.page.finish': operation = engine.finishPage(message.jobId); break;
      case 'media.stop': operation = engine.stop(); break;
      case 'media.cancel': operation = engine.cancel(); break;
      case 'artifact.inline': operation = engine.inlineArtifact(message.jobId); break;
      case 'artifact.get': operation = engine.artifact(message.jobId); break;
      default: throw new Error('Operação de mídia desconhecida.');
    }
  } catch (error) { respond({ ok: false, error: error.message }); return false; }
  Promise.resolve(operation).then(data => respond({ ok: true, data }), error => respond({ ok: false, error: error.message }));
  return true;
}
