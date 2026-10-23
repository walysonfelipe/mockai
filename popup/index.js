import { PROTOCOL, pageURL } from '../shared/model.js';
import { MESSAGES } from '../shared/messages.js';
import { createI18n } from '../shared/i18n.js';
import { DEFAULT_OPTIONS, watchOptions } from '../shared/options.js';
const button = document.querySelector('#toggle'), status = document.querySelector('#status');
const record = document.querySelector('#record'), format = document.querySelector('#format'), language = document.querySelector('#language');
const i18n = createI18n(MESSAGES, 'auto', navigator.language), t = i18n.t;
let options = { ...DEFAULT_OPTIONS }, recording = false, busy = false, initialized = false, available = false;
let mediaPhase = 'idle', pollTimer, tabId, active = false, statusMessage = null;
async function request(type, data = {}) {
  const response = await chrome.runtime.sendMessage({ protocol: PROTOCOL, type, tabId, ...data });
  if (!response?.ok) throw new Error(response?.error?.message ?? MESSAGES['pt-BR']['error.popupExtension']);
  return response.data;
}
function update() {
  button.textContent = !initialized ? t('common.wait') : !available ? t('popup.unavailable') : t(active ? 'popup.close' : 'popup.open');
  button.disabled = !initialized || !available || busy;
  record.textContent = t(recording ? 'media.stop' : 'popup.record');
  record.disabled = !active || busy || ['preparing', 'stopping'].includes(mediaPhase);
  format.disabled = !active || busy || recording;
  language.disabled = busy || recording;
  if (statusMessage) status.textContent = statusMessage.error ? i18n.error(statusMessage.error) : statusMessage.source ? i18n.fromSource(statusMessage.source) : t(statusMessage.key);
  else status.textContent = '';
}
function setStatus(key) { statusMessage = { key }; update(); }
function fail(error) { statusMessage = { error: error.message }; update(); }
function applyOptions(value) {
  options = value; i18n.setLanguage(options.language); i18n.apply(document);
  document.documentElement.lang = i18n.language; language.value = options.language; update();
}
const unwatch = watchOptions(chrome, applyOptions);
window.addEventListener('pagehide', () => { clearTimeout(pollTimer); unwatch(); });
async function pollMedia() {
  try {
    const value = await request('media.status'); mediaPhase = value.state;
    recording = ['preparing', 'recording', 'stopping'].includes(value.state); update();
    if (recording) pollTimer = setTimeout(pollMedia, 500);
  } catch { /* Estado consultado novamente ao reabrir o popup. */ }
}
button.addEventListener('click', async () => {
  busy = true; statusMessage = null; update();
  try {
    const result = await request(active ? 'session.stop' : 'session.start'); active = result.active;
    if (!active) { recording = false; clearTimeout(pollTimer); }
    setStatus(active ? 'popup.opened' : 'popup.closed');
  } catch (error) { fail(error); }
  finally { busy = false; update(); }
});
record.addEventListener('click', async () => {
  busy = true; update();
  try {
    const result = await request(recording ? 'media.stop' : 'media.start', { mode: 'video', format: format.value });
    mediaPhase = result.state; recording = ['preparing', 'recording', 'stopping'].includes(result.state);
    clearTimeout(pollTimer); if (recording) pollTimer = setTimeout(pollMedia, 500);
    if (result.reason) statusMessage = { source: result.reason };
    else setStatus(result.state === 'preparing' ? 'popup.preparing' : recording ? 'popup.recording' : 'media.finished');
  } catch (error) { fail(error); }
  finally { busy = false; update(); }
});
language.addEventListener('change', async () => {
  busy = true; update();
  try { applyOptions((await request('options.update', { patch: { language: language.value } })).options); setStatus('options.saved'); }
  catch (error) { language.value = options.language; fail(error); }
  finally { busy = false; update(); }
});
applyOptions(options);
try {
  applyOptions((await request('options.get')).options);
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true }); pageURL(tab?.url);
  tabId = tab.id; available = true;
  active = (await request('session.status')).active;
  if (active) await pollMedia();
} catch (error) { fail(error); }
finally { initialized = true; update(); }
