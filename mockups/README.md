# Mockups do Mockaí

Esta pasta reúne os 80 mockups de `local/img/devices`, com nomes únicos por fabricante e modelo.

- Moldura: `apple-iphone-18-pro.avif`, `android-samsung-galaxy-s26.avif`, etc.
- Miniatura, quando existente: o mesmo nome com o sufixo `-preview.avif`.
- `catalog.json`: nomes de exibição e correspondência entre os arquivos originais e os novos.

No simulador, abra **Dispositivos**, busque o nome do modelo e clique em **Adicionar**. Todos os modelos estão disponíveis; o espaço de trabalho mantém o limite de quatro telas simultâneas. Os modelos também aceitam favoritos e conjuntos salvos.

O catálogo com dimensões, recortes e posição das telas fica em `src/shared/model.js`. O build copia esta pasta para `local-next/mockups` e inclui os modelos no simulador. Os arquivos originais em `local` são preservados.
