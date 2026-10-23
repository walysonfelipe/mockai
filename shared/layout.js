// Escala visual compartilhada: dimensões reais dos iframes permanecem intactas.
export function fitMockups(sizes, { width, height, zoom = 1, gap = 24 } = {}) {
  if (!sizes.length || width <= 0 || height <= 0) return { columns: 1, scale: zoom };
  const cardWidth = 46, cardHeight = 74;
  const widest = Math.max(...sizes.map(size => size.width));
  const tallest = Math.max(...sizes.map(size => size.height));
  const maxColumns = Math.min(sizes.length, Math.max(1, Math.floor((width + gap) / (226 + gap))));
  const widthScale = columns => Math.max(0, ((width - gap * (columns - 1)) / columns - cardWidth) / widest);
  let best = { columns: 1, scale: 0 };
  for (let columns = 1; columns <= maxColumns; columns++) {
    const rows = Math.ceil(sizes.length / columns);
    let totalHeight = 0;
    for (let start = 0; start < sizes.length; start += columns) {
      totalHeight += Math.max(...sizes.slice(start, start + columns).map(size => size.height));
    }
    const scale = Math.max(0, Math.min(zoom, widthScale(columns), (height - cardHeight * rows - gap * (rows - 1)) / totalHeight));
    if (scale >= best.scale) best = { columns, scale };
  }
  // Em telas estreitas, mantém os mockups legíveis e permite rolagem para as próximas linhas.
  const readable = Math.min(180, width - cardWidth);
  if (best.scale * widest < readable) {
    const columns = maxColumns;
    best = { columns, scale: Math.max(0, Math.min(zoom, widthScale(columns), (height - cardHeight) / tallest, readable / widest)) };
  }
  return { columns: best.columns, scale: Math.max(0.001, Math.floor(best.scale * 1000) / 1000) };
}
