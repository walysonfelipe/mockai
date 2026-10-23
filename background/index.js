import { createController } from './controller.js';
import { PROTOCOL } from '../shared/model.js';
import { createMediaCoordinator } from './media.js';
const controller = createController(chrome, createMediaCoordinator(chrome));
chrome.runtime.onMessage.addListener((message, sender, respond) => {
  if (message?.protocol !== PROTOCOL || message.target === 'offscreen') return false;
  controller.handle(message, sender).then(
    data => respond({ ok: true, data }),
    error => respond({ ok: false, error: { code: 'REQUEST_FAILED', message: error.message } })
  );
  return true;
});
chrome.tabs.onRemoved.addListener(id => { void controller.forget(id).catch(console.error); });
// Navegação principal encerra a sessão. Abertura posterior exige um novo clique.
chrome.tabs.onUpdated.addListener((id, change) => {
  if (change.status === 'loading' || change.url) void controller.navigate(id, change).catch(console.error);
});

chrome.permissions.onRemoved.addListener(permissions => {
  if (permissions.permissions?.includes('tabCapture')) {
    void controller.revokeMedia().catch(console.error);
  }
});
