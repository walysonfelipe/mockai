export const MEDIA_LIMITS = Object.freeze({ durationMs: 120000, bytes: 64 * 1024 * 1024, fps: 30 });
export function validateCaptureGeometry(value) {
  const finite = number => typeof number === 'number' && Number.isFinite(number);
  const rect = value?.rect, viewport = value?.viewport, output = value?.output;
  if (!rect || !viewport || !output ||
      ![rect.x, rect.y, rect.width, rect.height, viewport.width, viewport.height].every(finite) ||
      viewport.width < 100 || viewport.height < 100 || viewport.width > 16000 || viewport.height > 16000 || viewport.width * viewport.height > 32000000 ||
      rect.x < 0 || rect.y < 0 || rect.width < 1 || rect.height < 1 ||
      rect.x + rect.width > viewport.width + 0.5 || rect.y + rect.height > viewport.height + 0.5 ||
      !Number.isInteger(output.width) || !Number.isInteger(output.height) ||
      output.width < 240 || output.height < 240 || output.width > 2400 || output.height > 2400 ||
      output.width * output.height > 3840000) throw new Error('A tela precisa estar inteira visível. Reduza o zoom e tente novamente.');
  return { rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
    viewport: { width: viewport.width, height: viewport.height }, output: { width: output.width, height: output.height } };
}
export function cropGeometry(value, sourceWidth, sourceHeight) {
  const geometry = validateCaptureGeometry(value);
  if (!Number.isFinite(sourceWidth) || !Number.isFinite(sourceHeight) || sourceWidth < 1 || sourceHeight < 1) throw new Error('A captura não contém imagem.');
  const { rect, viewport } = geometry;
  if (Math.abs((sourceWidth / sourceHeight) / (viewport.width / viewport.height) - 1) > 0.03) {
    throw new Error('O tamanho da aba mudou durante a captura. Tente novamente.');
  }
  const scaleX = sourceWidth / viewport.width, scaleY = sourceHeight / viewport.height;
  return { x: rect.x * scaleX, y: rect.y * scaleY, width: rect.width * scaleX, height: rect.height * scaleY, ...{ output: geometry.output } };
}
export function chooseVideoType(format, supports) {
  const types = format === 'mp4' ? ['video/mp4;codecs=avc1.42E01E', 'video/mp4'] :
    format === 'webm' ? ['video/webm;codecs=vp8', 'video/webm;codecs=vp9', 'video/webm'] : [];
  const mime = types.find(type => supports(type));
  if (!mime) throw new Error(format === 'mp4' ? 'MP4 indisponível neste navegador. Escolha WebM.' : 'Não há codificador disponível para o formato escolhido.');
  return mime;
}

export function sameCaptureGeometry(first, second) {
  const a = validateCaptureGeometry(first), b = validateCaptureGeometry(second);
  return ['rect', 'viewport', 'output'].every(group => Object.keys(a[group]).every(key => Math.abs(a[group][key] - b[group][key]) <= 0.5));
}
