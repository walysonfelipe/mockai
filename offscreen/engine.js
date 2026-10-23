import { MEDIA_LIMITS, validateCaptureGeometry, cropGeometry, videoCropGeometry, chooseVideoType } from '../shared/media.js';
import { PAGE_LIMITS, pageDimensions, pageSlicePlacement } from '../shared/full-page.js';

// A plataforma contém somente as operações de mídia/DOM; permite testar ciclo e falhas sem navegador.
export function createMediaEngine(platform) {
  let job = null;
  function status() {
    return job ? { state: job.state, jobId: job.id, tabId: job.tabId, mode: job.mode,
      ...(job.fullPage ? { fullPage: true, progress: Math.floor(job.covered / job.height * 100) } : {}),
      startedAt: job.startedAt ?? null, reason: job.reason ?? null } : { state: 'idle' };
  }
  function notify() { platform.emit(status()); }
  function releaseResources(current) {
    for (const timer of current.timers) platform.clearTimer(timer);
    current.timers = [];
    current.removeEnded?.();
    for (const stream of [current.stream, current.canvasStream]) {
      for (const track of stream?.getTracks() ?? []) track.stop();
    }
    current.closeVideo?.();
    if (current.canvas) { current.canvas.width = 1; current.canvas.height = 1; }
    current.chunks = [];
    current.stream = current.canvasStream = current.video = current.canvas = null;
  }
  function fail(current, error) {
    if (job !== current || current.state === 'error') return;
    current.state = 'error'; current.reason = error.message;
    if (current.recorder?.state !== 'inactive') { try { current.recorder?.stop(); } catch {} }
    releaseResources(current); notify();
  }
  async function cancel() {
    const current = job;
    if (!current) return status();
    job = null;
    current.state = 'cancelled';
    if (current.recorder?.state !== 'inactive') { try { current.recorder?.stop(); } catch {} }
    releaseResources(current);
    if (current.url) platform.revokeURL(current.url);
    current.blob = null;
    return status();
  }
  function ready(current, blob) {
    if (job !== current || current.state === 'cancelled' || current.state === 'error') return;
    if (!blob.size) { fail(current, new Error('A gravação terminou sem dados.')); return; }
    if (blob.size > MEDIA_LIMITS.bytes) { fail(current, new Error('O arquivo excedeu o limite de 64 MiB.')); return; }
    current.blob = blob;
    current.mime = blob.type;
    current.url = platform.blobURL(blob);
    current.state = 'ready';
    releaseResources(current);
    notify();
  }
  function stop(reason = 'stopped') {
    const current = job;
    if (!current || !['recording', 'stopping'].includes(current.state)) throw new Error('Não há gravação em andamento.');
    if (current.state === 'stopping') return status();
    current.reason = reason;
    current.state = 'stopping';
    current.timers.push(platform.timeout(() => fail(current, new Error('O navegador não finalizou a gravação.')), 5000));
    try {
      platform.requestFrame(current.canvasStream);
      current.recorder.requestData();
      current.recorder.stop();
    } catch (error) { fail(current, error); }
    return status();
  }
  async function start({ jobId, tabId, mode, geometry: input, dataUrl, streamId, format = 'webm' }) {
    if (job) throw new Error('Finalize ou descarte a captura anterior antes de iniciar outra.');
    if (!['image', 'video'].includes(mode)) throw new Error('Tipo de captura inválido.');
    const geometry = validateCaptureGeometry(input);
    const current = { id: jobId, tabId, mode, state: 'preparing', timers: [], chunks: [], bytes: 0 };
    job = current;
    const deadline = platform.timeout(() => fail(current, new Error('A preparação da captura excedeu o tempo permitido.')), 10000);
    current.timers.push(deadline);
    try {
      if (mode === 'image') {
        if (typeof dataUrl !== 'string' || !dataUrl.startsWith('data:image/png;base64,') || dataUrl.length > MEDIA_LIMITS.bytes * 1.4) throw new Error('Imagem de captura inválida.');
        const image = await platform.decodeImage(dataUrl);
        try {
          if (job !== current || current.state === 'error') return status();
          const crop = cropGeometry(geometry, image.width, image.height);
          current.canvas = platform.makeCanvas(geometry.output.width, geometry.output.height);
          if (geometry.composition) await platform.composePNG(current.canvas, image, crop, geometry.composition);
          else platform.draw(current.canvas, image, crop);
          if (job !== current || current.state === 'error') return status();
          const blob = await platform.png(current.canvas);
          ready(current, blob);
        } finally { image.close?.(); }
      } else {
        const mime = chooseVideoType(format, platform.supports);
        current.stream = await platform.openStream(streamId, geometry.viewport);
        if (job !== current || current.state === 'error') { releaseResources(current); return status(); }
        const opened = await platform.openVideo(current.stream);
        current.video = opened.video; current.closeVideo = opened.close;
        if (job !== current || current.state === 'error') { releaseResources(current); return status(); }
        current.canvas = platform.makeCanvas(geometry.output.width, geometry.output.height);
        const draw = () => {
          if (job !== current || !['preparing', 'recording', 'stopping'].includes(current.state)) return;
          try {
            const crop = videoCropGeometry(geometry, current.video.videoWidth, current.video.videoHeight);
            platform.draw(current.canvas, current.video, crop);
            if (current.canvasStream) platform.requestFrame(current.canvasStream);
          } catch (error) { fail(current, error); }
        };
        draw();
        if (current.state === 'error') throw new Error(current.reason);
        current.canvasStream = platform.captureCanvas(current.canvas, MEDIA_LIMITS.fps);
        current.recorder = platform.newRecorder(current.canvasStream, mime);
        current.recorder.ondataavailable = event => {
          if (job !== current || !['recording', 'stopping'].includes(current.state) || !event.data.size) return;
          current.bytes += event.data.size;
          if (current.bytes > MEDIA_LIMITS.bytes) { fail(current, new Error('A gravação excedeu o limite de 64 MiB e foi descartada.')); return; }
          current.chunks.push(event.data);
        };
        current.recorder.onerror = event => fail(current, event.error ?? new Error('O codificador falhou.'));
        current.recorder.onstop = () => {
          if (job !== current || !['recording', 'stopping'].includes(current.state)) return;
          try { ready(current, new Blob(current.chunks, { type: current.recorder.mimeType || mime })); }
          catch (error) { fail(current, error); }
        };
        current.removeEnded = platform.onEnded(current.stream, () => {
          if (job === current && current.state === 'recording') stop('interrupted');
        });
        platform.clearTimer(deadline);
        current.timers = current.timers.filter(timer => timer !== deadline);
        current.startedAt = Date.now();
        current.state = 'recording';
        current.recorder.start(250);
        draw();
        if (current.state === 'error') throw new Error(current.reason);
        current.timers.push(platform.interval(draw, 1000 / MEDIA_LIMITS.fps));
        current.timers.push(platform.timeout(() => { if (job === current && current.state === 'recording') stop('duration-limit'); }, MEDIA_LIMITS.durationMs));
        notify();
      }
      return status();
    } catch (error) {
      fail(current, error);
      throw error;
    }
  }
  return {
    start, stop, cancel, status,
    beginPage({ jobId, tabId, width, height }) {
      if (job) throw new Error('Finalize ou descarte a captura anterior antes de iniciar outra.');
      pageDimensions(width, height);
      const current = { id: jobId, tabId, mode: 'image', fullPage: true, state: 'preparing',
        width, height, covered: 0, slices: 0, timers: [], chunks: [], canvas: platform.makeCanvas(width, height) };
      job = current;
      current.timers.push(platform.timeout(() => fail(current, new Error('A captura da página excedeu dois minutos.')), 120000));
      notify();
      return status();
    },
    async appendPage({ jobId, dataUrl, geometry, width, height, offset, viewportHeight }) {
      const current = job;
      if (!current?.fullPage || current.id !== jobId || current.state !== 'preparing') throw new Error('A captura não está mais disponível.');
      if (width !== current.width || height < current.height || ++current.slices > PAGE_LIMITS.slices) throw new Error('A página mudou ou excedeu o limite de captura.');
      const placement = pageSlicePlacement({ width, height, offset, viewportHeight, covered: current.covered });
      if (typeof dataUrl !== 'string' || !dataUrl.startsWith('data:image/png;base64,') || dataUrl.length > MEDIA_LIMITS.bytes * 1.4) throw new Error('Imagem de captura inválida.');
      const image = await platform.decodeImage(dataUrl);
      try {
        if (job !== current || current.state !== 'preparing') throw new Error('A captura foi cancelada.');
        const crop = cropGeometry(geometry, image.width, image.height);
        if (height !== current.height) {
          platform.resizePageCanvas(current.canvas, width, height);
          current.height = height;
        }
        platform.drawPageSlice(current.canvas, image, {
          x: crop.x, y: crop.y + placement.skip / viewportHeight * crop.height,
          width: crop.width, height: placement.rows / viewportHeight * crop.height
        }, { x: 0, y: placement.y, width, height: placement.rows });
        current.covered = placement.end;
        notify();
        return status();
      } finally { image.close?.(); }
    },
    async finishPage(jobId) {
      const current = job;
      if (!current?.fullPage || current.id !== jobId || current.state !== 'preparing' || current.covered < current.height - 0.5) {
        throw new Error('A captura da página está incompleta.');
      }
      const blob = await platform.png(current.canvas);
      ready(current, blob);
      return status();
    },
    async inlineArtifact(jobId) {
      const artifact = this.artifact(jobId), current = job;
      const dataUrl = await platform.dataURL(current.blob);
      if (job !== current || current.state !== 'ready') throw new Error('A captura não está mais disponível.');
      return { ...artifact, dataUrl };
    },
    artifact(jobId) {
      if (job?.id !== jobId || job.state !== 'ready') throw new Error('A captura não está mais disponível.');
      const extension = job.mode === 'image' ? 'png' : job.mime.startsWith('video/mp4') ? 'mp4' : 'webm';
      return { jobId: job.id, url: job.url, mime: job.mime, mode: job.mode, startedAt: job.startedAt ?? null, reason: job.reason ?? null, filename: `mockai-${job.id}.${extension}` };
    }
  };
}
