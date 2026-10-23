// Limites de canvas para manter a captura local dentro de um orçamento previsível.
export const PAGE_LIMITS = Object.freeze({ width: 2400, height: 32760, pixels: 32000000, slices: 160 });
export function pageDimensions(width, height) {
  if (!Number.isInteger(width) || !Number.isInteger(height) || width < 1 || height < 1 ||
      width > PAGE_LIMITS.width || height > PAGE_LIMITS.height || width * height > PAGE_LIMITS.pixels) {
    throw new Error('A página é grande demais para uma única imagem.');
  }
  return { width, height };
}
export function pageSlicePlacement({ width, height, offset, viewportHeight, covered }) {
  pageDimensions(width, height);
  if (![offset, viewportHeight, covered].every(Number.isFinite) || offset < 0 || viewportHeight < 1 ||
      covered < 0 || offset > covered + 0.5 || covered > height || offset > height) {
    throw new Error('A página mudou durante a captura. Tente novamente.');
  }
  const skip = Math.max(0, covered - offset);
  const rows = Math.min(viewportHeight - skip, height - covered);
  if (rows < 0.5) throw new Error('Não foi possível avançar a rolagem da página.');
  return { skip, rows, y: covered, end: Math.min(height, covered + rows) };
}
