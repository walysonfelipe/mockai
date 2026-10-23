# Mockups do Mockaí

Esta pasta reúne os 80 mockups usados pela extensão, com nomes únicos por fabricante e modelo.

- Moldura: `apple-iphone-18-pro.avif`, `android-samsung-galaxy-s26.avif`, etc.
- Miniatura: usa a mesma imagem da moldura, redimensionada na interface.
- `catalog.json`: nomes de exibição e correspondência entre os arquivos originais e os novos.

No simulador, abra **Dispositivos**, busque o nome do modelo e clique em **Adicionar**. Todos os modelos estão disponíveis; o espaço de trabalho mantém o limite de quatro telas simultâneas. Os modelos também aceitam favoritos e conjuntos salvos.

O catálogo com dimensões, recortes e posição das telas fica em `shared/model.js`. As imagens desta pasta são carregadas diretamente pela extensão, sem necessidade de build.

Os notebooks usam `screenBounds` para indicar a área útil na imagem da moldura, nas mesmas unidades de `frameWidth` e `frameHeight`. A interface ajusta a escala visual para essa área e mantém a resolução lógica do iframe. Ao alterar esses valores, atualize também o catálogo incorporado em `content/simulator.js` e execute `node --test tests/notebook-layout.test.mjs`.
