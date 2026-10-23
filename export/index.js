import { PROTOCOL } from '../shared/model.js';
import { MEDIA_LIMITS, chooseVideoType } from '../shared/media.js';
import { convertToMP4 } from './convert.js';
import { MESSAGES } from '../shared/messages.js';
import { createI18n } from '../shared/i18n.js';
import { watchOptions } from '../shared/options.js';
const i18n = createI18n(MESSAGES, 'auto', navigator.language), t = i18n.t;
const jobId = new URL(location.href).searchParams.get('job');
const status = document.querySelector('#status'), download = document.querySelector('#download');
const convert = document.querySelector('#convert'), cancel = document.querySelector('#cancel');
const progress = document.querySelector('#progress'), mp4 = document.querySelector('#mp4');
let original, file, conversion, preview, note = { key: 'export.preparing' };
const urls = new Set();
const localURL = blob => { const url = URL.createObjectURL(blob); urls.add(url); return url; };
function render() {
  i18n.apply(document); document.documentElement.lang = i18n.language; document.title = t('export.title');
  status.textContent = note.error ? i18n.error(note.error) : t(note.key);
  if (note.suffix) status.textContent += ` ${t(note.suffix)}`;
  if (file) download.textContent = t('export.download', { format: file.mode === 'image' ? 'PNG' : file.mime.startsWith('video/mp4') ? 'MP4' : 'WebM' });
  mp4.textContent = t('export.download', { format: 'MP4' });
  if (preview?.tagName === 'IMG') preview.alt = t('export.alt');
}
function setNote(value) { note = value; render(); }
function applyOptions(options) { i18n.setLanguage(options.language); render(); }
const unwatch = watchOptions(chrome, applyOptions);
async function request(type) {
  const response = await chrome.runtime.sendMessage({ protocol: PROTOCOL, type, jobId });
  if (!response?.ok) throw new Error(response?.error?.message ?? MESSAGES['pt-BR']['error.expired']);
  return response.data;
}
window.addEventListener('pagehide', () => {
  unwatch(); conversion?.abort(); urls.forEach(url => URL.revokeObjectURL(url)); urls.clear();
  void request('export.release').catch(() => {});
});
render();
try {
  applyOptions((await request('options.get')).options);
  file = await request('export.get');
  const response = await fetch(file.url);
  if (!response.ok) throw new Error(MESSAGES['pt-BR']['error.file']);
  original = await response.blob();
  if (!original.size || original.size > MEDIA_LIMITS.bytes) throw new Error(MESSAGES['pt-BR']['error.emptyFile']);
  const url = localURL(original);
  preview = document.createElement(file.mode === 'image' ? 'img' : 'video');
  if (file.mode === 'video') { preview.controls = true; preview.preload = 'metadata'; }
  preview.src = url; document.querySelector('#preview').append(preview);
  download.href = url; download.download = file.filename; download.hidden = false;
  setNote({ key: file.reason === 'interrupted' ? 'media.interrupted' : file.reason === 'duration-limit' ? 'media.duration' : 'export.ready' });
  if (file.mode === 'video' && !file.mime.startsWith('video/mp4')) {
    try { chooseVideoType('mp4', type => MediaRecorder.isTypeSupported(type)); convert.hidden = false; }
    catch { setNote({ ...note, suffix: 'export.noMP4' }); }
  }
} catch (error) { setNote({ error: error.message }); }
finally { await request('export.release').catch(() => {}); }
convert.addEventListener('click', async () => {
  conversion = new AbortController(); convert.disabled = true; cancel.hidden = false; progress.hidden = false;
  progress.value = 0; mp4.hidden = true; setNote({ key: 'export.converting' });
  try {
    const blob = await convertToMP4(original, { signal: conversion.signal, onProgress: value => { if (value === null) progress.removeAttribute('value'); else progress.value = value; } });
    if (mp4.href.startsWith('blob:')) { URL.revokeObjectURL(mp4.href); urls.delete(mp4.href); }
    mp4.href = localURL(blob); mp4.download = file.filename.replace(/\.webm$/, '.mp4'); mp4.hidden = false;
    setNote({ key: 'export.converted' });
  } catch (error) { setNote({ error: error.message, suffix: 'export.original' }); }
  finally { conversion = null; convert.disabled = false; cancel.hidden = true; progress.hidden = true; }
});
cancel.addEventListener('click', () => conversion?.abort());
