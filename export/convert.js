import { chooseVideoType, MEDIA_LIMITS } from '../shared/media.js';
export async function convertToMP4(blob, { signal, onProgress = () => {} } = {}, env = globalThis) {
  const mime = chooseVideoType('mp4', type => env.MediaRecorder.isTypeSupported(type));
  if (signal?.aborted) throw new Error('Conversão cancelada.');
  const video = env.document.createElement('video');
  const url = env.URL.createObjectURL(blob);
  const canvas = env.document.createElement('canvas');
  let stream, recorder, interval, timeout, rejectPending;
  let chunks = [], bytes = 0;
  const aborted = () => rejectPending?.(new Error('Conversão cancelada.'));
  signal?.addEventListener('abort', aborted, { once: true });
  video.muted = true; video.playsInline = true; video.src = url;
  try {
    await new Promise((resolve, reject) => {
      rejectPending = reject;
      timeout = env.setTimeout(() => reject(new Error('Não foi possível abrir o vídeo para conversão.')), 8000);
      video.onloadeddata = resolve;
      video.onerror = () => reject(new Error('Este vídeo não pode ser convertido pelo navegador.'));
      video.load();
    });
    env.clearTimeout(timeout); timeout = null;
    if (signal?.aborted) throw new Error('Conversão cancelada.');
    canvas.width = video.videoWidth; canvas.height = video.videoHeight;
    if (!canvas.width || !canvas.height || canvas.width * canvas.height > 3840000) throw new Error('Dimensões indisponíveis ou grandes demais para conversão.');
    const context = canvas.getContext('2d', { alpha: false });
    if (!context) throw new Error('Canvas indisponível para conversão.');
    context.drawImage(video, 0, 0);
    stream = canvas.captureStream(MEDIA_LIMITS.fps);
    recorder = new env.MediaRecorder(stream, { mimeType: mime, videoBitsPerSecond: 4000000 });
    const result = new Promise((resolve, reject) => {
      rejectPending = reject;
      recorder.ondataavailable = event => {
        bytes += event.data.size;
        if (bytes > MEDIA_LIMITS.bytes) reject(new Error('O MP4 excedeu o limite de 64 MiB.'));
        else if (event.data.size) chunks.push(event.data);
      };
      recorder.onerror = () => reject(new Error('O codificador MP4 falhou.'));
      recorder.onstop = () => {
        if (!bytes) { reject(new Error('A conversão terminou sem dados.')); return; }
        resolve(new Blob(chunks, { type: recorder.mimeType || mime }));
      };
      video.onended = () => { if (recorder.state === 'recording') recorder.stop(); };
      video.onerror = () => reject(new Error('A reprodução foi interrompida durante a conversão.'));
      interval = env.setInterval(() => {
        try {
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          onProgress(Number.isFinite(video.duration) && video.duration > 0 ? Math.min(video.currentTime / video.duration, 1) : null);
        } catch (error) { reject(error); }
      }, 1000 / MEDIA_LIMITS.fps);
      timeout = env.setTimeout(() => reject(new Error('A conversão excedeu o tempo permitido.')), MEDIA_LIMITS.durationMs + 15000);
      recorder.start(1000);
      video.play().catch(reject);
    });
    const converted = await result;
    onProgress(1);
    return converted;
  } finally {
    rejectPending = null;
    signal?.removeEventListener('abort', aborted);
    env.clearInterval(interval); env.clearTimeout(timeout);
    video.onloadeddata = video.onerror = video.onended = null;
    if (recorder) {
      recorder.ondataavailable = recorder.onerror = recorder.onstop = null;
      if (recorder.state !== 'inactive') { try { recorder.stop(); } catch {} }
    }
    stream?.getTracks().forEach(track => track.stop());
    video.pause(); video.removeAttribute('src'); video.load(); video.remove();
    canvas.width = canvas.height = 1;
    env.URL.revokeObjectURL(url); chunks = [];
  }
}
