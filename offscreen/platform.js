export function browserPlatform(emit) {
  return {
    emit, supports: mime => MediaRecorder.isTypeSupported(mime),
    async decodeImage(dataUrl) { return createImageBitmap(await (await fetch(dataUrl)).blob()); },
    makeCanvas(width, height) { const canvas = document.createElement('canvas'); canvas.width = width; canvas.height = height; return canvas; },
    resizePageCanvas(canvas, width, height) {
      const copy = document.createElement('canvas'); copy.width = canvas.width; copy.height = canvas.height;
      const saved = copy.getContext('2d');
      if (!saved) throw new Error('Canvas indisponível.');
      saved.drawImage(canvas, 0, 0);
      canvas.width = width; canvas.height = height;
      const context = canvas.getContext('2d');
      if (!context) throw new Error('Canvas indisponível.');
      context.drawImage(copy, 0, 0);
      copy.width = copy.height = 1;
    },
    drawPageSlice(canvas, image, crop, destination) {
      const context = canvas.getContext('2d');
      if (!context) throw new Error('Canvas indisponível.');
      context.drawImage(image, crop.x, crop.y, crop.width, crop.height,
        destination.x, destination.y, destination.width, destination.height);
    },
    draw(canvas, source, crop) {
      const context = canvas.getContext('2d', { alpha: false });
      if (!context) throw new Error('Canvas indisponível.');
      context.drawImage(source, crop.x, crop.y, crop.width, crop.height, 0, 0, canvas.width, canvas.height);
    },
    async composePNG(canvas, source, crop, composition) {
      const { width, height, screen, frame } = composition;
      const context = canvas.getContext('2d', { alpha: true });
      if (!context) throw new Error('Canvas indisponível.');
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.save();
      try {
        context.scale(canvas.width / width, canvas.height / height);
        if (frame) {
          const image = await createImageBitmap(await (await fetch(chrome.runtime.getURL(frame))).blob());
          try {
            context.save();
            if (composition.rotated) { context.translate(width, 0); context.rotate(Math.PI / 2); }
            context.drawImage(image, 0, 0, composition.imageWidth, composition.imageHeight);
            context.restore();
          } finally { image.close(); }
        }
        context.translate(screen.x, screen.y);
        if (frame) {
          const path = new Path2D();
          path.addPath(new Path2D(composition.mask), new DOMMatrix(composition.matrix));
          context.clip(path);
        } else {
          context.beginPath(); context.roundRect(0, 0, screen.width, screen.height, 14); context.clip();
        }
        // Só os pixels da tela entram na composição; o fundo da aba nunca é desenhado.
        context.drawImage(source, crop.x + screen.x / width * crop.width, crop.y + screen.y / height * crop.height,
          screen.width / width * crop.width, screen.height / height * crop.height,
          0, 0, screen.width, screen.height);
      } finally { context.restore(); }
    },
    dataURL(blob) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader(); reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('Não foi possível ler a captura.')); reader.readAsDataURL(blob);
      });
    },
    png(canvas) { return new Promise((resolve, reject) => canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('Falha ao gerar PNG.')), 'image/png')); },
    async openStream(streamId, viewport) {
      // Mantém a proporção real da aba em vez do tamanho padrão de vídeo.
      const scale = Math.min(1, 1920 / viewport.width, 1080 / viewport.height);
      const width = Math.round(viewport.width * scale), height = Math.round(viewport.height * scale);
      return navigator.mediaDevices.getUserMedia({ audio: false, video: { mandatory: {
        chromeMediaSource: 'tab', chromeMediaSourceId: streamId,
        minWidth: width, maxWidth: width, minHeight: height, maxHeight: height,
        maxFrameRate: 30
      } } });
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
    captureCanvas: canvas => canvas.captureStream(0),
    requestFrame: stream => stream.getVideoTracks()[0].requestFrame(),
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
