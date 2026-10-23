export function browserPlatform(emit) {
  return {
    emit, supports: mime => MediaRecorder.isTypeSupported(mime),
    async decodeImage(dataUrl) { return createImageBitmap(await (await fetch(dataUrl)).blob()); },
    makeCanvas(width, height) { const canvas = document.createElement('canvas'); canvas.width = width; canvas.height = height; return canvas; },
    draw(canvas, source, crop) {
      const context = canvas.getContext('2d', { alpha: false });
      if (!context) throw new Error('Canvas indisponível.');
      context.drawImage(source, crop.x, crop.y, crop.width, crop.height, 0, 0, canvas.width, canvas.height);
    },
    png(canvas) { return new Promise((resolve, reject) => canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('Falha ao gerar PNG.')), 'image/png')); },
    async openStream(streamId) {
      return navigator.mediaDevices.getUserMedia({ audio: false, video: { mandatory: { chromeMediaSource: 'tab', chromeMediaSourceId: streamId } } });
    },
    async openVideo(stream) {
      const video = document.createElement('video'); video.muted = true; video.srcObject = stream;
      const close = () => { video.pause(); video.srcObject = null; video.remove(); };
      try {
        await new Promise((resolve, reject) => {
          const timeout = setTimeout(() => finish(new Error('A aba não forneceu imagem para a gravação.')), 8000);
          function finish(error) {
            clearTimeout(timeout); video.onloadeddata = video.onerror = null;
            error ? reject(error) : resolve();
          }
          video.onloadeddata = () => finish(); video.onerror = () => finish(new Error('Não foi possível ler o vídeo da aba.'));
          document.body.append(video);
          video.play().catch(finish);
        });
        return { video, close };
      } catch (error) { close(); throw error; }
    },
    captureCanvas: (canvas, fps) => canvas.captureStream(fps),
    newRecorder: (stream, mimeType) => new MediaRecorder(stream, { mimeType, videoBitsPerSecond: 4000000 }),
    onEnded(stream, callback) {
      const tracks = stream.getTracks(); tracks.forEach(track => track.addEventListener('ended', callback));
      return () => tracks.forEach(track => track.removeEventListener('ended', callback));
    },
    blobURL: blob => URL.createObjectURL(blob), revokeURL: url => URL.revokeObjectURL(url),
    timeout: (fn, time) => setTimeout(fn, time), interval: (fn, time) => setInterval(fn, time),
    clearTimer: id => { clearTimeout(id); clearInterval(id); }
  };
}
