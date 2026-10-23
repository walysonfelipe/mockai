import { createController } from './controller.js';
import { PROTOCOL } from '../shared/model.js';
import { createMediaCoordinator } from './media.js';
import { createCompatibility } from './compatibility.js';
import { registerContextMenu } from './context-menu.js';
const controller = createController(chrome, createMediaCoordinator(chrome), createCompatibility(chrome));
registerContextMenu(chrome, controller);
chrome.runtime.onMessage.addListener((message, sender, respond) => {
  if (message?.protocol !== PROTOCOL || message.target === 'offscreen') return false;
  controller.handle(message, sender).then(
    data => respond({ ok: true, data }),
    error => respond({ ok: false, error: { code: 'REQUEST_FAILED', message: error.message } })
  );
  return true;
});
chrome.tabs.onRemoved.addListener(id => { void controller.forget(id).catch(console.error); });
// Carregamentos de subquadros também podem alterar o status da aba.
// Só reconciliamos a sessão quando há uma URL nova ou o carregamento termina.
chrome.tabs.onUpdated.addListener((id, change) => {
  if (change.status === 'complete' || change.url) void controller.navigate(id, change).catch(console.error);
});

chrome.permissions.onRemoved.addListener(permissions => {
  if (permissions.permissions?.includes('tabCapture')) {
    void controller.revokeMedia().catch(console.error);
  }
});
