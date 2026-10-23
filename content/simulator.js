(() => {
const MODEL = (() => {
const MESSAGES = {"pt-BR":{"app.name":"Mockaí","app.description":"Teste seus sites em celulares, tablets e notebooks lado a lado, com rolagem sincronizada, capturas de tela e gravação de vídeo.","app.open":"Abrir Mockaí","app.workspace":"ÁREA DE TESTE","app.dialog":"Simulador Mockaí","common.close":"Fechar","common.name":"Nome","common.delete":"Excluir","common.add":"Adicionar","common.remove":"Remover","common.open":"Abrir","common.language":"Idioma","common.auto":"Automático","common.wait":"Aguarde…","workspace.library":"Dispositivos e conjuntos","workspace.light":"Tema claro","workspace.screen":"Tela","workspace.selected":"Dispositivo selecionado","workspace.width":"Largura","workspace.height":"Altura","workspace.rotate":"Girar selecionado","workspace.zoom":"Zoom","workspace.reload":"Recarregar selecionado","workspace.notice":"Prévia responsiva · alguns sites bloqueiam quadros. O navegador e o agente de usuário continuam sendo os do computador.","workspace.screens":"Telas em teste","workspace.hint":"Clique em um mockup para selecioná-lo e ajustar suas dimensões.","workspace.count":"{count}/{limit} telas · {zoom}%","workspace.removeName":"Remover {name}","workspace.frameTitle":"{name} — página em teste","library.title":"Suas telas","library.search":"Buscar perfil","library.searchHint":"Nome ou dimensão","library.favorites":"Favoritos ({count})","library.favorite":"Favoritar {name}","library.unfavorite":"Desfavoritar {name}","library.addName":"Adicionar {name}","library.deleteProfile":"Excluir perfil {name}","library.empty":"Nenhum perfil encontrado.","library.emptyFavorites":"Nenhum favorito encontrado.","library.custom":"Perfil personalizado","library.customHint":"Salva as dimensões da tela selecionada.","library.saveProfile":"Salvar perfil","library.sets":"Conjuntos salvos","library.setName":"Nome do conjunto","library.saveSet":"Salvar telas atuais","library.emptySets":"Salve as telas atuais para abrir depois.","library.setCount":"{count} dispositivo(s)","library.openSet":"Abrir conjunto {name}","library.deleteSet":"Excluir conjunto {name}","library.updated":"Biblioteca atualizada.","library.opened":"Conjunto “{name}” aberto.","profile.compact":"Compacto","profile.wide":"Amplo","profile.tablet":"Tablet","sync.label":"Sincronizar rolagem","sync.off":"Rolagem independente","sync.status":"Rolagem vinculada: {linked}/{total} telas","sync.unavailable":"Sincronização exige duas telas acessíveis na mesma origem.","sync.hint":"Sincroniza o progresso de rolagem do documento. Quadros de outra origem e painéis internos não são vinculados.","options.saved":"Preferências salvas.","media.png":"Capturar PNG","media.video":"Vídeo","media.record":"Gravar selecionado","media.stop":"Parar e exportar","media.cancel":"Cancelar captura","media.recording":"Gravando · sem áudio · até 2 min","media.preparing":"Preparando captura…","media.stopping":"Finalizando…","media.finished":"Gravação finalizada.","media.cancelled":"Captura cancelada.","media.revoked":"A permissão de gravação foi removida.","media.interrupted":"O navegador interrompeu a captura. Os dados disponíveis foram preservados.","media.duration":"A gravação atingiu o limite de dois minutos.","popup.intro":"Experimente sua página em uma tela com as dimensões que você escolher.","popup.open":"Abrir simulador","popup.close":"Fechar simulador","popup.format":"Formato de vídeo","popup.record":"Gravar tela selecionada","popup.note":"Prévia independente · até quatro dispositivos","popup.blocked":"Alguns sites impedem abertura em quadros.","popup.opened":"Simulador aberto nesta aba.","popup.closed":"Simulador encerrado.","popup.preparing":"Preparando gravação…","popup.recording":"Gravação em andamento. Você também pode parar ou cancelar na página.","popup.unavailable":"Página indisponível","export.title":"Exportar · Mockaí","export.heading":"Sua captura está pronta.","export.preparing":"Preparando arquivo local…","export.nav":"Exportar","export.download":"Baixar {format}","export.convert":"Converter para MP4","export.cancel":"Cancelar conversão","export.progress":"Progresso da conversão","export.note":"O arquivo é preparado neste computador. Ao fechar esta página, os arquivos temporários são liberados.","export.alt":"Captura da tela selecionada","export.ready":"Arquivo pronto para baixar.","export.noMP4":"Conversão MP4 indisponível neste navegador; o WebM permanece disponível.","export.converting":"Convertendo neste computador. A conversão acompanha a duração do vídeo.","export.converted":"MP4 pronto. O WebM original continua disponível.","export.original":"O WebM original continua disponível.","error.native":"Não foi possível concluir: {detail}","error.options":"Preferências inválidas.","error.settings":"Ajustes inválidos.","error.dimensions":"Dimensões ou aparência inválidas.","error.name":"Use um nome de 1 a 48 caracteres, sem caracteres de controle.","error.id":"Identificador inválido.","error.deviceCount":"Mantenha entre 1 e 4 dispositivos abertos.","error.device":"Dispositivo inválido.","error.selection":"Seleção ou identificadores de dispositivos inválidos.","error.deviceMissing":"Dispositivo não encontrado.","error.library":"Biblioteca inválida.","error.profile":"Perfil personalizado inválido.","error.favorites":"Favoritos ou perfis inválidos.","error.duplicateSets":"Conjuntos duplicados.","error.http":"Abra uma página HTTP ou HTTPS para simular.","error.protected":"O Chrome não permite simular esta página protegida.","error.visible":"A tela precisa estar inteira visível. Reduza o zoom e tente novamente.","error.noImage":"A captura não contém imagem.","error.resized":"O tamanho da aba mudou durante a captura. Tente novamente.","error.mp4":"MP4 indisponível neste navegador. Escolha WebM.","error.codec":"Não há codificador disponível para o formato escolhido.","error.service":"O serviço de mídia não respondeu.","error.focus":"Volte à aba do simulador antes de capturar.","error.mode":"Tipo de captura inválido.","error.format":"Formato de vídeo inválido.","error.previous":"Finalize ou descarte a captura anterior antes de iniciar outra.","error.permissionHint":"A permissão de gravação está desatualizada. Recarregue a extensão em chrome://extensions e atualize esta página.","error.prepare":"Não foi possível preparar a tela.","error.moved":"A posição da tela mudou. Tente capturar novamente.","error.noRecording":"Esta aba não possui gravação em andamento.","error.event":"Evento de mídia não autorizado.","error.export":"Exportação não autorizada ou expirada.","error.exportOperation":"Operação de exportação desconhecida.","error.sessionVersion":"Versão de sessão inválida.","error.message":"Mensagem não autorizada.","error.origin":"Origem da mensagem inválida.","error.tab":"Aba inválida.","error.session":"Sessão encerrada.","error.preview":"Captura disponível somente na extensão carregada no Chrome.","error.mediaOperation":"Operação de mídia desconhecida.","error.context":"Operação indisponível neste contexto.","error.openFirst":"Abra o simulador antes de gravar.","error.operation":"Operação desconhecida.","error.mount":"A interface não confirmou a abertura.","error.customLimit":"O limite é de 20 perfis personalizados.","error.customMissing":"Perfil personalizado não encontrado.","error.profileMissing":"Perfil não encontrado.","error.profileRefresh":"Perfil não encontrado. Atualize a biblioteca.","error.setLimit":"O limite é de 16 conjuntos.","error.setMissing":"Conjunto não encontrado.","error.libraryOperation":"Operação de biblioteca desconhecida.","error.noData":"A gravação terminou sem dados.","error.size":"O arquivo excedeu o limite de 64 MiB.","error.notRecording":"Não há gravação em andamento.","error.stopTimeout":"O navegador não finalizou a gravação.","error.prepareTimeout":"A preparação da captura excedeu o tempo permitido.","error.image":"Imagem de captura inválida.","error.recordingSize":"A gravação excedeu o limite de 64 MiB e foi descartada.","error.encoder":"O codificador falhou.","error.artifact":"A captura não está mais disponível.","error.canvas":"Canvas indisponível.","error.png":"Falha ao gerar PNG.","error.videoTimeout":"A aba não forneceu imagem para a gravação.","error.video":"Não foi possível ler o vídeo da aba.","error.cancelConversion":"Conversão cancelada.","error.openVideo":"Não foi possível abrir o vídeo para conversão.","error.decode":"Este vídeo não pode ser convertido pelo navegador.","error.convertSize":"Dimensões indisponíveis ou grandes demais para conversão.","error.convertCanvas":"Canvas indisponível para conversão.","error.mp4Size":"O MP4 excedeu o limite de 64 MiB.","error.mp4Encoder":"O codificador MP4 falhou.","error.convertEmpty":"A conversão terminou sem dados.","error.playback":"A reprodução foi interrompida durante a conversão.","error.convertTimeout":"A conversão excedeu o tempo permitido.","error.expired":"A captura expirou.","error.file":"Não foi possível recuperar o arquivo local.","error.emptyFile":"O arquivo está vazio ou excede o limite de tamanho.","error.extension":"A extensão não respondeu. Recarregue esta página.","error.popupExtension":"Não foi possível falar com a extensão. Recarregue a página.","error.permission":"Permissão de gravação não concedida.","error.prepareFocus":"Volte à aba do simulador para preparar a captura.","error.inputDimensions":"Use as dimensões indicadas nos campos.","header.devices":"Dispositivos","header.capture":"Capturar","header.settings":"Ajustes","header.stop":"Parar","header.cancel":"Cancelar","header.recording":"Gravando","settings.device":"Tela selecionada","settings.dimensions":"Dimensões","settings.rotate":"Girar","settings.reload":"Recarregar","settings.appearance":"Preferências","settings.scale":"Escala de visualização","settings.record":"Gravar esta tela","settings.videoHint":"Sem áudio · até 2 minutos","settings.about":"Sobre esta prévia","screen.mode":"Modo da tela","screen.browser":"Navegador","screen.pwa":"PWA","screen.fullscreen":"Tela cheia","screen.hint":"Navegador mostra as barras de navegação. PWA mantém a barra de status. Tela cheia usa toda a tela para o conteúdo.","error.screenMode":"Modo da tela inválido.","capture.description":"Capture uma imagem ou grave um vídeo da tela selecionada.","capture.image":"Capturar tela","capture.imageHint":"Salvar imagem em PNG.","capture.videoHint":"Sem áudio · até 2 minutos","capture.ready":"Captura pronta","capture.transparent":"PNG · Fundo transparente","capture.videoShort":"Gravar vídeo","capture.imageShort":"Capturar tela","capture.video":"Vídeo","capture.format":"Formato","capture.fullPage":"Capturar página inteira","capture.fullPageHint":"Do início ao fim, em um único PNG.","capture.scrolling":"Capturando página · {progress}%","capture.fullPageReady":"PNG · Página inteira"},"en":{"app.name":"Mockaí","app.description":"Test your sites on phones, tablets and laptops side by side, with synced scrolling, screenshots and video recording.","app.open":"Open Mockaí","app.workspace":"TEST WORKSPACE","app.dialog":"Mockaí simulator","common.close":"Close","common.name":"Name","common.delete":"Delete","common.add":"Add","common.remove":"Remove","common.open":"Open","common.language":"Language","common.auto":"Automatic","common.wait":"Please wait…","workspace.library":"Devices and sets","workspace.light":"Light theme","workspace.screen":"Screen","workspace.selected":"Selected device","workspace.width":"Width","workspace.height":"Height","workspace.rotate":"Rotate selected","workspace.zoom":"Zoom","workspace.reload":"Reload selected","workspace.notice":"Responsive preview · some sites block frames. The browser and user agent remain those of your computer.","workspace.screens":"Test screens","workspace.hint":"Click a mockup to select it and adjust its dimensions.","workspace.count":"{count}/{limit} screens · {zoom}%","workspace.removeName":"Remove {name}","workspace.frameTitle":"{name} — test page","library.title":"Your screens","library.search":"Search profiles","library.searchHint":"Name or size","library.favorites":"Favorites ({count})","library.favorite":"Favorite {name}","library.unfavorite":"Unfavorite {name}","library.addName":"Add {name}","library.deleteProfile":"Delete profile {name}","library.empty":"No profiles found.","library.emptyFavorites":"No favorites found.","library.custom":"Custom profile","library.customHint":"Saves the dimensions of the selected screen.","library.saveProfile":"Save profile","library.sets":"Saved sets","library.setName":"Set name","library.saveSet":"Save current screens","library.emptySets":"Save the current screens to open them later.","library.setCount":"{count} device(s)","library.openSet":"Open set {name}","library.deleteSet":"Delete set {name}","library.updated":"Library updated.","library.opened":"Set “{name}” opened.","profile.compact":"Compact","profile.wide":"Wide","profile.tablet":"Tablet","sync.label":"Sync scrolling","sync.off":"Independent scrolling","sync.status":"Linked scrolling: {linked}/{total} screens","sync.unavailable":"Sync requires two accessible screens on the same origin.","sync.hint":"Syncs document scroll progress. Cross-origin frames and nested scroll areas are not linked.","options.saved":"Preferences saved.","media.png":"Capture PNG","media.video":"Video","media.record":"Record selected","media.stop":"Stop and export","media.cancel":"Cancel capture","media.recording":"Recording · no audio · up to 2 min","media.preparing":"Preparing capture…","media.stopping":"Finishing…","media.finished":"Recording finished.","media.cancelled":"Capture cancelled.","media.revoked":"Recording permission was removed.","media.interrupted":"The browser interrupted capture. Available data was preserved.","media.duration":"Recording reached the two-minute limit.","popup.intro":"Try your page on a screen with the dimensions you choose.","popup.open":"Open simulator","popup.close":"Close simulator","popup.format":"Video format","popup.record":"Record selected screen","popup.note":"Independent preview · up to four devices","popup.blocked":"Some sites prevent loading in frames.","popup.opened":"Simulator opened in this tab.","popup.closed":"Simulator closed.","popup.preparing":"Preparing recording…","popup.recording":"Recording in progress. You can also stop or cancel on the page.","popup.unavailable":"Page unavailable","export.title":"Export · Mockaí","export.heading":"Your capture is ready.","export.preparing":"Preparing local file…","export.nav":"Export","export.download":"Download {format}","export.convert":"Convert to MP4","export.cancel":"Cancel conversion","export.progress":"Conversion progress","export.note":"The file is prepared on this computer. Closing this page releases temporary files.","export.alt":"Capture of the selected screen","export.ready":"File ready to download.","export.noMP4":"MP4 conversion is unavailable in this browser; WebM remains available.","export.converting":"Converting on this computer. Conversion takes about as long as the video.","export.converted":"MP4 ready. The original WebM remains available.","export.original":"The original WebM remains available.","error.native":"Could not complete: {detail}","error.options":"Invalid preferences.","error.settings":"Invalid settings.","error.dimensions":"Invalid dimensions or appearance.","error.name":"Use a name of 1 to 48 characters without control characters.","error.id":"Invalid identifier.","error.deviceCount":"Keep between 1 and 4 devices open.","error.device":"Invalid device.","error.selection":"Invalid device selection or identifiers.","error.deviceMissing":"Device not found.","error.library":"Invalid library.","error.profile":"Invalid custom profile.","error.favorites":"Invalid favorites or profiles.","error.duplicateSets":"Duplicate sets.","error.http":"Open an HTTP or HTTPS page to simulate.","error.protected":"Chrome does not allow simulating this protected page.","error.visible":"The entire screen must be visible. Reduce the zoom and try again.","error.noImage":"The capture contains no image.","error.resized":"The tab size changed during capture. Try again.","error.mp4":"MP4 is unavailable in this browser. Choose WebM.","error.codec":"No encoder is available for the selected format.","error.service":"The media service did not respond.","error.focus":"Return to the simulator tab before capturing.","error.mode":"Invalid capture type.","error.format":"Invalid video format.","error.previous":"Finish or discard the previous capture before starting another.","error.permissionHint":"The recording permission is outdated. Reload the extension at chrome://extensions and refresh this page.","error.prepare":"Could not prepare the screen.","error.moved":"The screen position changed. Try capturing again.","error.noRecording":"This tab has no recording in progress.","error.event":"Unauthorized media event.","error.export":"Export is unauthorized or expired.","error.exportOperation":"Unknown export operation.","error.sessionVersion":"Invalid session version.","error.message":"Unauthorized message.","error.origin":"Invalid message origin.","error.tab":"Invalid tab.","error.session":"Session ended.","error.preview":"Capture is only available in the extension loaded in Chrome.","error.mediaOperation":"Unknown media operation.","error.context":"Operation unavailable in this context.","error.openFirst":"Open the simulator before recording.","error.operation":"Unknown operation.","error.mount":"The interface did not confirm opening.","error.customLimit":"The limit is 20 custom profiles.","error.customMissing":"Custom profile not found.","error.profileMissing":"Profile not found.","error.profileRefresh":"Profile not found. Refresh the library.","error.setLimit":"The limit is 16 sets.","error.setMissing":"Set not found.","error.libraryOperation":"Unknown library operation.","error.noData":"Recording ended without data.","error.size":"The file exceeded the 64 MiB limit.","error.notRecording":"There is no recording in progress.","error.stopTimeout":"The browser did not finalize the recording.","error.prepareTimeout":"Capture preparation timed out.","error.image":"Invalid capture image.","error.recordingSize":"Recording exceeded the 64 MiB limit and was discarded.","error.encoder":"The encoder failed.","error.artifact":"The capture is no longer available.","error.canvas":"Canvas is unavailable.","error.png":"Failed to generate PNG.","error.videoTimeout":"The tab did not provide an image for recording.","error.video":"Could not read the tab video.","error.cancelConversion":"Conversion cancelled.","error.openVideo":"Could not open the video for conversion.","error.decode":"This video cannot be converted by the browser.","error.convertSize":"Dimensions unavailable or too large for conversion.","error.convertCanvas":"Canvas unavailable for conversion.","error.mp4Size":"The MP4 exceeded the 64 MiB limit.","error.mp4Encoder":"The MP4 encoder failed.","error.convertEmpty":"Conversion ended without data.","error.playback":"Playback was interrupted during conversion.","error.convertTimeout":"Conversion timed out.","error.expired":"The capture expired.","error.file":"Could not retrieve the local file.","error.emptyFile":"The file is empty or exceeds the size limit.","error.extension":"The extension did not respond. Reload this page.","error.popupExtension":"Could not reach the extension. Reload the page.","error.permission":"Recording permission was not granted.","error.prepareFocus":"Return to the simulator tab to prepare capture.","error.inputDimensions":"Use the dimensions indicated in the fields.","header.devices":"Devices","header.capture":"Capture","header.settings":"Settings","header.stop":"Stop","header.cancel":"Cancel","header.recording":"Recording","settings.device":"Selected screen","settings.dimensions":"Dimensions","settings.rotate":"Rotate","settings.reload":"Reload","settings.appearance":"Preferences","settings.scale":"Preview scale","settings.record":"Record this screen","settings.videoHint":"No audio · up to 2 minutes","settings.about":"About this preview","screen.mode":"Screen mode","screen.browser":"Browser","screen.pwa":"PWA","screen.fullscreen":"Fullscreen","screen.hint":"Browser shows navigation bars. PWA keeps the status bar. Fullscreen uses the entire screen for content.","error.screenMode":"Invalid screen mode.","capture.description":"Take a screenshot or record a video of the selected device.","capture.image":"Capture screen","capture.imageHint":"Save an image as PNG.","capture.videoHint":"No audio · up to 2 minutes","capture.ready":"Capture ready","capture.transparent":"PNG · Transparent background","capture.videoShort":"Record video","capture.imageShort":"Capture screen","capture.video":"Video","capture.format":"Format","capture.fullPage":"Capture full page","capture.fullPageHint":"From top to bottom, in a single PNG.","capture.scrolling":"Capturing page · {progress}%","capture.fullPageReady":"PNG · Full page"},"es":{"app.name":"Mockaí","app.description":"Prueba tus sitios en móviles, tablets y portátiles lado a lado, con scroll sincronizado, capturas de pantalla y grabación de video.","app.open":"Abrir Mockaí","app.workspace":"ÁREA DE PRUEBAS","app.dialog":"Simulador Mockaí","common.close":"Cerrar","common.name":"Nombre","common.delete":"Eliminar","common.add":"Añadir","common.remove":"Quitar","common.open":"Abrir","common.language":"Idioma","common.auto":"Automático","common.wait":"Espera…","workspace.library":"Dispositivos y conjuntos","workspace.light":"Tema claro","workspace.screen":"Pantalla","workspace.selected":"Dispositivo seleccionado","workspace.width":"Ancho","workspace.height":"Alto","workspace.rotate":"Girar seleccionado","workspace.zoom":"Zoom","workspace.reload":"Recargar seleccionado","workspace.notice":"Vista previa adaptable · algunos sitios bloquean marcos. El navegador y el agente de usuario siguen siendo los del ordenador.","workspace.screens":"Pantallas en prueba","workspace.hint":"Haz clic en un mockup para seleccionarlo y ajustar sus dimensiones.","workspace.count":"{count}/{limit} pantallas · {zoom}%","workspace.removeName":"Quitar {name}","workspace.frameTitle":"{name} — página en prueba","library.title":"Tus pantallas","library.search":"Buscar perfiles","library.searchHint":"Nombre o tamaño","library.favorites":"Favoritos ({count})","library.favorite":"Añadir {name} a favoritos","library.unfavorite":"Quitar {name} de favoritos","library.addName":"Añadir {name}","library.deleteProfile":"Eliminar perfil {name}","library.empty":"No se encontraron perfiles.","library.emptyFavorites":"No se encontraron favoritos.","library.custom":"Perfil personalizado","library.customHint":"Guarda las dimensiones de la pantalla seleccionada.","library.saveProfile":"Guardar perfil","library.sets":"Conjuntos guardados","library.setName":"Nombre del conjunto","library.saveSet":"Guardar pantallas actuales","library.emptySets":"Guarda las pantallas actuales para abrirlas después.","library.setCount":"{count} dispositivo(s)","library.openSet":"Abrir conjunto {name}","library.deleteSet":"Eliminar conjunto {name}","library.updated":"Biblioteca actualizada.","library.opened":"Conjunto «{name}» abierto.","profile.compact":"Compacto","profile.wide":"Amplio","profile.tablet":"Tableta","sync.label":"Sincronizar desplazamiento","sync.off":"Desplazamiento independiente","sync.status":"Desplazamiento vinculado: {linked}/{total} pantallas","sync.unavailable":"La sincronización requiere dos pantallas accesibles del mismo origen.","sync.hint":"Sincroniza el progreso de desplazamiento del documento. Los marcos de otro origen y los paneles internos no se vinculan.","options.saved":"Preferencias guardadas.","media.png":"Capturar PNG","media.video":"Vídeo","media.record":"Grabar seleccionado","media.stop":"Detener y exportar","media.cancel":"Cancelar captura","media.recording":"Grabando · sin audio · hasta 2 min","media.preparing":"Preparando captura…","media.stopping":"Finalizando…","media.finished":"Grabación finalizada.","media.cancelled":"Captura cancelada.","media.revoked":"Se retiró el permiso de grabación.","media.interrupted":"El navegador interrumpió la captura. Se conservaron los datos disponibles.","media.duration":"La grabación alcanzó el límite de dos minutos.","popup.intro":"Prueba tu página en una pantalla con las dimensiones que elijas.","popup.open":"Abrir simulador","popup.close":"Cerrar simulador","popup.format":"Formato de vídeo","popup.record":"Grabar pantalla seleccionada","popup.note":"Vista previa independiente · hasta cuatro dispositivos","popup.blocked":"Algunos sitios impiden la carga en marcos.","popup.opened":"Simulador abierto en esta pestaña.","popup.closed":"Simulador cerrado.","popup.preparing":"Preparando grabación…","popup.recording":"Grabación en curso. También puedes detenerla o cancelarla en la página.","popup.unavailable":"Página no disponible","export.title":"Exportar · Mockaí","export.heading":"Tu captura está lista.","export.preparing":"Preparando archivo local…","export.nav":"Exportar","export.download":"Descargar {format}","export.convert":"Convertir a MP4","export.cancel":"Cancelar conversión","export.progress":"Progreso de conversión","export.note":"El archivo se prepara en este ordenador. Al cerrar esta página se liberan los archivos temporales.","export.alt":"Captura de la pantalla seleccionada","export.ready":"Archivo listo para descargar.","export.noMP4":"La conversión a MP4 no está disponible en este navegador; el WebM sigue disponible.","export.converting":"Convirtiendo en este ordenador. La conversión tarda aproximadamente lo que dura el vídeo.","export.converted":"MP4 listo. El WebM original sigue disponible.","export.original":"El WebM original sigue disponible.","error.native":"No se pudo completar: {detail}","error.options":"Preferencias no válidas.","error.settings":"Ajustes no válidos.","error.dimensions":"Dimensiones o apariencia no válidas.","error.name":"Usa un nombre de 1 a 48 caracteres sin caracteres de control.","error.id":"Identificador no válido.","error.deviceCount":"Mantén entre 1 y 4 dispositivos abiertos.","error.device":"Dispositivo no válido.","error.selection":"Selección o identificadores de dispositivos no válidos.","error.deviceMissing":"Dispositivo no encontrado.","error.library":"Biblioteca no válida.","error.profile":"Perfil personalizado no válido.","error.favorites":"Favoritos o perfiles no válidos.","error.duplicateSets":"Conjuntos duplicados.","error.http":"Abre una página HTTP o HTTPS para simular.","error.protected":"Chrome no permite simular esta página protegida.","error.visible":"La pantalla debe estar completamente visible. Reduce el zoom e inténtalo de nuevo.","error.noImage":"La captura no contiene imagen.","error.resized":"El tamaño de la pestaña cambió durante la captura. Inténtalo de nuevo.","error.mp4":"MP4 no está disponible en este navegador. Elige WebM.","error.codec":"No hay un codificador disponible para el formato elegido.","error.service":"El servicio de medios no respondió.","error.focus":"Vuelve a la pestaña del simulador antes de capturar.","error.mode":"Tipo de captura no válido.","error.format":"Formato de vídeo no válido.","error.previous":"Finaliza o descarta la captura anterior antes de iniciar otra.","error.permissionHint":"El permiso de grabación está desactualizado. Recarga la extensión en chrome://extensions y actualiza esta página.","error.prepare":"No se pudo preparar la pantalla.","error.moved":"La posición de la pantalla cambió. Intenta capturar de nuevo.","error.noRecording":"Esta pestaña no tiene una grabación en curso.","error.event":"Evento de medios no autorizado.","error.export":"La exportación no está autorizada o ha caducado.","error.exportOperation":"Operación de exportación desconocida.","error.sessionVersion":"Versión de sesión no válida.","error.message":"Mensaje no autorizado.","error.origin":"Origen del mensaje no válido.","error.tab":"Pestaña no válida.","error.session":"Sesión finalizada.","error.preview":"La captura solo está disponible en la extensión cargada en Chrome.","error.mediaOperation":"Operación de medios desconocida.","error.context":"Operación no disponible en este contexto.","error.openFirst":"Abre el simulador antes de grabar.","error.operation":"Operación desconocida.","error.mount":"La interfaz no confirmó la apertura.","error.customLimit":"El límite es de 20 perfiles personalizados.","error.customMissing":"Perfil personalizado no encontrado.","error.profileMissing":"Perfil no encontrado.","error.profileRefresh":"Perfil no encontrado. Actualiza la biblioteca.","error.setLimit":"El límite es de 16 conjuntos.","error.setMissing":"Conjunto no encontrado.","error.libraryOperation":"Operación de biblioteca desconocida.","error.noData":"La grabación terminó sin datos.","error.size":"El archivo superó el límite de 64 MiB.","error.notRecording":"No hay una grabación en curso.","error.stopTimeout":"El navegador no finalizó la grabación.","error.prepareTimeout":"La preparación de la captura excedió el tiempo permitido.","error.image":"Imagen de captura no válida.","error.recordingSize":"La grabación superó el límite de 64 MiB y se descartó.","error.encoder":"El codificador falló.","error.artifact":"La captura ya no está disponible.","error.canvas":"Canvas no está disponible.","error.png":"Error al generar el PNG.","error.videoTimeout":"La pestaña no proporcionó imagen para grabar.","error.video":"No se pudo leer el vídeo de la pestaña.","error.cancelConversion":"Conversión cancelada.","error.openVideo":"No se pudo abrir el vídeo para convertirlo.","error.decode":"El navegador no puede convertir este vídeo.","error.convertSize":"Dimensiones no disponibles o demasiado grandes para la conversión.","error.convertCanvas":"Canvas no disponible para la conversión.","error.mp4Size":"El MP4 superó el límite de 64 MiB.","error.mp4Encoder":"El codificador MP4 falló.","error.convertEmpty":"La conversión terminó sin datos.","error.playback":"La reproducción se interrumpió durante la conversión.","error.convertTimeout":"La conversión excedió el tiempo permitido.","error.expired":"La captura ha caducado.","error.file":"No se pudo recuperar el archivo local.","error.emptyFile":"El archivo está vacío o supera el límite de tamaño.","error.extension":"La extensión no respondió. Recarga esta página.","error.popupExtension":"No se pudo contactar con la extensión. Recarga la página.","error.permission":"No se concedió el permiso de grabación.","error.prepareFocus":"Vuelve a la pestaña del simulador para preparar la captura.","error.inputDimensions":"Usa las dimensiones indicadas en los campos.","header.devices":"Dispositivos","header.capture":"Capturar","header.settings":"Ajustes","header.stop":"Detener","header.cancel":"Cancelar","header.recording":"Grabando","settings.device":"Pantalla seleccionada","settings.dimensions":"Dimensiones","settings.rotate":"Girar","settings.reload":"Recargar","settings.appearance":"Preferencias","settings.scale":"Escala de visualización","settings.record":"Grabar esta pantalla","settings.videoHint":"Sin audio · hasta 2 minutos","settings.about":"Acerca de esta vista previa","screen.mode":"Modo de pantalla","screen.browser":"Navegador","screen.pwa":"PWA","screen.fullscreen":"Pantalla completa","screen.hint":"Navegador muestra las barras de navegación. PWA mantiene la barra de estado. Pantalla completa usa toda la pantalla para el contenido.","error.screenMode":"Modo de pantalla no válido.","capture.description":"Captura una imagen o graba un vídeo de la pantalla seleccionada.","capture.image":"Capturar pantalla","capture.imageHint":"Guardar imagen en PNG.","capture.videoHint":"Sin audio · hasta 2 minutos","capture.ready":"Captura lista","capture.transparent":"PNG · Fondo transparente","capture.videoShort":"Grabar vídeo","capture.imageShort":"Capturar pantalla","capture.video":"Vídeo","capture.format":"Formato","capture.fullPage":"Capturar página completa","capture.fullPageHint":"De principio a fin, en un solo PNG.","capture.scrolling":"Capturando página · {progress}%","capture.fullPageReady":"PNG · Página completa"}};
// Catálogo de mockups locais. As imagens usam nomes únicos por modelo.
const MOCKUPS = Object.freeze([
  {
    "id": "mockup-apple-iphone-18-pro",
    "label": "iPhone 18 Pro",
    "width": 402,
    "height": 874,
    "mockup": {
      "image": "mockups/apple-iphone-18-pro.avif",
      "thumbnail": "mockups/apple-iphone-18-pro.avif",
      "frameWidth": 440,
      "frameHeight": 906,
      "offset": 0,
      "mask": "M302.148 0c34.951 0 52.427 0 65.777 6.817a62.474 62.474 0 0 1 27.273 27.333C402 47.53 402 65.043 402 100.072v673.856c0 35.029 0 52.543-6.802 65.922a62.474 62.474 0 0 1-27.273 27.333C354.575 874 337.099 874 302.148 874H99.852c-34.952 0-52.427 0-65.777-6.817A62.477 62.477 0 0 1 6.802 839.85C0 826.471 0 808.957 0 773.928V100.072C0 65.043 0 47.529 6.802 34.15A62.477 62.477 0 0 1 34.075 6.817C47.425 0 64.9 0 99.852 0h202.296Zm-129.92 13.809c-10.072 0-18.236 8.182-18.236 18.276 0 10.093 8.164 18.276 18.236 18.276h57.544c10.072 0 18.236-8.183 18.236-18.276 0-10.094-8.164-18.276-18.236-18.276h-57.544Z"
    }
  },
  {
    "id": "mockup-apple-iphone-18-pro-max",
    "label": "iPhone 18 Pro Max",
    "width": 440,
    "height": 956,
    "mockup": {
      "image": "mockups/apple-iphone-18-pro-max.avif",
      "thumbnail": "mockups/apple-iphone-18-pro-max.avif",
      "frameWidth": 482,
      "frameHeight": 992,
      "offset": 0,
      "mask": "M330.709 0c38.256 0 57.383 0 71.995 7.457a68.365 68.365 0 0 1 29.851 29.897C440 51.988 440 71.146 440 109.46v737.08c0 38.314 0 57.472-7.445 72.106a68.362 68.362 0 0 1-29.851 29.897C388.092 956 368.965 956 330.709 956H109.29c-38.255 0-57.382 0-71.994-7.457a68.358 68.358 0 0 1-29.851-29.897C0 904.012 0 884.854 0 846.54V109.46c0-38.314 0-57.472 7.445-72.106A68.36 68.36 0 0 1 37.296 7.457C51.908 0 71.036 0 109.29 0h221.419ZM188.508 15.104c-11.023 0-19.96 8.95-19.96 19.99 0 11.041 8.937 19.992 19.96 19.992h62.984c11.023 0 19.96-8.95 19.96-19.991 0-11.04-8.937-19.99-19.96-19.99h-62.984Z"
    }
  },
  {
    "id": "mockup-apple-iphone-duo-front",
    "label": "iPhone Duo",
    "width": 466,
    "height": 678,
    "mockup": {
      "image": "mockups/apple-iphone-duo-front.avif",
      "thumbnail": "mockups/apple-iphone-duo-front.avif",
      "frameWidth": 518,
      "frameHeight": 716,
      "offset": 0,
      "mask": "M364.85 0c38.953 0 58.431 0 72.739 8.768a59.499 59.499 0 0 1 19.643 19.643C466 42.72 466 62.197 466 101.15v475.7c0 38.953 0 58.431-8.768 72.739a59.496 59.496 0 0 1-19.643 19.643C423.281 678 403.803 678 364.85 678H15.3c-5.892 0-8.838 0-11.002-1.326a9.002 9.002 0 0 1-2.972-2.972C0 671.538 0 668.592 0 662.7V15.3C0 9.408 0 6.462 1.326 4.298a9.002 9.002 0 0 1 2.972-2.972C6.462 0 9.408 0 15.3 0h349.55ZM418 30c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18-8.059-18-18-18Z"
    }
  },
  {
    "id": "mockup-apple-iphone-17",
    "label": "iPhone 17",
    "width": 402,
    "height": 874,
    "mockup": {
      "image": "mockups/apple-iphone-17.avif",
      "thumbnail": "mockups/apple-iphone-17.avif",
      "frameWidth": 436,
      "frameHeight": 904,
      "offset": 0,
      "mask": "M62.7061 0C27.708 0 0 27.6871 0 62.659V811.341C0 846.313 27.708 874 62.7061 874H339.294C374.292 874 402 846.313 402 811.341V62.659C402 27.6871 374.292 0 339.294 0H62.7061ZM156.195 14.0878H245.802C255.866 14.0878 263.969 22.1849 263.969 32.2417C263.969 42.2985 255.866 50.3955 245.802 50.3955H156.195C146.131 50.3955 138.031 42.2985 138.031 32.2417C138.031 22.1849 146.131 14.0878 156.195 14.0878Z"
    }
  },
  {
    "id": "mockup-apple-iphone-17-pro",
    "label": "iPhone 17 Pro",
    "width": 402,
    "height": 874,
    "mockup": {
      "image": "mockups/apple-iphone-17-pro.avif",
      "thumbnail": "mockups/apple-iphone-17-pro.avif",
      "frameWidth": 436,
      "frameHeight": 904,
      "offset": 0,
      "mask": "M62.7061 0C27.708 0 0 27.6871 0 62.659V811.341C0 846.313 27.708 874 62.7061 874H339.294C374.292 874 402 846.313 402 811.341V62.659C402 27.6871 374.292 0 339.294 0H62.7061ZM156.195 14.0878H245.802C255.866 14.0878 263.969 22.1849 263.969 32.2417C263.969 42.2985 255.866 50.3955 245.802 50.3955H156.195C146.131 50.3955 138.031 42.2985 138.031 32.2417C138.031 22.1849 146.131 14.0878 156.195 14.0878Z"
    }
  },
  {
    "id": "mockup-apple-iphone-17-pro-max",
    "label": "iPhone 17 Pro Max",
    "width": 440,
    "height": 956,
    "mockup": {
      "image": "mockups/apple-iphone-17-pro-max.avif",
      "thumbnail": "mockups/apple-iphone-17-pro-max.avif",
      "frameWidth": 476,
      "frameHeight": 988,
      "offset": 0,
      "mask": "M68.6335 0C30.3271 0 0 30.2848 0 68.5377V887.462C0 925.715 30.3271 956 68.6335 956H371.366C409.673 956 440 925.715 440 887.462V68.5377C440 30.2848 409.673 0 371.366 0H68.6335ZM170.96 15.4096H269.037C280.053 15.4096 288.922 24.2663 288.922 35.2666C288.922 46.267 280.053 55.1237 269.037 55.1237H170.96C159.944 55.1237 151.078 46.267 151.078 35.2666C151.078 24.2663 159.944 15.4096 170.96 15.4096Z"
    }
  },
  {
    "id": "mockup-apple-iphone-air",
    "label": "iPhone Air",
    "width": 420,
    "height": 912,
    "mockup": {
      "image": "mockups/apple-iphone-air.avif",
      "thumbnail": "mockups/apple-iphone-air.avif",
      "frameWidth": 460,
      "frameHeight": 946,
      "offset": 0,
      "mask": "M63.5602 0C28.0581 0 0 27.9363 0 63.2843V848.716C0 884.064 28.0581 912 63.5602 912H356.437C391.939 912 420 884.064 420 848.716V63.2843C420 27.9363 391.939 0 356.437 0H63.5602ZM164.771 19.5405H255.226C265.385 19.5405 273.565 27.6848 273.565 37.8002C273.565 47.9157 265.385 56.06 255.226 56.06H164.771C154.612 56.06 146.435 47.9157 146.435 37.8002C146.435 27.6848 154.612 19.5405 164.771 19.5405Z"
    }
  },
  {
    "id": "mockup-apple-iphone-17e",
    "label": "iPhone 17e",
    "width": 390,
    "height": 844,
    "mockup": {
      "image": "mockups/apple-iphone-17e.avif",
      "thumbnail": "mockups/apple-iphone-17e.avif",
      "frameWidth": 440,
      "frameHeight": 886,
      "offset": 0,
      "mask": "M46.216 0C20.692 0 0 20.677 0 46.185v751.627c0 25.51 20.691 46.189 46.216 46.188h297.568c25.525.001 46.216-20.678 46.216-46.188V46.185C389.999 20.677 369.307-.001 343.784 0H284.46c-5.4 0-8.194.558-8.194 9.12s-5.309 22.988-24.306 22.988H138.04c-18.998 0-24.306-14.426-24.306-22.988S110.94 0 105.54 0H46.216Z"
    }
  },
  {
    "id": "mockup-apple-iphone-16",
    "label": "iPhone 16",
    "width": 393,
    "height": 852,
    "mockup": {
      "image": "mockups/apple-iphone-16.avif",
      "thumbnail": "mockups/apple-iphone-16.avif",
      "frameWidth": 438,
      "frameHeight": 892,
      "offset": 0,
      "mask": "M336.889 0C367.878 4.95264e-05 393 25.146 393 56.165V795.835C393 826.854 367.878 852 336.889 852H56.1113C25.122 852 0.000164793 826.854 0 795.835V56.165C0.000131817 25.146 25.122 6.398e-05 56.1113 0H336.889ZM154.452 11.2578C144.603 11.2578 136.618 19.2474 136.618 29.1025C136.618 38.9578 144.603 46.9473 154.452 46.9473H238.548C248.397 46.9473 256.382 38.9578 256.382 29.1025C256.382 19.2474 248.397 11.2578 238.548 11.2578H154.452Z"
    }
  },
  {
    "id": "mockup-apple-iphone-16-plus",
    "label": "iPhone 16 Plus",
    "width": 430,
    "height": 932,
    "mockup": {
      "image": "mockups/apple-iphone-16-plus.avif",
      "thumbnail": "mockups/apple-iphone-16-plus.avif",
      "frameWidth": 479,
      "frameHeight": 976,
      "offset": 0,
      "mask": "M368.605 0C402.513 0 430 27.5076 430 61.4395V870.561C430 904.492 402.513 932 368.605 932H61.3945C27.4874 932 0 904.492 0 870.561V61.4395C0 27.5076 27.4874 0 61.3945 0H368.605ZM169.016 12.2012C158.244 12.2013 149.513 20.9434 149.513 31.7266C149.513 42.5098 158.244 51.2518 169.016 51.252H260.983C271.755 51.252 280.487 42.5099 280.487 31.7266C280.487 20.9432 271.755 12.2012 260.983 12.2012H169.016Z"
    }
  },
  {
    "id": "mockup-apple-iphone-16-pro",
    "label": "iPhone 16 Pro",
    "width": 402,
    "height": 874,
    "mockup": {
      "image": "mockups/apple-iphone-16-pro.avif",
      "thumbnail": "mockups/apple-iphone-16-pro.avif",
      "frameWidth": 444,
      "frameHeight": 910,
      "offset": 0,
      "mask": "M339.609 0C374.067 0 402 27.9315 402 62.3867V811.613C402 846.069 374.067 874 339.609 874H62.3906C27.9334 874 0.00016496 846.069 0 811.613V62.3867C0.000185556 27.9315 27.9334 0 62.3906 0H339.609ZM156.332 13.4668C145.869 13.4668 137.387 21.9453 137.387 32.4033C137.387 42.8613 145.869 51.3389 156.332 51.3389H245.668C256.131 51.3388 264.613 42.8613 264.613 32.4033C264.613 21.9453 256.131 13.4668 245.668 13.4668H156.332Z"
    }
  },
  {
    "id": "mockup-apple-iphone-16-pro-max",
    "label": "iPhone 16 Pro Max",
    "width": 440,
    "height": 956,
    "mockup": {
      "image": "mockups/apple-iphone-16-pro-max.avif",
      "thumbnail": "mockups/apple-iphone-16-pro-max.avif",
      "frameWidth": 485,
      "frameHeight": 994,
      "offset": 0,
      "mask": "M372.212 0C409.926 1.64815e-05 440.5 30.5522 440.5 68.2402V887.76C440.5 925.448 409.926 956 372.212 956H68.7881C31.0736 956 0.500033 925.448 0.5 887.76V68.2402C0.500041 30.5522 31.0736 4.12091e-06 68.7881 0H372.212ZM171.67 15.0254C160.232 15.0256 150.96 24.2929 150.96 35.7246C150.96 47.1564 160.232 56.4236 171.67 56.4238H269.33C280.768 56.4238 290.041 47.1566 290.041 35.7246C290.041 24.2928 280.768 15.0254 269.33 15.0254H171.67Z"
    }
  },
  {
    "id": "mockup-apple-iphone-15",
    "label": "iPhone 15",
    "width": 393,
    "height": 852,
    "mockup": {
      "image": "mockups/apple-iphone-15.avif",
      "thumbnail": "mockups/apple-iphone-15.avif",
      "frameWidth": 438,
      "frameHeight": 892,
      "offset": 0,
      "mask": "M336.889 0C367.878 4.95264e-05 393 25.146 393 56.165V795.835C393 826.854 367.878 852 336.889 852H56.1113C25.122 852 0.000164793 826.854 0 795.835V56.165C0.000131817 25.146 25.122 6.398e-05 56.1113 0H336.889ZM154.452 11.2578C144.603 11.2578 136.618 19.2474 136.618 29.1025C136.618 38.9578 144.603 46.9473 154.452 46.9473H238.548C248.397 46.9473 256.382 38.9578 256.382 29.1025C256.382 19.2474 248.397 11.2578 238.548 11.2578H154.452Z"
    }
  },
  {
    "id": "mockup-apple-iphone-14-15-pro",
    "label": "iPhone 14 & 15 Pro",
    "width": 393,
    "height": 852,
    "mockup": {
      "image": "mockups/apple-iphone-14-15-pro.avif",
      "thumbnail": "mockups/apple-iphone-14-15-pro.avif",
      "frameWidth": 440,
      "frameHeight": 892,
      "offset": 0,
      "mask": "M340.046 0C369.292 0.000201067 393 23.6963 393 52.9266V799.073C393 828.304 369.292 852 340.046 852H52.9551C23.7089 852 0 828.304 0 799.073V52.9266C0 23.6962 23.7089 0 52.9551 0H340.046ZM152.478 10.9113C142.167 10.9113 133.808 19.2657 133.808 29.5718C133.808 39.878 142.166 48.2335 152.478 48.2335H240.522C250.833 48.2333 259.192 39.8778 259.192 29.5718C259.192 19.2658 250.833 10.9115 240.522 10.9113H152.478Z"
    }
  },
  {
    "id": "mockup-apple-iphone-13-14",
    "label": "iPhone 13 & 14",
    "width": 390,
    "height": 844,
    "mockup": {
      "image": "mockups/apple-iphone-13-14.avif",
      "thumbnail": "mockups/apple-iphone-13-14.avif",
      "frameWidth": 440,
      "frameHeight": 884,
      "offset": 0,
      "mask": "M46.2162 2.39451e-08C20.6923 -0.000812503 0.000460882 20.677 2.46937e-08 46.185V797.813C-0.000825391 823.321 20.6914 844.001 46.2162 844H195H343.784C369.309 844.001 390.001 823.321 390 797.813V46.185C390 20.677 369.308 -0.000812503 343.784 2.39451e-08H284.461C279.06 2.39451e-08 276.266 0.558077 276.266 9.12001C276.266 17.6819 270.957 32.1083 251.96 32.1083H238.427H151.571H138.04C119.043 32.1083 113.734 17.6819 113.734 9.12001C113.734 0.558077 110.94 2.39451e-08 105.539 2.39451e-08H46.2162Z"
    }
  },
  {
    "id": "mockup-apple-iphone-13-mini",
    "label": "iPhone 13 Mini",
    "width": 375,
    "height": 812,
    "mockup": {
      "image": "mockups/apple-iphone-13-mini.avif",
      "thumbnail": "mockups/apple-iphone-13-mini.avif",
      "frameWidth": 424,
      "frameHeight": 854,
      "offset": 0,
      "mask": "M44.4386 2.30373e-08C19.8964 -0.000781698 0.000443156 19.8931 2.37439e-08 44.4339V767.564C-0.000793645 792.106 19.8955 812.001 44.4386 812H187.5H330.561C355.104 812.001 375.001 792.106 375 767.564V44.4339C375 19.893 355.104 -0.000781698 330.561 2.30373e-08H273.52C268.327 2.30373e-08 265.641 0.536917 265.641 8.77423C265.641 17.0115 260.536 30.8909 242.27 30.8909H229.257H145.741H132.73C114.464 30.8909 109.359 17.0115 109.359 8.77423C109.359 0.536917 106.673 2.30373e-08 101.48 2.30373e-08H44.4386Z"
    }
  },
  {
    "id": "mockup-apple-iphone-se-3",
    "label": "iPhone SE 2022",
    "width": 375,
    "height": 667,
    "mockup": {
      "image": "mockups/apple-iphone-se-3.avif",
      "thumbnail": "mockups/apple-iphone-se-3.avif",
      "frameWidth": 431,
      "frameHeight": 862,
      "offset": 0,
      "mask": "M375 0H0V667H375V0Z"
    }
  },
  {
    "id": "mockup-apple-iphone-x",
    "label": "iPhone X",
    "width": 375,
    "height": 812,
    "mockup": {
      "image": "mockups/apple-iphone-x.avif",
      "thumbnail": "mockups/apple-iphone-x.avif",
      "frameWidth": 432,
      "frameHeight": 864,
      "offset": 0,
      "mask": "M38.4761 0C17.1603 0 0 17.148 0 38.4485V773.552C0 794.852 17.1603 812 38.4761 812H336.524C357.84 812 375 794.852 375 773.552V38.4485C375 17.148 357.84 0 336.524 0H298.887C297.182 0.000134375 295.547 0.676834 294.342 1.88126C293.137 3.08569 292.46 4.7192 292.459 6.42252V9.37973C292.459 20.9524 283.138 30.2699 271.557 30.2699H103.443C91.8624 30.2699 82.5406 20.9524 82.5406 9.37973V6.42252C82.5404 4.7192 81.8633 3.08569 80.658 1.88126C79.4527 0.676837 77.818 0.00013695 76.1134 0H38.4761Z"
    }
  },
  {
    "id": "mockup-apple-iphone-6",
    "label": "iPhone 6 & 6s",
    "width": 375,
    "height": 667,
    "mockup": {
      "image": "mockups/apple-iphone-6.avif",
      "thumbnail": "mockups/apple-iphone-6.avif",
      "frameWidth": 434,
      "frameHeight": 878,
      "offset": 0,
      "mask": "M375 0H0V667H375V0Z"
    }
  },
  {
    "id": "mockup-apple-iphone-5",
    "label": "iPhone 5 & 5s",
    "width": 320,
    "height": 568,
    "mockup": {
      "image": "mockups/apple-iphone-5.avif",
      "thumbnail": "mockups/apple-iphone-5.avif",
      "frameWidth": 377,
      "frameHeight": 788,
      "offset": 0,
      "mask": "M320 0H0V568H320V0Z"
    }
  },
  {
    "id": "mockup-apple-iphone-duo-unfolded",
    "label": "iPhone Duo (Unfolded)",
    "width": 890,
    "height": 626,
    "mockup": {
      "image": "mockups/apple-iphone-duo-unfolded.avif",
      "thumbnail": "mockups/apple-iphone-duo-unfolded.avif",
      "frameWidth": 934,
      "frameHeight": 670,
      "offset": 0,
      "mask": "M0 79.35c0-27.775 0-41.663 5.406-52.271A49.597 49.597 0 0 1 27.082 5.404C37.692 0 51.582 0 79.361 0h731.278c27.779 0 41.669 0 52.279 5.405a49.594 49.594 0 0 1 21.676 21.673C890 37.688 890 51.575 890 79.35V546.65c0 27.774 0 41.662-5.406 52.271a49.599 49.599 0 0 1-21.676 21.673C852.308 626 838.418 626 810.639 626H79.361c-27.78 0-41.669 0-52.279-5.405a49.602 49.602 0 0 1-21.676-21.673C0 588.313 0 574.425 0 546.651V79.35Z"
    }
  },
  {
    "id": "mockup-android-samsung-galaxy-z-fold8",
    "label": "Samsung Galaxy Z Fold8 (Unfolded)",
    "width": 816,
    "height": 616,
    "mockup": {
      "image": "mockups/android-samsung-galaxy-z-fold8.avif",
      "thumbnail": "mockups/android-samsung-galaxy-z-fold8.avif",
      "frameWidth": 858,
      "frameHeight": 652,
      "offset": 0,
      "mask": "M810.333 0A5.667 5.667 0 0 1 816 5.668v604.664a5.667 5.667 0 0 1-5.667 5.668H5.667A5.667 5.667 0 0 1 0 610.332V5.668A5.667 5.667 0 0 1 5.667 0h804.666ZM620.5 11.335c-5.477 0-9.917 4.44-9.917 9.919 0 5.477 4.44 9.918 9.917 9.918 5.477 0 9.917-4.44 9.917-9.918 0-5.478-4.44-9.919-9.917-9.919Z"
    }
  },
  {
    "id": "mockup-android-samsung-galaxy-z-fold8-ultra",
    "label": "Samsung Galaxy Z Fold8 Ultra (Unfolded)",
    "width": 645,
    "height": 715,
    "mockup": {
      "image": "mockups/android-samsung-galaxy-z-fold8-ultra.avif",
      "thumbnail": "mockups/android-samsung-galaxy-z-fold8-ultra.avif",
      "frameWidth": 685,
      "frameHeight": 751,
      "offset": 0,
      "mask": "M640.918 0A4.08 4.08 0 0 1 645 4.076v706.848a4.08 4.08 0 0 1-4.082 4.076H4.082A4.08 4.08 0 0 1 0 710.924V4.076A4.08 4.08 0 0 1 4.082 0h636.836ZM488.036 9.783c-5.072 0-9.185 4.107-9.185 9.172 0 5.066 4.113 9.172 9.185 9.172 5.073 0 9.186-4.106 9.186-9.172 0-5.065-4.113-9.172-9.186-9.172Z"
    }
  },
  {
    "id": "mockup-android-samsung-galaxy-z-flip8",
    "label": "Samsung Galaxy Z Flip8 (Unfolded)",
    "width": 360,
    "height": 840,
    "mockup": {
      "image": "mockups/android-samsung-galaxy-z-flip8.avif",
      "thumbnail": "mockups/android-samsung-galaxy-z-flip8.avif",
      "frameWidth": 400,
      "frameHeight": 872,
      "offset": 0,
      "mask": "M338.182 0C350.232 0 360 9.774 360 21.83V818.17c0 12.057-9.768 21.831-21.818 21.831H21.818C9.768 840 0 830.226 0 818.169V21.831C0 9.774 9.768 0 21.818 0h316.364ZM180.237 9.966c-5.763 0-10.435 4.675-10.435 10.44 0 5.767 4.672 10.442 10.435 10.442 5.763 0 10.435-4.675 10.435-10.441 0-5.766-4.672-10.44-10.435-10.44Z"
    }
  },
  {
    "id": "mockup-android-samsung-galaxy-s26",
    "label": "Samsung Galaxy S26",
    "width": 360,
    "height": 773,
    "mockup": {
      "image": "mockups/android-samsung-galaxy-s26.avif",
      "thumbnail": "mockups/android-samsung-galaxy-s26.avif",
      "frameWidth": 390,
      "frameHeight": 799,
      "offset": 0,
      "mask": "M308.818 0C328.185 1.03551e-10 337.869 0.000401497 345.043 4.24121C349.46 6.85232 353.146 10.5361 355.758 14.9512C360 22.122 360 31.8019 360 51.1611V721.839C360 741.198 360 750.878 355.758 758.049C353.146 762.464 349.46 766.148 345.043 768.759C337.869 773 328.185 773 308.818 773H51.1816C31.8146 773 22.1308 773 14.957 768.759C10.5402 766.148 6.8543 762.464 4.24219 758.049C-0.000274658 750.878 0 741.198 0 721.839V51.1611C0 31.8019 -0.000279427 22.122 4.24219 14.9512C6.8543 10.5361 10.5402 6.85232 14.957 4.24121C22.1308 0.000403404 31.8146 1.23285e-10 51.1816 0H308.818ZM180 11C174.477 11 170 15.4772 170 21C170 26.5228 174.477 31 180 31C185.523 31 190 26.5228 190 21C190 15.4772 185.523 11 180 11Z"
    }
  },
  {
    "id": "mockup-android-samsung-galaxy-s26-plus",
    "label": "Samsung Galaxy S26+",
    "width": 480,
    "height": 1040,
    "mockup": {
      "image": "mockups/android-samsung-galaxy-s26-plus.avif",
      "thumbnail": "mockups/android-samsung-galaxy-s26-plus.avif",
      "frameWidth": 518,
      "frameHeight": 1072,
      "offset": 0,
      "mask": "M422.909 0C442.246 0 451.915 -0.000265988 459.377 3.5831C466.828 7.16118 472.839 13.1715 476.417 20.6229C480 28.0854 480 37.754 480 57.0909V982.909C480 1002.25 480 1011.91 476.417 1019.38C472.839 1026.83 466.828 1032.84 459.377 1036.42C451.915 1040 442.246 1040 422.909 1040H57.0909C37.754 1040 28.0854 1040 20.6229 1036.42C13.1715 1032.84 7.16118 1026.83 3.5831 1019.38C-0.000266335 1011.91 0 1002.25 0 982.909V57.0909C0 37.754 -0.000266335 28.0854 3.5831 20.6229C7.16118 13.1715 13.1715 7.16118 20.6229 3.5831C28.0854 -0.000266335 37.754 0 57.0909 0H422.909ZM240 13.0909C232.77 13.0909 226.909 18.9519 226.909 26.1818C226.909 33.4117 232.77 39.2727 240 39.2727C247.23 39.2727 253.091 33.4117 253.091 26.1818C253.091 18.9519 247.23 13.0909 240 13.0909Z"
    }
  },
  {
    "id": "mockup-android-samsung-galaxy-s26-ultra",
    "label": "Samsung Galaxy S26 Ultra",
    "width": 480,
    "height": 1040,
    "mockup": {
      "image": "mockups/android-samsung-galaxy-s26-ultra.avif",
      "thumbnail": "mockups/android-samsung-galaxy-s26-ultra.avif",
      "frameWidth": 517,
      "frameHeight": 1072,
      "offset": 0,
      "mask": "M422.948 0C442.918 0 452.903 0.000210991 460.531 3.88832C467.24 7.30838 472.695 12.7655 476.113 19.4778C480 27.1086 480 37.098 480 57.0767V982.923C480 1002.9 480 1012.89 476.113 1020.52C472.695 1027.23 467.24 1032.69 460.531 1036.11C452.903 1040 442.918 1040 422.948 1040H57.0516C37.0817 1040 27.0967 1040 19.4692 1036.11C12.7599 1032.69 7.30517 1027.23 3.88661 1020.52C0.000210898 1012.89 0 1002.9 0 982.923V57.0767C0 37.098 0.000210898 27.1086 3.88661 19.4778C7.30517 12.7655 12.7599 7.30838 19.4692 3.88832C27.0967 0.000210991 37.0817 0 57.0516 0H422.948ZM240 13.7203C232.805 13.7203 226.971 19.556 226.971 26.7546C226.971 33.9533 232.805 39.7889 240 39.7889C247.195 39.7889 253.029 33.9533 253.029 26.7546C253.029 19.556 247.195 13.7203 240 13.7203Z"
    }
  },
  {
    "id": "mockup-android-samsung-galaxy-z-flip8-front",
    "label": "Samsung Galaxy Z Flip8",
    "width": 316,
    "height": 349,
    "mockup": {
      "image": "mockups/android-samsung-galaxy-z-flip8-front.avif",
      "thumbnail": "mockups/android-samsung-galaxy-z-flip8-front.avif",
      "frameWidth": 342,
      "frameHeight": 397,
      "offset": 0,
      "mask": "M308 0c3.771 0 5.657 0 6.828 1.172C316 2.343 316 4.229 316 8v291c0 23.57 0 35.355-7.322 42.678C301.355 349 289.57 349 266 349H50c-23.57 0-35.355 0-42.678-7.322C0 334.355 0 322.57 0 299V8c0-3.771 0-5.657 1.172-6.828C2.343 0 4.229 0 8 0h300Zm-94.703 280.25c-16.293 0-29.5 13.208-29.5 29.5s13.207 29.5 29.5 29.5c16.292 0 29.5-13.208 29.5-29.5s-13.208-29.5-29.5-29.5Zm63.406 0c-16.292 0-29.5 13.208-29.5 29.5s13.208 29.5 29.5 29.5c16.293 0 29.5-13.208 29.5-29.5s-13.207-29.5-29.5-29.5Zm-113.453 18.5c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11Z"
    }
  },
  {
    "id": "mockup-android-samsung-galaxy-z-fold8-front",
    "label": "Samsung Galaxy Z Fold8",
    "width": 416,
    "height": 657,
    "mockup": {
      "image": "mockups/android-samsung-galaxy-z-fold8-front.avif",
      "thumbnail": "mockups/android-samsung-galaxy-z-fold8-front.avif",
      "frameWidth": 466,
      "frameHeight": 695,
      "offset": 0,
      "mask": "M408.5 0a7.5 7.5 0 0 1 7.5 7.5v642a7.5 7.5 0 0 1-7.5 7.5H7.5a7.5 7.5 0 0 1-7.5-7.5V7.5A7.5 7.5 0 0 1 7.5 0h401ZM208 10c-5.799 0-10.5 4.701-10.5 10.5S202.201 31 208 31s10.5-4.701 10.5-10.5S213.799 10 208 10Z"
    }
  },
  {
    "id": "mockup-android-samsung-galaxy-z-fold8-ultra-front",
    "label": "Samsung Galaxy Z Fold8 Ultra",
    "width": 360,
    "height": 840,
    "mockup": {
      "image": "mockups/android-samsung-galaxy-z-fold8-ultra-front.avif",
      "thumbnail": "mockups/android-samsung-galaxy-z-fold8-ultra-front.avif",
      "frameWidth": 406,
      "frameHeight": 876,
      "offset": 0,
      "mask": "M353.016 0A6.985 6.985 0 0 1 360 6.986v826.028a6.985 6.985 0 0 1-6.984 6.986H6.984A6.986 6.986 0 0 1 0 833.014V6.986A6.986 6.986 0 0 1 6.984 0h346.032ZM180 10.5c-5.799 0-10.5 4.701-10.5 10.5s4.701 10.5 10.5 10.5 10.5-4.701 10.5-10.5-4.701-10.5-10.5-10.5Z"
    }
  },
  {
    "id": "mockup-android-samsung-galaxy-z-flip6",
    "label": "Samsung Galaxy Z Flip6",
    "width": 360,
    "height": 880,
    "mockup": {
      "image": "mockups/android-samsung-galaxy-z-flip6.avif",
      "thumbnail": "mockups/android-samsung-galaxy-z-flip6.avif",
      "frameWidth": 418,
      "frameHeight": 934,
      "offset": 0,
      "mask": "M331.552 0C347.263 0 360 12.7289 360 28.4308V851.569C360 867.271 347.263 880 331.552 880H28.4478C12.7365 880 0 867.271 0 851.569V28.4308C0 12.7289 12.7365 0 28.4478 0H331.552ZM180 6.76923C173.921 6.76923 168.993 11.6941 168.993 17.7692C168.993 23.8444 173.921 28.7692 180 28.7692C186.079 28.7692 191.007 23.8444 191.007 17.7692C191.007 11.6941 186.079 6.76923 180 6.76923Z"
    }
  },
  {
    "id": "mockup-android-samsung-galaxy-z-fold6",
    "label": "Samsung Galaxy Z Fold6",
    "width": 928,
    "height": 1080,
    "mockup": {
      "image": "mockups/android-samsung-galaxy-z-fold6.avif",
      "thumbnail": "mockups/android-samsung-galaxy-z-fold6.avif",
      "frameWidth": 964,
      "frameHeight": 1116,
      "offset": 0,
      "mask": "M919.141 0C924.034 0 928 3.97152 928 8.87064V1071.13C928 1076.03 924.034 1080 919.141 1080H8.85919C3.96639 1080 1.66101e-07 1076.03 0 1071.13V8.87064C1.59101e-05 3.97153 3.9664 1.84175e-07 8.85919 0H919.141ZM695.446 15.5236C686.884 15.5236 679.943 22.4738 679.943 31.0472C679.943 39.6207 686.884 46.5708 695.446 46.5708C704.009 46.5708 710.95 39.6207 710.95 31.0472C710.95 22.4738 704.009 15.5236 695.446 15.5236Z"
    }
  },
  {
    "id": "mockup-android-samsung-galaxy-s25",
    "label": "Samsung Galaxy S25",
    "width": 360,
    "height": 780,
    "mockup": {
      "image": "mockups/android-samsung-galaxy-s25.avif",
      "thumbnail": "mockups/android-samsung-galaxy-s25.avif",
      "frameWidth": 395,
      "frameHeight": 806,
      "offset": 0,
      "mask": "M322.109 0C343.036 0 360 16.9905 360 37.9494V742.051C360 763.01 343.036 780 322.109 780H37.8903C16.9641 780 2.32019e-05 763.009 0 742.051V37.9494C6.23958e-05 16.9906 16.9641 7.38716e-05 37.8903 0H322.109ZM179.957 9.55801C174.581 9.55801 170.223 13.8629 170.223 19.1732C170.223 24.4834 174.581 28.7879 179.957 28.7879C185.332 28.7879 189.69 24.4833 189.69 19.1732C189.69 13.863 185.332 9.55805 179.957 9.55801Z"
    }
  },
  {
    "id": "mockup-android-samsung-galaxy-s25-plus",
    "label": "Samsung Galaxy S25+",
    "width": 480,
    "height": 1040,
    "mockup": {
      "image": "mockups/android-samsung-galaxy-s25-plus.avif",
      "thumbnail": "mockups/android-samsung-galaxy-s25-plus.avif",
      "frameWidth": 525,
      "frameHeight": 1074,
      "offset": 0,
      "mask": "M429.551 0C457.413 0 480 22.6529 480 50.5966V989.403C480 1017.35 457.414 1040 429.552 1040H50.4481C22.5864 1040 0 1017.35 0 989.403V50.5966C1.91279e-05 22.6529 22.5864 0 50.4481 0H429.551ZM239.942 12.7418C232.784 12.7418 226.982 18.481 226.982 25.5608C226.982 32.6407 232.784 38.3802 239.942 38.3802C247.099 38.3802 252.901 32.6407 252.901 25.5608C252.901 18.4809 247.099 12.7418 239.942 12.7418Z"
    }
  },
  {
    "id": "mockup-android-samsung-galaxy-s25-ultra",
    "label": "Samsung Galaxy S25 Ultra",
    "width": 480,
    "height": 1040,
    "mockup": {
      "image": "mockups/android-samsung-galaxy-s25-ultra.avif",
      "thumbnail": "mockups/android-samsung-galaxy-s25-ultra.avif",
      "frameWidth": 516,
      "frameHeight": 1071,
      "offset": 0,
      "mask": "M458.736 0C470.48 9.0096e-05 480 9.51088 480 21.2431V1018.76C480 1030.49 470.48 1040 458.736 1040H21.264C9.52023 1040 8.70289e-05 1030.49 0 1018.76V21.2436C0 9.51131 9.52019 0.000120783 21.264 0H458.736ZM239.922 10.8638C233.771 10.8638 228.784 15.7766 228.784 21.8368C228.784 27.897 233.771 32.8099 239.922 32.8099C246.073 32.8099 251.059 27.897 251.059 21.8368C251.059 15.7766 246.073 10.8638 239.922 10.8638Z"
    }
  },
  {
    "id": "mockup-android-google-pixel-9",
    "label": "Google Pixel 9",
    "width": 360,
    "height": 808,
    "mockup": {
      "image": "mockups/android-google-pixel-9.avif",
      "thumbnail": "mockups/android-google-pixel-9.avif",
      "frameWidth": 402,
      "frameHeight": 846,
      "offset": 0,
      "mask": "M310.547 0C337.859 2.37619e-05 360 22.141 360 49.4533V758.547C360 785.859 337.859 808 310.547 808H49.4532C22.141 808 7.85138e-05 785.859 0 758.547V49.4533C9.31583e-05 22.141 22.141 7.74406e-05 49.4532 0H310.547ZM180.68 16.1207C173.35 16.1207 167.407 21.9817 167.407 29.2116C167.407 36.4414 173.35 42.3024 180.68 42.3024C188.01 42.3023 193.953 36.4414 193.953 29.2116C193.953 21.9817 188.01 16.1208 180.68 16.1207Z"
    }
  },
  {
    "id": "mockup-android-google-pixel-9-pro",
    "label": "Google Pixel 9 Pro",
    "width": 427,
    "height": 952,
    "mockup": {
      "image": "mockups/android-google-pixel-9-pro.avif",
      "thumbnail": "mockups/android-google-pixel-9-pro.avif",
      "frameWidth": 473,
      "frameHeight": 992,
      "offset": 0,
      "mask": "M368.287 0C400.713 0 427 26.2663 427 58.667V893.333C427 925.734 400.713 952 368.287 952H58.7129C26.2869 952 0 925.734 0 893.333V58.667C0 26.2663 26.2869 0 58.7129 0H368.287ZM213.501 19.999C205.395 19.9991 198.824 26.565 198.824 34.665C198.824 42.7651 205.395 49.3319 213.501 49.332C221.607 49.332 228.179 42.7652 228.179 34.665C228.179 26.5649 221.607 19.999 213.501 19.999Z"
    }
  },
  {
    "id": "mockup-android-google-pixel-9-pro-xl",
    "label": "Google Pixel 9 Pro XL",
    "width": 448,
    "height": 997,
    "mockup": {
      "image": "mockups/android-google-pixel-9-pro-xl.avif",
      "thumbnail": "mockups/android-google-pixel-9-pro-xl.avif",
      "frameWidth": 495,
      "frameHeight": 1039,
      "offset": 0,
      "mask": "M386.4 0C420.421 0.000214107 448 27.5075 448 61.4395V935.561C448 969.492 420.421 997 386.4 997H61.5996C27.5792 997 0.000194322 969.492 0 935.561V61.4395C0.000170763 27.5075 27.5792 0.000209995 61.5996 0H386.4ZM223.997 20.8936C215.51 20.8937 208.629 27.7711 208.629 36.2549C208.629 44.7387 215.509 51.616 223.997 51.6162C232.485 51.6162 239.366 44.7388 239.366 36.2549C239.366 27.771 232.485 20.8936 223.997 20.8936Z"
    }
  },
  {
    "id": "mockup-android-xiaomi-17",
    "label": "Xiaomi 17",
    "width": 407,
    "height": 885,
    "mockup": {
      "image": "mockups/android-xiaomi-17.avif",
      "thumbnail": "mockups/android-xiaomi-17.avif",
      "frameWidth": 437.5,
      "frameHeight": 909,
      "offset": 0,
      "mask": "M343.073 0C378.379 2.40146e-06 407 28.6085 407 63.8989V821.101C407 856.391 378.379 885 343.073 885H63.9267C28.621 885 1.12003e-06 856.391 0 821.101V63.8989C0 28.6085 28.621 0 63.9267 0H343.073ZM203.5 16.5072C197.027 16.5072 191.78 21.7521 191.78 28.222C191.78 34.6919 197.027 39.9368 203.5 39.9368C209.973 39.9368 215.22 34.6919 215.22 28.222C215.22 21.7521 209.973 16.5072 203.5 16.5072Z"
    }
  },
  {
    "id": "mockup-android-xiaomi-17-pro",
    "label": "Xiaomi 17 Pro",
    "width": 407,
    "height": 885,
    "mockup": {
      "image": "mockups/android-xiaomi-17-pro.avif",
      "thumbnail": "mockups/android-xiaomi-17-pro.avif",
      "frameWidth": 438,
      "frameHeight": 909,
      "offset": 0,
      "mask": "M330.024 0C348.586 0 357.868 0.000143011 365.458 2.14144C384.552 7.52779 399.474 22.4537 404.859 41.5521C407 49.1445 407 58.428 407 76.9948V808.005C407 826.572 407 835.855 404.859 843.448C399.474 862.546 384.552 877.472 365.458 882.859C357.868 885 348.586 885 330.024 885H76.9759C58.4137 885 49.1325 885 41.5419 882.859C22.4482 877.472 7.52595 862.546 2.14091 843.448C0.000143445 835.855 0 826.572 0 808.005V76.9948C0 58.428 0.000143679 49.1445 2.14091 41.5521C7.52595 22.4537 22.4482 7.52779 41.5419 2.14144C49.1325 0.000143246 58.4137 0 76.9759 0H330.024ZM203.5 17.7C197.528 17.7 192.686 22.5428 192.686 28.5167C192.686 34.4905 197.528 39.3333 203.5 39.3333C209.472 39.3333 214.314 34.4905 214.314 28.5167C214.314 22.5428 209.472 17.7 203.5 17.7Z"
    }
  },
  {
    "id": "mockup-android-xiaomi-17-pro-max",
    "label": "Xiaomi 17 Pro Max",
    "width": 400,
    "height": 869,
    "mockup": {
      "image": "mockups/android-xiaomi-17-pro-max.avif",
      "thumbnail": "mockups/android-xiaomi-17-pro-max.avif",
      "frameWidth": 432.5,
      "frameHeight": 897,
      "offset": 0,
      "mask": "M324.348 0C342.591 0 351.713 0.000140582 359.173 2.10506C377.938 7.39992 392.604 22.0723 397.896 40.8462C400 48.3097 400 57.4355 400 75.6869V793.313C400 811.564 400 820.69 397.896 828.154C392.604 846.928 377.938 861.6 359.173 866.895C351.713 869 342.591 869 324.348 869H75.652C57.409 869 48.2874 869 40.8274 866.895C22.0621 861.6 7.39651 846.928 2.10409 828.154C0.000140978 820.69 0 811.564 0 793.313V75.6869C0 57.4355 0.000140057 48.3097 2.10409 40.8462C7.39651 22.0723 22.0621 7.39992 40.8274 2.10506C48.2874 0.000140813 57.409 0 75.652 0H324.348ZM200 17.3993C194.13 17.3993 189.372 22.1599 189.372 28.0323C189.372 33.9047 194.13 38.6652 200 38.6652C205.87 38.6652 210.628 33.9047 210.628 28.0323C210.628 22.1599 205.87 17.3993 200 17.3993Z"
    }
  },
  {
    "id": "mockup-android-xiaomi-17-ultra",
    "label": "Xiaomi 17 Ultra",
    "width": 400,
    "height": 869,
    "mockup": {
      "image": "mockups/android-xiaomi-17-ultra.avif",
      "thumbnail": "mockups/android-xiaomi-17-ultra.avif",
      "frameWidth": 428.5,
      "frameHeight": 893,
      "offset": 0,
      "mask": "M308.978 0C340.838 0 356.769 -0.000193769 368.938 6.19785C379.642 11.6499 388.346 20.3498 393.8 31.05C400 43.2145 400 59.1388 400 90.9871V778.013C400 809.861 400 825.786 393.8 837.95C388.346 848.65 379.642 857.35 368.938 862.802C356.769 869 340.838 869 308.978 869H91.022C59.1615 869 43.2311 869 31.0619 862.802C20.3576 857.35 11.6544 848.65 6.20023 837.95C-0.000192713 825.786 0 809.861 0 778.013V90.9871C0 59.1388 -0.000192713 43.2145 6.20023 31.05C11.6544 20.3498 20.3576 11.6499 31.0619 6.19785C43.2311 -0.000192639 59.1615 0 91.022 0H308.978ZM200 18.9557C194.764 18.9557 190.519 23.1991 190.519 28.4335C190.519 33.668 194.764 37.9114 200 37.9114C205.236 37.9114 209.481 33.668 209.481 28.4335C209.481 23.1991 205.236 18.9557 200 18.9557Z"
    }
  },
  {
    "id": "mockup-android-xiaomi-poco-x8-pro",
    "label": "POCO X8 Pro",
    "width": 423,
    "height": 919,
    "mockup": {
      "image": "mockups/android-xiaomi-poco-x8-pro.avif",
      "thumbnail": "mockups/android-xiaomi-poco-x8-pro.avif",
      "frameWidth": 459,
      "frameHeight": 949,
      "offset": 0,
      "mask": "M323.783 0c34.729 0 52.094 0 65.359 6.758a62.007 62.007 0 0 1 27.099 27.098C423 47.118 423 64.481 423 99.208v720.584c0 34.726 0 52.089-6.759 65.353a62.007 62.007 0 0 1-27.099 27.097C375.877 919 358.512 919 323.783 919H99.217c-34.73 0-52.094 0-65.359-6.758a62.01 62.01 0 0 1-27.1-27.097C0 871.881 0 854.518 0 819.792V99.208c0-34.726 0-52.089 6.759-65.352a62.009 62.009 0 0 1 27.1-27.098C47.122 0 64.487 0 99.216 0h224.566ZM211.5 19c-6.351 0-11.5 5.149-11.5 11.5S205.149 42 211.5 42 223 36.851 223 30.5 217.851 19 211.5 19Z"
    }
  },
  {
    "id": "mockup-android-xiaomi-poco-x7-pro",
    "label": "POCO X7 Pro",
    "width": 407,
    "height": 904,
    "mockup": {
      "image": "mockups/android-xiaomi-poco-x7-pro.avif",
      "thumbnail": "mockups/android-xiaomi-poco-x7-pro.avif",
      "frameWidth": 451,
      "frameHeight": 948,
      "offset": 0,
      "mask": "M364.87 0c7.83 0 11.745 0 15.001.647a33.708 33.708 0 0 1 26.482 26.485c.647 3.256.647 7.172.647 15.004v819.728c0 7.832 0 11.748-.647 15.004a33.709 33.709 0 0 1-26.482 26.485c-3.256.647-7.171.647-15.001.647H42.13c-7.83 0-11.745 0-15.001-.647A33.708 33.708 0 0 1 .647 876.868C0 873.612 0 869.696 0 861.864V42.136c0-7.832 0-11.748.647-15.004A33.707 33.707 0 0 1 27.13.647C30.385 0 34.299 0 42.129 0H364.87ZM203.5 8c-5.799 0-10.5 4.701-10.5 10.5S197.701 29 203.5 29 214 24.299 214 18.5 209.299 8 203.5 8Z"
    }
  },
  {
    "id": "mockup-android-xiaomi-poco-x7",
    "label": "POCO X7",
    "width": 407,
    "height": 904,
    "mockup": {
      "image": "mockups/android-xiaomi-poco-x7.avif",
      "thumbnail": "mockups/android-xiaomi-poco-x7.avif",
      "frameWidth": 435,
      "frameHeight": 942,
      "offset": 0,
      "mask": "M350.048 0c19.935 0 29.903 0 37.517 3.878a35.594 35.594 0 0 1 15.556 15.549C407 27.037 407 37 407 56.927v790.146c0 19.926 0 29.889-3.879 37.5a35.592 35.592 0 0 1-15.556 15.549C379.951 904 369.983 904 350.048 904H56.952c-19.935 0-29.902 0-37.517-3.878A35.586 35.586 0 0 1 3.88 884.573C0 876.962 0 866.999 0 847.073V56.927c0-19.926 0-29.89 3.88-37.5a35.589 35.589 0 0 1 15.555-15.55C27.05 0 37.017 0 56.952 0h293.096ZM203.5 18.258a7.258 7.258 0 0 0-7.259 7.256 7.258 7.258 0 0 0 7.259 7.257 7.258 7.258 0 0 0 7.259-7.257 7.258 7.258 0 0 0-7.259-7.256Z"
    }
  },
  {
    "id": "mockup-android-xiaomi-redmi-note-15-pro",
    "label": "Redmi Note 15 Pro",
    "width": 427,
    "height": 924,
    "mockup": {
      "image": "mockups/android-xiaomi-redmi-note-15-pro.avif",
      "thumbnail": "mockups/android-xiaomi-redmi-note-15-pro.avif",
      "frameWidth": 467,
      "frameHeight": 962,
      "offset": 0,
      "mask": "M359.857 0c13.652 0 20.479 0 26.13 1.263a52.455 52.455 0 0 1 39.75 39.748C427 46.66 427 53.488 427 67.139V856.86c0 13.652 0 20.478-1.263 26.129a52.454 52.454 0 0 1-39.75 39.748C380.336 924 373.509 924 359.857 924H67.143c-13.652 0-20.479 0-26.13-1.263a52.453 52.453 0 0 1-39.75-39.748C0 877.338 0 870.512 0 856.86V67.14c0-13.652 0-20.478 1.263-26.13a52.454 52.454 0 0 1 39.75-39.747C46.664 0 53.49 0 67.143 0h292.714ZM213.5 16.631c-6.624 0-11.994 5.37-11.994 11.994s5.37 11.994 11.994 11.994 11.994-5.37 11.994-11.994-5.37-11.994-11.994-11.994Z"
    }
  },
  {
    "id": "mockup-android-oneplus-15",
    "label": "OnePlus 15",
    "width": 424,
    "height": 924,
    "mockup": {
      "image": "mockups/android-oneplus-15.avif",
      "thumbnail": "mockups/android-oneplus-15.avif",
      "frameWidth": 460,
      "frameHeight": 952,
      "offset": 0,
      "mask": "M346.909 0C373.893 0 387.386 3.1701e-05 397.692 5.25081C406.758 9.86951 414.129 17.2393 418.748 26.3039C424 36.6092 424 50.0997 424 77.0803V846.92C424 873.9 424 887.391 418.748 897.696C414.129 906.761 406.758 914.13 397.692 918.749C387.386 924 373.893 924 346.909 924H77.0909C50.1066 924 36.6142 924 26.3076 918.749C17.2417 914.13 9.87087 906.761 5.25154 897.696C3.17053e-05 887.391 0 873.9 0 846.92V77.0803C0 50.0997 3.17053e-05 36.6092 5.25154 26.3039C9.87087 17.2393 17.2417 9.86951 26.3076 5.25081C36.6142 3.1701e-05 50.1066 0 77.0909 0H346.909ZM212 15.8978C205.347 15.8978 199.955 21.29 199.955 27.9416C199.955 34.5932 205.347 39.9854 212 39.9854C218.653 39.9854 224.045 34.5932 224.045 27.9416C224.045 21.29 218.653 15.8978 212 15.8978Z"
    }
  },
  {
    "id": "mockup-android-oneplus-13",
    "label": "OnePlus 13",
    "width": 412,
    "height": 905,
    "mockup": {
      "image": "mockups/android-oneplus-13.avif",
      "thumbnail": "mockups/android-oneplus-13.avif",
      "frameWidth": 441,
      "frameHeight": 931,
      "offset": 0,
      "mask": "M360.663 0C378.632 0 387.617 1.26336e-05 394.481 3.49566C400.518 6.57056 405.427 11.4771 408.503 17.5119C412 24.3726 412 33.3539 412 51.3161V853.684C412 871.646 412 880.627 408.503 887.488C405.427 893.523 400.518 898.429 394.481 901.504C387.617 905 378.632 905 360.663 905H51.3374C33.3678 905 24.3827 905 17.5192 901.504C11.4819 898.429 6.57329 893.523 3.49712 887.488C1.26389e-05 880.627 0 871.646 0 853.684V51.3161C0 33.3539 1.26389e-05 24.3726 3.49712 17.5119C6.57329 11.4771 11.4819 6.57056 17.5192 3.49566C24.3827 1.26336e-05 33.3678 0 51.3374 0H360.663ZM206 11.6204C199.58 11.6204 194.375 16.8231 194.375 23.2409C194.375 29.6587 199.58 34.8613 206 34.8613C212.42 34.8613 217.625 29.6587 217.625 23.2409C217.625 16.8231 212.42 11.6204 206 11.6204Z"
    }
  },
  {
    "id": "mockup-android-oneplus-nord-ce5",
    "label": "OnePlus Nord CE5",
    "width": 360,
    "height": 797,
    "mockup": {
      "image": "mockups/android-oneplus-nord-ce5.avif",
      "thumbnail": "mockups/android-oneplus-nord-ce5.avif",
      "frameWidth": 388,
      "frameHeight": 827,
      "offset": 0,
      "mask": "M305.6 0c19.041 0 28.563 0 35.836 3.706a34.002 34.002 0 0 1 14.858 14.858C360 25.837 360 35.36 360 54.4v688.2c0 19.041 0 28.563-3.706 35.836a34.006 34.006 0 0 1-14.858 14.858C334.163 797 324.641 797 305.6 797H54.4c-19.041 0-28.563 0-35.836-3.706a34.002 34.002 0 0 1-14.858-14.858C0 771.163 0 761.641 0 742.6V54.4C0 35.36 0 25.837 3.706 18.564A33.999 33.999 0 0 1 18.564 3.706C25.837 0 35.36 0 54.4 0h251.2ZM180 15c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11Z"
    }
  },
  {
    "id": "mockup-android-motorola-edge-60-fusion",
    "label": "Motorola Edge 60 Fusion",
    "width": 407,
    "height": 904,
    "mockup": {
      "image": "mockups/android-motorola-edge-60-fusion.avif",
      "thumbnail": "mockups/android-motorola-edge-60-fusion.avif",
      "frameWidth": 429,
      "frameHeight": 934,
      "offset": 0,
      "mask": "M355.608 0C371.572 0 379.554 9.43209e-05 385.85 2.60692C394.245 6.08277 400.915 12.7499 404.392 21.1414C407 27.4349 407 35.4134 407 51.3703V852.63C407 868.587 407 876.565 404.392 882.859C400.915 891.25 394.245 897.917 385.85 901.393C379.554 904 371.572 904 355.608 904H51.3919C35.4283 904 27.4464 904 21.1502 901.393C12.7553 897.917 6.08532 891.25 2.60801 882.859C9.43605e-05 876.565 0 868.587 0 852.63V51.3703C0 35.4134 9.43605e-05 27.4349 2.60801 21.1414C6.08532 12.7499 12.7553 6.08277 21.1502 2.60692C27.4464 9.43209e-05 35.4283 0 51.3919 0H355.608ZM203.5 14.7616C197.954 14.7616 193.458 19.2557 193.458 24.7995C193.458 30.3432 197.954 34.8374 203.5 34.8374C209.046 34.8374 213.542 30.3432 213.542 24.7995C213.542 19.2557 209.046 14.7616 203.5 14.7616Z"
    }
  },
  {
    "id": "mockup-android-infinix-note-60-pro",
    "label": "Infinix Note 60 Pro",
    "width": 403,
    "height": 881,
    "mockup": {
      "image": "mockups/android-infinix-note-60-pro.avif",
      "thumbnail": "mockups/android-infinix-note-60-pro.avif",
      "frameWidth": 439,
      "frameHeight": 911,
      "offset": 0,
      "mask": "M306.921 0c40.03 0 60.045 0 74.076 10.182a53.353 53.353 0 0 1 11.809 11.795C403 35.99 403 55.982 403 95.964v689.072c0 39.982 0 59.973-10.194 73.987a53.345 53.345 0 0 1-11.809 11.795C366.966 881 346.951 881 306.921 881H96.079c-40.03 0-60.045 0-74.076-10.182a53.34 53.34 0 0 1-11.809-11.795C0 845.009 0 825.018 0 785.036V95.964C0 55.982 0 35.99 10.194 21.977a53.35 53.35 0 0 1 11.809-11.795C36.034 0 56.049 0 96.079 0h210.842ZM201.5 19a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z"
    }
  },
  {
    "id": "mockup-android-infinix-hot-50-pro",
    "label": "Infinix Hot 50 Pro",
    "width": 360,
    "height": 812,
    "mockup": {
      "image": "mockups/android-infinix-hot-50-pro.avif",
      "thumbnail": "mockups/android-infinix-hot-50-pro.avif",
      "frameWidth": 400,
      "frameHeight": 860,
      "offset": 0,
      "mask": "M301.154 0c20.598 0 30.897 0 38.764 4.008a36.772 36.772 0 0 1 16.073 16.07C360 27.944 360 38.24 360 58.834v694.332c0 20.594 0 30.89-4.009 38.756a36.77 36.77 0 0 1-16.073 16.07C332.051 812 321.752 812 301.154 812H58.846c-20.598 0-30.897 0-38.764-4.008a36.774 36.774 0 0 1-16.073-16.07C0 784.056 0 773.76 0 753.166V58.834c0-20.594 0-30.89 4.009-38.756a36.776 36.776 0 0 1 16.073-16.07C27.949 0 38.248 0 58.846 0h242.308ZM180 10.383c-5.257 0-9.519 4.26-9.519 9.517 0 5.256 4.262 9.517 9.519 9.517 5.257 0 9.519-4.26 9.519-9.517 0-5.256-4.262-9.517-9.519-9.517Z"
    }
  },
  {
    "id": "mockup-android-google-pixel-8",
    "label": "Google Pixel 8",
    "width": 360,
    "height": 800,
    "mockup": {
      "image": "mockups/android-google-pixel-8.avif",
      "thumbnail": "mockups/android-google-pixel-8.avif",
      "frameWidth": 406,
      "frameHeight": 846,
      "offset": 0,
      "mask": "M326.368 0C344.942 0.000104559 360 15.0414 360 33.5958V766.404C360 784.959 344.942 800 326.368 800H33.6324C15.0578 800 0 784.959 0 766.404V33.5958C4.27977e-05 15.0414 15.0578 1.60722e-05 33.6324 0H326.368ZM179.825 8.02989C172.279 8.02989 166.162 14.1405 166.162 21.6783C166.162 29.216 172.279 35.3263 179.825 35.3263C187.371 35.3262 193.488 29.2159 193.488 21.6783C193.488 14.1406 187.371 8.02995 179.825 8.02989Z"
    }
  },
  {
    "id": "mockup-android-samsung-galaxy-s22",
    "label": "Samsung Galaxy S22",
    "width": 360,
    "height": 780,
    "mockup": {
      "image": "mockups/android-samsung-galaxy-s22.avif",
      "thumbnail": "mockups/android-samsung-galaxy-s22.avif",
      "frameWidth": 402,
      "frameHeight": 814,
      "offset": 0,
      "mask": "M325.724 0C344.654 2.2967e-05 360 15.3611 360 34.3099V745.69C360 764.639 344.654 780 325.724 780H34.2758C15.3458 780 0 764.639 0 745.69V34.3099C2.12213e-05 15.3611 15.3458 2.44181e-05 34.2758 0H325.724ZM179.994 7.89236C174.82 7.89236 170.626 12.0911 170.626 17.2703C170.626 22.4495 174.82 26.6479 179.994 26.6479C185.168 26.6478 189.362 22.4494 189.362 17.2703C189.362 12.0911 185.168 7.89243 179.994 7.89236Z"
    }
  },
  {
    "id": "mockup-android-samsung-galaxy-a56",
    "label": "Samsung Galaxy A56",
    "width": 360,
    "height": 780,
    "mockup": {
      "image": "mockups/android-samsung-galaxy-a56.avif",
      "thumbnail": "mockups/android-samsung-galaxy-a56.avif",
      "frameWidth": 400,
      "frameHeight": 822,
      "offset": 0,
      "mask": "M324.286 0C344.01 0 360 15.9898 360 35.7143V744.286C360 764.01 344.01 780 324.286 780H35.7143C15.9898 780 4.19974e-07 764.01 0 744.286V35.7143C1.14141e-05 15.9898 15.9898 2.99124e-07 35.7143 0H324.286ZM180 8.09524C173.951 8.09524 169.048 12.9988 169.048 19.0476C169.048 25.0965 173.951 30 180 30C186.049 30 190.952 25.0965 190.952 19.0476C190.952 12.9988 186.049 8.09524 180 8.09524Z"
    }
  },
  {
    "id": "mockup-android-huawei-mate-x6",
    "label": "Huawei Mate X6",
    "width": 1120,
    "height": 1220,
    "mockup": {
      "image": "mockups/android-huawei-mate-x6.avif",
      "thumbnail": "mockups/android-huawei-mate-x6.avif",
      "frameWidth": 1180,
      "frameHeight": 1278,
      "offset": 0,
      "mask": "M1062.13 0c20.25 0 30.38 0 38.12 3.942 6.81 3.467 12.34 9 15.81 15.805 3.94 7.737 3.94 17.865 3.94 38.12V1162.13c0 20.26 0 30.39-3.94 38.12-3.47 6.81-9 12.34-15.81 15.81-7.74 3.94-17.87 3.94-38.12 3.94H57.873c-20.258 0-30.386 0-38.124-3.94-6.805-3.47-12.339-9-15.807-15.81C0 1192.52 0 1182.39 0 1162.13V57.867c0-20.255 0-30.383 3.942-38.12A36.17 36.17 0 0 1 19.75 3.942C27.487 0 37.615 0 57.873 0H1062.13Zm12.98 20.021c-9.1 0-16.47 7.374-16.47 16.47 0 9.095 7.37 16.468 16.47 16.468 9.1 0 16.47-7.373 16.47-16.469 0-9.095-7.37-16.469-16.47-16.469Z"
    }
  },
  {
    "id": "mockup-android-huawei-mate-xt-ultimate",
    "label": "Huawei Mate XT Ultimate",
    "width": 1592,
    "height": 1116,
    "mockup": {
      "image": "mockups/android-huawei-mate-xt-ultimate.avif",
      "thumbnail": "mockups/android-huawei-mate-xt-ultimate.avif",
      "frameWidth": 1660,
      "frameHeight": 1180,
      "offset": 0,
      "mask": "M1583.32 0c3.04 0 4.56 0 5.72.592 1.02.52 1.85 1.35 2.37 2.37.59 1.16.59 2.68.59 5.719V1107.32c0 3.04 0 4.56-.59 5.72a5.428 5.428 0 0 1-2.37 2.37c-1.16.59-2.68.59-5.72.59H8.679c-3.038 0-4.557 0-5.717-.59a5.428 5.428 0 0 1-2.371-2.37C0 1111.88 0 1110.36 0 1107.32V8.68c0-3.038 0-4.558.59-5.718A5.425 5.425 0 0 1 2.963.592C4.122 0 5.64 0 8.679 0H1583.32ZM256 11c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16Z"
    }
  },
  {
    "id": "mockup-apple-ipad-pro-129",
    "label": "Apple iPad Pro 12.9",
    "width": 1024,
    "height": 1366,
    "mockup": {
      "image": "mockups/apple-ipad-pro-129.avif",
      "thumbnail": "mockups/apple-ipad-pro-129.avif",
      "frameWidth": 1128,
      "frameHeight": 1468,
      "offset": 0,
      "mask": "M0 19C0 8.50659 8.50659 0 19 0H1005C1015.49 0 1024 8.50659 1024 19V1347C1024 1357.49 1015.49 1366 1005 1366H19C8.50659 1366 0 1357.49 0 1347V19Z"
    }
  },
  {
    "id": "mockup-apple-ipad-pro-11",
    "label": "Apple iPad Pro 11",
    "width": 834,
    "height": 1194,
    "mockup": {
      "image": "mockups/apple-ipad-pro-11.avif",
      "thumbnail": "mockups/apple-ipad-pro-11.avif",
      "frameWidth": 927,
      "frameHeight": 1291,
      "offset": 0,
      "mask": "M0 18C0 8.05888 8.05888 0 18 0H816C825.941 0 834 8.05888 834 18V1176C834 1185.94 825.941 1194 816 1194H18C8.05887 1194 0 1185.94 0 1176V18Z"
    }
  },
  {
    "id": "mockup-apple-ipad-mini-6",
    "label": "Apple iPad Mini 6",
    "width": 744,
    "height": 1133,
    "mockup": {
      "image": "mockups/apple-ipad-mini-6.avif",
      "thumbnail": "mockups/apple-ipad-mini-6.avif",
      "frameWidth": 890,
      "frameHeight": 1275,
      "offset": 0,
      "mask": "M0 34.4C0 22.3589 0 16.3383 2.34336 11.7392C4.40464 7.69372 7.69372 4.40464 11.7392 2.34336C16.3383 0 22.3589 0 34.4 0H709.6C721.641 0 727.662 0 732.261 2.34336C736.306 4.40464 739.595 7.69372 741.657 11.7392C744 16.3383 744 22.3589 744 34.4V1098.6C744 1110.64 744 1116.66 741.657 1121.26C739.595 1125.31 736.306 1128.6 732.261 1130.66C727.662 1133 721.641 1133 709.6 1133H34.4C22.3589 1133 16.3383 1133 11.7392 1130.66C7.69372 1128.6 4.40464 1125.31 2.34336 1121.26C0 1116.66 0 1110.64 0 1098.6V34.4Z"
    }
  },
  {
    "id": "mockup-apple-ipad-mini-5",
    "label": "Apple iPad Mini 5",
    "width": 768,
    "height": 1024,
    "mockup": {
      "image": "mockups/apple-ipad-mini-5.avif",
      "thumbnail": "mockups/apple-ipad-mini-5.avif",
      "frameWidth": 872,
      "frameHeight": 1262,
      "offset": 0,
      "mask": "M0 0H768V1024H0V0Z"
    }
  },
  {
    "id": "mockup-apple-ipad-air",
    "label": "Apple iPad Air",
    "width": 820,
    "height": 1180,
    "mockup": {
      "image": "mockups/apple-ipad-air.avif",
      "thumbnail": "mockups/apple-ipad-air.avif",
      "frameWidth": 960,
      "frameHeight": 1320,
      "offset": 0,
      "mask": "M0 27.1999C0 17.6791 0 12.9187 1.85289 9.28216C3.48274 6.08341 6.08341 3.48274 9.28216 1.85289C12.9187 0 17.6791 0 27.2 0H792.8C802.321 0 807.081 0 810.718 1.85289C813.917 3.48274 816.517 6.08341 818.147 9.28216C820 12.9187 820 17.6791 820 27.2V1152.8C820 1162.32 820 1167.08 818.147 1170.72C816.517 1173.92 813.917 1176.52 810.718 1178.15C807.081 1180 802.321 1180 792.8 1180H27.2C17.6791 1180 12.9187 1180 9.28216 1178.15C6.08341 1176.52 3.48274 1173.92 1.85289 1170.72C0 1167.08 0 1162.32 0 1152.8V27.1999Z"
    }
  },
  {
    "id": "mockup-apple-ipad-10-2",
    "label": "Apple iPad 10.2 (9th gen)",
    "width": 810,
    "height": 1080,
    "mockup": {
      "image": "mockups/apple-ipad-10-2.avif",
      "thumbnail": "mockups/apple-ipad-10-2.avif",
      "frameWidth": 904,
      "frameHeight": 1298,
      "offset": 0,
      "mask": "M0 2.59616C0 1.16235 1.16234 0 2.59615 0H807.404C808.838 0 810 1.16234 810 2.59615V1077.4C810 1078.84 808.838 1080 807.404 1080H2.59615C1.16233 1080 0 1078.84 0 1077.4V2.59616Z"
    }
  },
  {
    "id": "mockup-android-samsung-galaxy-tab-s10",
    "label": "Samsung Galaxy Tab S10",
    "width": 876,
    "height": 1400,
    "mockup": {
      "image": "mockups/android-samsung-galaxy-tab-s10.avif",
      "thumbnail": "mockups/android-samsung-galaxy-tab-s10.avif",
      "frameWidth": 914,
      "frameHeight": 1438,
      "offset": 0,
      "mask": "M0.00018189 12.9496C0.000185654 5.79773 5.79622 7.60059e-07 12.946 1.69764e-06L863.054 0.000113176C870.204 0.000114113 876 5.79784 876 12.9497L876 1387.05C876 1394.2 870.204 1400 863.054 1400L12.9458 1400C5.79604 1400 7.68971e-07 1394.2 1.69814e-06 1387.05L8.69943e-05 736.601C5.6765 735.893 10.0691 731.05 10.0691 725.18L10.0691 674.82C10.0691 668.95 5.67651 664.107 9.65935e-05 663.399L0.00018189 12.9496Z"
    }
  },
  {
    "id": "mockup-android-xiaomi-pad-8",
    "label": "Xiaomi Pad 8",
    "width": 854,
    "height": 1280,
    "mockup": {
      "image": "mockups/android-xiaomi-pad-8.avif",
      "thumbnail": "mockups/android-xiaomi-pad-8.avif",
      "frameWidth": 942,
      "frameHeight": 1364,
      "offset": 0,
      "mask": "M0 19.0826C0 8.54355 8.54044 0 19.0756 0H834.924C845.46 0 854 8.54356 854 19.0826V1260.92C854 1271.46 845.46 1280 834.924 1280H19.0756C8.54045 1280 0 1271.46 0 1260.92V19.0826Z"
    }
  },
  {
    "id": "mockup-android-xiaomi-redmi-pad-2",
    "label": "Redmi Pad 2",
    "width": 800,
    "height": 1280,
    "mockup": {
      "image": "mockups/android-xiaomi-redmi-pad-2.avif",
      "thumbnail": "mockups/android-xiaomi-redmi-pad-2.avif",
      "frameWidth": 902,
      "frameHeight": 1380,
      "offset": 0,
      "mask": "M0 13.7339C0 6.14888 6.14888 0 13.7339 0H786.266C793.851 0 800 6.14888 800 13.7339V1266.27C800 1273.85 793.851 1280 786.266 1280H13.7339C6.14889 1280 0 1273.85 0 1266.27V13.7339Z"
    }
  },
  {
    "id": "mockup-android-oneplus-pad-go-2",
    "label": "OnePlus Pad Go 2",
    "width": 990,
    "height": 1400,
    "mockup": {
      "image": "mockups/android-oneplus-pad-go-2.avif",
      "thumbnail": "mockups/android-oneplus-pad-go-2.avif",
      "frameWidth": 1098,
      "frameHeight": 1508,
      "offset": 0,
      "mask": "M0 35.429C0 15.8621 15.8565 0 35.4164 0H954.584C974.144 0 990 15.8621 990 35.429V1364.57C990 1384.14 974.144 1400 954.584 1400H35.4164C15.8565 1400 0 1384.14 0 1364.57V35.429Z"
    }
  },
  {
    "id": "mockup-laptops-apple-macbook-air-m5-13",
    "label": "MacBook Air 13\" M5",
    "width": 1280,
    "height": 832,
    "mockup": {
      "image": "mockups/laptops-apple-macbook-air-m5-13.avif",
      "thumbnail": "mockups/laptops-apple-macbook-air-m5-13.avif",
      "frameWidth": 1604,
      "frameHeight": 1058,
      "offset": 0,
      "screenBounds": {"left": 144.0, "top": 115.0, "width": 1317.0, "height": 853.0},
      "mask": "M1263.12 0c9.32 0 16.88 7.557 16.88 16.879V832H0V16.879C0 7.557 7.557 0 16.879 0H558.21a4.22 4.22 0 0 1 4.192 4.22v15.472a8.44 8.44 0 0 0 8.439 8.44h139.021a8.44 8.44 0 0 0 8.439-8.44V4.219A4.22 4.22 0 0 1 722.494 0h540.626Z"
    }
  },
  {
    "id": "mockup-laptops-apple-macbook-pro-m5-14",
    "label": "MacBook Pro 14\" M5",
    "width": 1512,
    "height": 982,
    "mockup": {
      "image": "mockups/laptops-apple-macbook-pro-m5-14.avif",
      "thumbnail": "mockups/laptops-apple-macbook-pro-m5-14.avif",
      "frameWidth": 1902,
      "frameHeight": 1258,
      "offset": 0,
      "screenBounds": {"left": 179.0, "top": 137.0, "width": 1544.0, "height": 996.0},
      "mask": "M1490.11 0C1502.2 0 1512 9.80154 1512 21.892V982H0V21.892C0 9.80154 9.80107 0 21.8908 0H656.708C659.053 0 663.744 0 663.745 3.90904V18.7646C663.745 25.6733 669.345 31.2743 676.253 31.2743H835.74C842.648 31.2742 848.248 25.6733 848.249 18.7646V3.90904C848.249 0 852.94 0 855.285 0H1490.11Z"
    }
  },
  {
    "id": "mockup-laptops-apple-macbook-pro-m5-16",
    "label": "MacBook Pro 16\" M5 (2025)",
    "width": 1728,
    "height": 1117,
    "mockup": {
      "image": "mockups/laptops-apple-macbook-pro-m5-16.avif",
      "thumbnail": "mockups/laptops-apple-macbook-pro-m5-16.avif",
      "frameWidth": 2110,
      "frameHeight": 1403,
      "offset": 0,
      "screenBounds": {"left": 176.5, "top": 145.5, "width": 1757.0, "height": 1128.5},
      "mask": "M1706.44 0C1718.35 2.13972e-05 1728 9.6569 1728 21.5693V1115.46C1728 1116.31 1727.31 1117 1726.46 1117H1.54004C0.689495 1117 0 1116.31 0 1115.46V21.5693C0.000179212 9.6569 9.65355 0 21.5615 0H768.51C771.061 0 773.13 2.06847 773.13 4.62012V21.5615C773.13 26.665 777.268 30.8027 782.371 30.8027H947.167C951.42 30.8026 954.867 27.3544 954.867 23.1016V4.62012C954.867 2.06847 956.937 0 959.488 0H1706.44Z"
    }
  },
  {
    "id": "mockup-laptops-apple-macbook-neo-13",
    "label": "MacBook Neo",
    "width": 1204,
    "height": 753,
    "mockup": {
      "image": "mockups/laptops-apple-macbook-neo-13.avif",
      "thumbnail": "mockups/laptops-apple-macbook-neo-13.avif",
      "frameWidth": 1492,
      "frameHeight": 997,
      "offset": 0,
      "screenBounds": {"left": 116.5, "top": 110.5, "width": 1259.5, "height": 787.5},
      "mask": "M0 17.4778C0 7.82505 7.83122 0 17.4915 0H1186.51C1196.17 0 1204 7.82506 1204 17.4778V753H0V17.4778Z"
    }
  },
  {
    "id": "mockup-laptops-microsoft-surface-go",
    "label": "Microsoft Surface Go 12.4\"",
    "width": 1536,
    "height": 1024,
    "mockup": {
      "image": "mockups/laptops-microsoft-surface-go.avif",
      "thumbnail": "mockups/laptops-microsoft-surface-go.avif",
      "frameWidth": 2022,
      "frameHeight": 1722,
      "offset": 307,
      "screenBounds": {"left": 212.5, "top": 334.0, "width": 1596.0, "height": 1120.5},
      "mask": "M0 13.3059C0 5.95726 5.95833 0 13.3083 0H1522.69C1530.04 0 1536 5.95726 1536 13.3059V1010.69C1536 1018.04 1530.04 1024 1522.69 1024H13.3083C5.95832 1024 0 1018.04 0 1010.69V13.3059Z"
    }
  },
  {
    "id": "mockup-laptops-dell-latitude-3450-14",
    "label": "Dell Latitude 3450 14\"",
    "width": 1920,
    "height": 1080,
    "mockup": {
      "image": "mockups/laptops-dell-latitude-3450-14.avif",
      "thumbnail": "mockups/laptops-dell-latitude-3450-14.avif",
      "frameWidth": 2314,
      "frameHeight": 1854,
      "offset": 294,
      "screenBounds": {"left": 197.0, "top": 403.0, "width": 1921.0, "height": 1065.0},
      "mask": "M0 2.00001C0 0.895436 0.895431 0 2 0H1918C1919.1 0 1920 0.895431 1920 2V1078C1920 1079.1 1919.1 1080 1918 1080H1.99997C0.8954 1080 0 1079.1 0 1078V2.00001Z"
    }
  },
  {
    "id": "mockup-laptops-huawei-matebook-d-14",
    "label": "Huawei MateBook D 14 (2024)",
    "width": 1280,
    "height": 800,
    "mockup": {
      "image": "mockups/laptops-huawei-matebook-d-14.avif",
      "thumbnail": "mockups/laptops-huawei-matebook-d-14.avif",
      "frameWidth": 1944,
      "frameHeight": 1134,
      "offset": 90,
      "screenBounds": {"left": 335.5, "top": 186.0, "width": 1271.0, "height": 776.0},
      "mask": "M0 0H1280V800H0V0Z"
    }
  },
  {
    "id": "mockup-laptops-apple-macbook-air-m1",
    "label": "MacBook Air 13\" M1 (2020)",
    "width": 1440,
    "height": 900,
    "mockup": {
      "image": "mockups/laptops-apple-macbook-air-m1.avif",
      "thumbnail": "mockups/laptops-apple-macbook-air-m1.avif",
      "frameWidth": 2002,
      "frameHeight": 1180,
      "offset": 0,
      "screenBounds": {"left": 231.0, "top": 84.5, "width": 1540.0, "height": 982.5},
      "mask": "M0 0H1440V900H0V0Z"
    }
  },
  {
    "id": "mockup-laptops-apple-macbook-pro-m1-13",
    "label": "MacBook Pro 13\" M1 (2020)",
    "width": 1680,
    "height": 1050,
    "mockup": {
      "image": "mockups/laptops-apple-macbook-pro-m1-13.avif",
      "thumbnail": "mockups/laptops-apple-macbook-pro-m1-13.avif",
      "frameWidth": 2200,
      "frameHeight": 1326,
      "offset": 0,
      "screenBounds": {"left": 221.0, "top": 86.0, "width": 1758.0, "height": 1126.5},
      "mask": "M0 0H1680V1050H0V0Z"
    }
  },
  {
    "id": "mockup-others-sony-4k-tv-55",
    "label": "Sony 4K TV 55\"",
    "width": 1920,
    "height": 1080,
    "mockup": {
      "image": "mockups/others-sony-4k-tv-55.avif",
      "thumbnail": "mockups/others-sony-4k-tv-55.avif",
      "frameWidth": 1958,
      "frameHeight": 1342,
      "offset": 0,
      "mask": "M0 2a2 2 0 0 1 2-2h1916c1.1 0 2 .895 2 2v1076c0 1.1-.9 2-2 2H2c-1.105 0-2-.9-2-2V2Z"
    }
  },
  {
    "id": "mockup-others-nintendo-switch-2",
    "label": "Nintendo Switch 2",
    "width": 1920,
    "height": 1080,
    "mockup": {
      "image": "mockups/others-nintendo-switch-2.avif",
      "thumbnail": "mockups/others-nintendo-switch-2.avif",
      "frameWidth": 2988,
      "frameHeight": 1294,
      "offset": 0,
      "mask": "M0 0H1920V1080H0V0Z"
    }
  },
  {
    "id": "mockup-others-nintendo-switch-oled",
    "label": "Nintendo Switch OLED",
    "width": 1280,
    "height": 720,
    "mockup": {
      "image": "mockups/others-nintendo-switch-oled.avif",
      "thumbnail": "mockups/others-nintendo-switch-oled.avif",
      "frameWidth": 2210,
      "frameHeight": 948,
      "offset": 0,
      "mask": "M0 0H1280V720H0V0Z"
    }
  },
  {
    "id": "mockup-others-valve-steam-deck",
    "label": "Steam Deck OLED",
    "width": 1280,
    "height": 800,
    "mockup": {
      "image": "mockups/others-valve-steam-deck.avif",
      "thumbnail": "mockups/others-valve-steam-deck.avif",
      "frameWidth": 2388,
      "frameHeight": 960,
      "offset": 0,
      "mask": "M0 0H1280V800H0V0Z"
    }
  }
].map(profile => Object.freeze({ ...profile, mockup: Object.freeze(profile.mockup) })));
const PROFILES = MOCKUPS;
// Compatibilidade com espaços de trabalho e favoritos salvos antes dos mockups.
const LEGACY_PROFILES = Object.freeze({
  'mockai-compact': 'mockup-apple-iphone-18-pro',
  'mockai-wide': 'mockup-apple-iphone-18-pro-max',
  'mockai-tablet': 'mockup-apple-ipad-air'
});
const PROFILE = PROFILES[0];
const SCREEN_MODES = Object.freeze(['browser', 'pwa', 'fullscreen']);
function screenLayout(device, mode = 'browser') {
  if (!SCREEN_MODES.includes(mode)) throw new Error('Modo da tela inválido.');
  const profile = PROFILES.find(item => item.id === device.profileId);
  const image = profile?.mockup.image ?? '';
  const family = image.includes('laptops-') ? 'desktop' : image.includes('others-') ? 'display' : image.includes('apple-') ? 'ios' : 'android';
  const tablet = image.includes('ipad-');
  const mobile = family === 'ios' || family === 'android';
  const width = device.rotated ? device.height : device.width;
  const height = device.rotated ? device.width : device.height;
  const status = mode !== 'fullscreen' && mobile && !device.rotated ? (family === 'ios' ? (tablet ? 28 : 54) : 30) : 0;
  const address = mode === 'browser' ? (family === 'desktop' ? 64 : 46) : 0;
  const addressAtBottom = family === 'ios' && !tablet;
  const navigation = mode === 'browser' && mobile && !device.rotated ? (family === 'ios' && !tablet ? 32 : 22) : 0;
  const top = status + (addressAtBottom ? 0 : address);
  const bottom = navigation + (addressAtBottom ? address : 0);
  return { family, tablet, width, height, status, address, navigation, addressAtBottom, top, bottom, contentHeight: height - top - bottom };
}
// Geometria da moldura e do recorte de tela; preserva dimensões ao girar ou redimensionar.
function mockupLayout(device) {
  const profile = MOCKUPS.find(item => item.id === device.profileId);
  if (!profile) return null;
  const { mockup } = profile;
  const sx = device.width / profile.width, sy = device.height / profile.height;
  const frameWidth = mockup.frameWidth * sx, frameHeight = mockup.frameHeight * sy;
  // Notebook artwork has its own screen opening; keep the iframe's logical resolution.
  const bounds = mockup.screenBounds;
  const left = bounds ? bounds.left * sx : (frameWidth - device.width) / 2;
  const top = bounds ? bounds.top * sy : (frameHeight - device.height) / 2 - mockup.offset * sy;
  const screenWidth = bounds ? bounds.width * sx : device.width;
  const screenHeight = bounds ? bounds.height * sy : device.height;
  const scaleX = screenWidth / device.width, scaleY = screenHeight / device.height;
  return {
    image: mockup.image, mask: mockup.mask,
    width: device.rotated ? frameHeight : frameWidth,
    height: device.rotated ? frameWidth : frameHeight,
    imageWidth: frameWidth, imageHeight: frameHeight,
    left: device.rotated ? frameHeight - top - screenHeight : left,
    top: device.rotated ? left : top,
    screenWidth: device.rotated ? screenHeight : screenWidth,
    screenHeight: device.rotated ? screenWidth : screenHeight,
    screenScaleX: device.rotated ? scaleY : scaleX,
    screenScaleY: device.rotated ? scaleX : scaleY,
    captureMaskTransform: device.rotated
      ? `matrix(0 ${sx * scaleX} ${-sy * scaleY} 0 ${screenHeight} 0)`
      : `scale(${sx * scaleX} ${sy * scaleY})`,
    imageTransform: device.rotated ? `translateX(${frameHeight}px) rotate(90deg)` : 'none',
    maskTransform: device.rotated ? `matrix(0 ${sx} ${-sy} 0 ${device.height} 0)` : `scale(${sx} ${sy})`
  };
}
const MAX_DEVICES = 4;
const MAX_CUSTOM_PROFILES = 20;
const MAX_SETS = 16;
const PROTOCOL = 'mockai/v2';
const DEFAULT_VIEW = Object.freeze({ width: PROFILE.width, height: PROFILE.height, rotated: false, zoom: 0.75, theme: 'dark' });
function validateView(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Ajustes inválidos.');
  const { width, height, rotated, zoom, theme } = value;
  if (!Number.isInteger(width) || width < 240 || width > 2400 ||
      !Number.isInteger(height) || height < 240 || height > 2400 ||
      typeof rotated !== 'boolean' || ![0.25, 0.5, 0.75, 1].includes(zoom) ||
      !['dark', 'light'].includes(theme)) throw new Error('Dimensões ou aparência inválidas.');
  return { width, height, rotated, zoom, theme };
}
function validateName(value) {
  if (typeof value !== 'string' || !value.trim() || value.trim().length > 48 || /[\u0000-\u001f\u007f]/.test(value)) {
    throw new Error('Use um nome de 1 a 48 caracteres, sem caracteres de controle.');
  }
  return value.trim();
}
function validateId(value) {
  if (typeof value !== 'string' || !/^[a-zA-Z0-9-]{1,80}$/.test(value)) throw new Error('Identificador inválido.');
  return value;
}
function createDevice(profile = PROFILE, id = crypto.randomUUID()) {
  return { id, profileId: profile.id, label: profile.label, width: profile.width, height: profile.height, rotated: false };
}
function defaultWorkspace() {
  const device = createDevice(PROFILE, 'initial');
  return { devices: [device], selectedId: device.id, zoom: 0.75, theme: 'dark', screenMode: 'browser' };
}
function migrateView(value) {
  const { width, height, rotated, zoom, theme } = validateView(value);
  const device = { ...createDevice(PROFILE, 'initial'), width, height, rotated };
  return validateWorkspace({ devices: [device], selectedId: device.id, zoom, theme, screenMode: 'browser' });
}
function validateWorkspace(value) {
  if (!value || !Array.isArray(value.devices) || value.devices.length < 1 || value.devices.length > MAX_DEVICES) {
    throw new Error(`Mantenha entre 1 e ${MAX_DEVICES} dispositivos abertos.`);
  }
  const screenMode = value.screenMode === undefined ? 'browser' : value.screenMode;
  if (!SCREEN_MODES.includes(screenMode)) throw new Error('Modo da tela inválido.');
  const devices = value.devices.map(device => {
    if (!device || typeof device !== 'object') throw new Error('Dispositivo inválido.');
    const dimensions = validateView({ ...device, zoom: value.zoom, theme: value.theme });
    const legacyId = Object.hasOwn(LEGACY_PROFILES, device.profileId) ? LEGACY_PROFILES[device.profileId] : null;
    const replacement = legacyId ? PROFILES.find(profile => profile.id === legacyId) : null;
    const profileId = replacement?.id ?? validateId(device.profileId);
    // Modelos com moldura usam sempre as dimensões do aparelho: o mesmo modelo tem o mesmo tamanho.
    const mockup = MOCKUPS.find(profile => profile.id === profileId);
    return {
      id: validateId(device.id), profileId, label: replacement?.label ?? validateName(device.label),
      width: mockup?.width ?? dimensions.width, height: mockup?.height ?? dimensions.height, rotated: dimensions.rotated
    };
  });
  if (new Set(devices.map(device => device.id)).size !== devices.length || !devices.some(device => device.id === value.selectedId)) {
    throw new Error('Seleção ou identificadores de dispositivos inválidos.');
  }
  return { devices, selectedId: value.selectedId, zoom: value.zoom, theme: value.theme, screenMode };
}
function addDevice(workspace, profile, id = crypto.randomUUID()) {
  const device = createDevice(profile, id);
  return validateWorkspace({ ...workspace, devices: [...workspace.devices, device], selectedId: device.id });
}
function removeDevice(workspace, id) {
  if (!workspace.devices.some(device => device.id === id)) throw new Error('Dispositivo não encontrado.');
  const devices = workspace.devices.filter(device => device.id !== id);
  return validateWorkspace({ ...workspace, devices, selectedId: workspace.selectedId === id ? devices[0]?.id : workspace.selectedId });
}
function emptyLibrary() { return { version: 1, customProfiles: [], favorites: [], sets: [] }; }
function validateLibrary(value) {
  if (!value || value.version !== 1 || !Array.isArray(value.customProfiles) || value.customProfiles.length > MAX_CUSTOM_PROFILES ||
      !Array.isArray(value.favorites) || !Array.isArray(value.sets) || value.sets.length > MAX_SETS) throw new Error('Biblioteca inválida.');
  const customProfiles = value.customProfiles.map(profile => {
    if (!profile || !validateId(profile.id).startsWith('custom-')) throw new Error('Perfil personalizado inválido.');
    validateView({ ...profile, rotated: false, zoom: 1, theme: 'dark' });
    return { id: profile.id, label: validateName(profile.label), width: profile.width, height: profile.height };
  });
  const ids = [...PROFILES, ...customProfiles].map(profile => profile.id);
  const allowedFavorites = [...ids, ...Object.keys(LEGACY_PROFILES)];
  if (new Set(ids).size !== ids.length || value.favorites.length > allowedFavorites.length ||
      new Set(value.favorites).size !== value.favorites.length || value.favorites.some(id => !allowedFavorites.includes(id))) throw new Error('Favoritos ou perfis inválidos.');
  const sets = value.sets.map(item => ({ id: validateId(item.id), name: validateName(item.name), workspace: validateWorkspace(item.workspace) }));
  if (new Set(sets.map(item => item.id)).size !== sets.length) throw new Error('Conjuntos duplicados.');
  return { version: 1, customProfiles, favorites: [...new Set(value.favorites.map(id => Object.hasOwn(LEGACY_PROFILES, id) ? LEGACY_PROFILES[id] : id))], sets };
}
function pageURL(value) {
  const url = new URL(value);
  if (!['https:', 'http:'].includes(url.protocol)) throw new Error('Abra uma página HTTP ou HTTPS para simular.');
  if (url.hostname === 'chromewebstore.google.com' || (url.hostname === 'chrome.google.com' && url.pathname.startsWith('/webstore'))) {
    throw new Error('O Chrome não permite simular esta página protegida.');
  }
  return url.href;
}

const MEDIA_LIMITS = Object.freeze({ durationMs: 120000, bytes: 64 * 1024 * 1024, fps: 30 });
function validateCaptureGeometry(value) {
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
  const composition = value.composition === undefined ? undefined : validateComposition(value.composition);
  return { ...(composition ? { composition } : {}), rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
    viewport: { width: viewport.width, height: viewport.height }, output: { width: output.width, height: output.height } };
}
function cropGeometry(value, sourceWidth, sourceHeight) {
  const geometry = validateCaptureGeometry(value);
  if (!Number.isFinite(sourceWidth) || !Number.isFinite(sourceHeight) || sourceWidth < 1 || sourceHeight < 1) throw new Error('A captura não contém imagem.');
  const { rect, viewport } = geometry;
  if (Math.abs((sourceWidth / sourceHeight) / (viewport.width / viewport.height) - 1) > 0.03) {
    throw new Error('O tamanho da aba mudou durante a captura. Tente novamente.');
  }
  const scaleX = sourceWidth / viewport.width, scaleY = sourceHeight / viewport.height;
  return { x: rect.x * scaleX, y: rect.y * scaleY, width: rect.width * scaleX, height: rect.height * scaleY, ...{ output: geometry.output } };
}
function chooseVideoType(format, supports) {
  const types = format === 'mp4' ? ['video/mp4;codecs=avc1.42E01E', 'video/mp4'] :
    format === 'webm' ? ['video/webm;codecs=vp8', 'video/webm;codecs=vp9', 'video/webm'] : [];
  const mime = types.find(type => supports(type));
  if (!mime) throw new Error(format === 'mp4' ? 'MP4 indisponível neste navegador. Escolha WebM.' : 'Não há codificador disponível para o formato escolhido.');
  return mime;
}

function sameCaptureGeometry(first, second) {
  const a = validateCaptureGeometry(first), b = validateCaptureGeometry(second);
  return JSON.stringify(a.composition) === JSON.stringify(b.composition) && ['rect', 'viewport', 'output'].every(group => Object.keys(a[group]).every(key => Math.abs(a[group][key] - b[group][key]) <= 0.5));
}

function validateComposition(value) {
  const { width, height, screen, frame, imageWidth, imageHeight, rotated, mask, matrix } = value ?? {};
  const finite = n => typeof n === 'number' && Number.isFinite(n);
  if (![width, height, screen?.x, screen?.y, screen?.width, screen?.height].every(finite) ||
      width < 1 || height < 1 || width > 6000 || height > 6000 ||
      screen.x < 0 || screen.y < 0 || screen.width < 1 || screen.height < 1 ||
      screen.x + screen.width > width + .5 || screen.y + screen.height > height + .5 ||
      (frame !== null && (typeof frame !== 'string' || !/^mockups\/[a-z0-9-]+\.avif$/.test(frame))) ||
      (frame !== null && (![imageWidth, imageHeight].every(finite) || imageWidth < 1 || imageHeight < 1 || imageWidth > 6000 || imageHeight > 6000 || typeof rotated !== 'boolean' ||
        typeof mask !== 'string' || mask.length > 40000 || !/^[MmLlHhVvCcSsQqTtAaZz0-9.,+eE\s-]+$/.test(mask) ||
        !Array.isArray(matrix) || matrix.length !== 6 || !matrix.every(finite)))) throw new Error('Composição do mockup inválida.');
  return { width, height, screen: { x: screen.x, y: screen.y, width: screen.width, height: screen.height }, frame,
    ...(frame ? { imageWidth, imageHeight, rotated, mask, matrix: [...matrix] } : {}) };
}

// O stream de vídeo pode incluir faixas laterais para manter a proporção da aba.
function videoCropGeometry(value, sourceWidth, sourceHeight) {
  const geometry = validateCaptureGeometry(value);
  if (!Number.isFinite(sourceWidth) || !Number.isFinite(sourceHeight) || sourceWidth < 1 || sourceHeight < 1) throw new Error('A captura não contém imagem.');
  const { rect, viewport, output } = geometry;
  const scale = Math.min(sourceWidth / viewport.width, sourceHeight / viewport.height);
  const offsetX = (sourceWidth - viewport.width * scale) / 2;
  const offsetY = (sourceHeight - viewport.height * scale) / 2;
  return { x: offsetX + rect.x * scale, y: offsetY + rect.y * scale, width: rect.width * scale, height: rect.height * scale, output };
}

const SUPPORTED_LANGUAGES = Object.freeze(['pt-BR', 'en', 'es']);
function resolveLanguage(preference = 'auto', browserLanguage = 'pt-BR') {
  const value = String(preference === 'auto' ? browserLanguage : preference).toLowerCase().replaceAll('_', '-');
  return /^en(?:-|$)/.test(value) ? 'en' : /^es(?:-|$)/.test(value) ? 'es' : 'pt-BR';
}
function createI18n(messages, preference = 'auto', browserLanguage = 'pt-BR') {
  let language = resolveLanguage(preference, browserLanguage);
  const sourceKeys = new Map(Object.entries(messages['pt-BR']).map(([key, text]) => [text, key]));
  function t(key, values = {}) {
    const template = messages[language]?.[key] ?? messages['pt-BR'][key] ?? String(key ?? '');
    return template.replace(/\{([a-zA-Z][a-zA-Z0-9]*)\}/g, (match, name) =>
      Object.hasOwn(values, name) ? String(values[name]) : match);
  }
  return {
    t, get language() { return language; },
    setLanguage(value) { language = resolveLanguage(value, browserLanguage); },
    fromSource(message) { return sourceKeys.has(message) ? t(sourceKeys.get(message)) : String(message); },
    error(message) { return sourceKeys.has(message) ? t(sourceKeys.get(message)) : t('error.native', { detail: String(message) }); },
    profile(profile) {
      const entries = { 'mockai-compact': ['Compacto', 'profile.compact'], 'mockai-wide': ['Amplo', 'profile.wide'], 'mockai-tablet': ['Tablet', 'profile.tablet'] };
      const entry = entries[profile.profileId ?? profile.id];
      return entry && profile.label === entry[0] ? t(entry[1]) : profile.label;
    },
    apply(root) {
      for (const node of root.querySelectorAll('[data-i18n]')) node.textContent = t(node.dataset.i18n);
      for (const node of root.querySelectorAll('[data-i18n-placeholder]')) node.setAttribute('placeholder', t(node.dataset.i18nPlaceholder));
      for (const node of root.querySelectorAll('[data-i18n-title]')) node.setAttribute('title', t(node.dataset.i18nTitle));
      for (const node of root.querySelectorAll('[data-i18n-aria]')) node.setAttribute('aria-label', t(node.dataset.i18nAria));
    }
  };
}

const OPTIONS_KEY = 'mockai.options.v1';
const DEFAULT_OPTIONS = Object.freeze({ version: 1, language: 'auto', scrollSync: false });
function validateOptions(value) {
  if (!value || value.version !== 1 || !['auto', 'pt-BR', 'en', 'es'].includes(value.language) || typeof value.scrollSync !== 'boolean') throw new Error('Preferências inválidas.');
  return { version: 1, language: value.language, scrollSync: value.scrollSync };
}
async function readOptions(storage) {
  const value = (await storage.get(OPTIONS_KEY))[OPTIONS_KEY];
  try { return validateOptions(value); } catch { return { ...DEFAULT_OPTIONS }; }
}
async function updateOptions(storage, patch) {
  if (!patch || typeof patch !== 'object' || Array.isArray(patch) || Object.keys(patch).some(key => !['language', 'scrollSync'].includes(key))) throw new Error('Preferências inválidas.');
  const options = validateOptions({ ...await readOptions(storage), ...patch });
  await storage.set({ [OPTIONS_KEY]: options });
  return options;
}
function watchOptions(api, callback) {
  if (!api.storage?.onChanged) return () => {};
  const listener = (changes, area) => {
    if (area !== 'local' || !Object.hasOwn(changes, OPTIONS_KEY)) return;
    try { callback(validateOptions(changes[OPTIONS_KEY].newValue)); }
    catch { callback({ ...DEFAULT_OPTIONS }); }
  };
  api.storage.onChanged.addListener(listener);
  return () => {
    try { api.storage.onChanged.removeListener(listener); }
    catch { /* O contexto pode ter sido invalidado ao recarregar a extensão. */ }
  };
}

// Escala visual compartilhada: dimensões reais dos iframes permanecem intactas.
function fitMockups(sizes, { width, height, zoom = 1, gap = 24 } = {}) {
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

// Limites de canvas para manter a captura local dentro de um orçamento previsível.
const PAGE_LIMITS = Object.freeze({ width: 2400, height: 32760, pixels: 32000000, slices: 160 });
function pageDimensions(width, height) {
  if (!Number.isInteger(width) || !Number.isInteger(height) || width < 1 || height < 1 ||
      width > PAGE_LIMITS.width || height > PAGE_LIMITS.height || width * height > PAGE_LIMITS.pixels) {
    throw new Error('A página é grande demais para uma única imagem.');
  }
  return { width, height };
}
function pageSlicePlacement({ width, height, offset, viewportHeight, covered }) {
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

return { PAGE_LIMITS, pageDimensions, pageSlicePlacement, MESSAGES, MOCKUPS, PROFILES, PROFILE, SCREEN_MODES, screenLayout, mockupLayout, MAX_DEVICES, MAX_CUSTOM_PROFILES, MAX_SETS, PROTOCOL, DEFAULT_VIEW, validateView, validateName, validateId, createDevice, defaultWorkspace, migrateView, validateWorkspace, addDevice, removeDevice, emptyLibrary, validateLibrary, pageURL, MEDIA_LIMITS, validateCaptureGeometry, cropGeometry, chooseVideoType, sameCaptureGeometry, validateComposition, videoCropGeometry, SUPPORTED_LANGUAGES, resolveLanguage, createI18n, OPTIONS_KEY, DEFAULT_OPTIONS, validateOptions, watchOptions, fitMockups };
})();
const STYLES = ":host { all: initial; color-scheme: dark; font: 14px/1.4 system-ui, sans-serif; }\n* { box-sizing: border-box; }\n[hidden] { display: none !important; }\n.workspace {\n  --bg: #071A13; --panel: #102B20; --ink: #F4F7F2; --muted: #A8BDB0;\n  --line: #28503B; --accent: #FFD600; --accent-ink: #071A13; --green: #22C55E; --focus: #60A5FA;\n  position: absolute; inset: 0; display: flex; flex-direction: column;\n  background: var(--bg); color: var(--ink); font: 14px/1.4 system-ui, sans-serif;\n  text-align: left; overflow: hidden;\n}\n.workspace[data-theme=light] {\n  --bg: #EDF5EF; --panel: #F4F7F2; --ink: #071A13; --muted: #526F5E;\n  --line: #CBDFD1; --accent: #FFD600; --accent-ink: #071A13; --green: #345C46; --focus: #2563EB; color-scheme: light;\n}\nbutton, input, select { font: inherit; color: var(--ink); background: var(--bg); border: 1px solid var(--line); border-radius: 8px; }\nbutton { cursor: pointer; padding: 9px 12px; white-space: nowrap; }\nbutton:hover:not(:disabled), button[aria-pressed=true], button[aria-expanded=true] { border-color: var(--green); background: var(--panel); }\nbutton:disabled { cursor: default; opacity: .4; }\nbutton:focus-visible, input:focus-visible, select:focus-visible, summary:focus-visible { outline: 2px solid var(--focus); outline-offset: 3px; }\ninput, select { padding: 9px 10px; min-width: 0; }\ninput { width: 78px; }\nlabel { color: var(--muted); font-size: 12px; }\n.icon { width: 18px; height: 18px; display: block; flex: 0 0 auto; }\n.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; border: 0; }\n\n/* Uma única linha de ações; controles secundários vivem no painel lateral. */\n.app-header { flex: 0 0 auto; min-height: 68px; display: flex; align-items: center; gap: 24px; padding: 12px 24px; border-bottom: 1px solid var(--line); background: var(--panel); }\n.brand { display: flex; align-items: center; justify-content: center; flex: 0 0 auto; padding: 2px 8px; }\n.brand-name { display: block; width: 108px; height: 38px; object-fit: contain; }\n.brand-symbol { display: none; width: 28px; height: 28px; object-fit: contain; border-radius: 5px; }\n.header-context, .header-actions { display: flex; align-items: center; gap: 8px; min-width: 0; }\n.header-context { border-left: 1px solid var(--line); padding-left: 20px; }\n.header-actions { margin-left: auto; flex-shrink: 0; }\n.header-button, .primary-button { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 36px; padding: 8px 11px; font-size: 12px; font-weight: 550; }\n.header-button { border-color: transparent; background: transparent; color: var(--muted); }\n.header-button:hover:not(:disabled), .header-button[aria-expanded=true] { color: var(--ink); border-color: var(--line); background: var(--bg); }\n.icon-button { display: inline-flex; justify-content: center; align-items: center; width: 34px; height: 34px; padding: 7px; flex: 0 0 auto; }\n.primary-button { background: var(--accent); color: var(--accent-ink); border-color: transparent; padding-inline: 14px; }\n.primary-button:hover:not(:disabled) { background: var(--accent); border-color: var(--accent); filter: brightness(1.06); }\n.header-divider { width: 1px; height: 18px; background: var(--line); margin-inline: 4px; }\n.media-label { display: inline-flex; align-items: center; gap: 7px; max-width: 170px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; color: var(--muted); padding-right: 8px; }\n.media-label::before { content: ''; flex: 0 0 auto; width: 6px; height: 6px; border-radius: 50%; background: #FF6A4D; }\n.recording-stop .icon { width: 14px; height: 14px; }\n\n.body { position: relative; display: flex; flex: 1; min-height: 0; }\n.library, .settings-panel { flex: 0 0 324px; width: 324px; min-width: 0; overflow-y: auto; padding: 20px; background: var(--panel); }\n.library { border-right: 1px solid var(--line); }\n.settings-panel { border-left: 1px solid var(--line); }\n.panel-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 20px; }\nh2 { font-size: 16px; font-weight: 650; margin: 0; letter-spacing: -.3px; }\nh3 { font-size: 12px; font-weight: 600; margin: 0; color: var(--ink); }\n.panel-dismiss { color: var(--muted); border: 0; background: transparent; }\n.panel-dismiss .icon { width: 16px; height: 16px; }\n.search { display: grid; gap: 7px; margin-bottom: 12px; }\n.search input { width: 100%; }\n.library button { padding: 7px 8px; font-size: 11px; }\n.library-row { display: flex; gap: 6px; align-items: center; padding: 13px 0; border-bottom: 1px solid var(--line); }\n.profile-preview { width: 42px; height: 54px; flex: 0 0 42px; object-fit: contain; }\n.row-info { display: grid; gap: 4px; flex: 1; min-width: 0; }\n.row-info strong { font-size: 12px; font-weight: 600; overflow-wrap: anywhere; }\n.row-info small, .empty, form p { color: var(--muted); font-size: 11px; }\nform { display: grid; gap: 10px; padding: 20px 0; }\nform label { display: grid; gap: 6px; }\nform input { width: 100%; }\nform p { margin: 0; }\n.settings-group { display: grid; gap: 14px; padding-bottom: 22px; margin-bottom: 22px; border-bottom: 1px solid var(--line); }\n.screen-modes { display: flex; gap: 3px; padding: 3px; border: 1px solid var(--line); border-radius: 10px; background: var(--bg); }\n.screen-modes button { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 7px; min-width: 0; padding: 10px 4px; border: 1px solid transparent; background: transparent; font-size: 11px; color: var(--muted); }\n.screen-modes button[aria-pressed=true] { border-color: var(--green); background: var(--panel); color: var(--ink); }\n.dimension-fields { display: flex; align-items: end; gap: 10px; }\n.dimension-fields label { display: grid; gap: 7px; flex: 1; min-width: 0; }\n.dimension-fields input { width: 100%; font-variant-numeric: tabular-nums; }\n.dimension-times { color: var(--muted); padding-bottom: 10px; }\n.paired-actions { display: flex; gap: 8px; }\n.paired-actions button { flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 8px; font-size: 12px; }\n.paired-actions .icon { width: 16px; height: 16px; }\n.setting-row, .toggle-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; width: 100%; min-height: 36px; }\n.setting-row select { max-width: 138px; font-size: 12px; }\n.toggle-row { padding: 0; border: 0; background: transparent; color: var(--muted); font-size: 12px; font-weight: 400; }\n.toggle-track { position: relative; width: 30px; height: 18px; border-radius: 10px; background: var(--line); flex-shrink: 0; }\n.toggle-track::after { content: ''; position: absolute; top: 3px; left: 3px; width: 12px; height: 12px; border-radius: 50%; background: var(--muted); }\n.toggle-row[aria-pressed=true] .toggle-track { background: var(--green); }\n.toggle-row[aria-pressed=true] .toggle-track::after { left: 15px; background: var(--accent-ink); }\n.check input { width: 16px; height: 16px; margin: 0; accent-color: var(--green); }\n.sync-status, .setting-hint { margin: -4px 0 0; color: var(--muted); font-size: 11px; line-height: 1.6; }\n.record-button { display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; font-size: 12px; }\n.settings-help { font-size: 11px; line-height: 1.7; color: var(--muted); }\n.settings-help summary { cursor: pointer; }\n.notice { margin: 12px 0 0; color: var(--muted); font-size: 11px; line-height: 1.7; }\n\n.stage { flex: 1; min-width: 0; min-height: 0; overflow-x: hidden; overflow-y: auto; scrollbar-gutter: stable; padding: 24px; display: grid; grid-template-columns: minmax(0, 1fr); grid-auto-rows: max-content; align-content: start; align-items: start; justify-items: center; gap: 24px; }\n.device-card { position: relative; display: flex; flex-direction: column; align-items: center; flex: 0 0 auto; padding: 10px; border: 1px solid transparent; border-radius: 12px; cursor: pointer; }\n.device-card[data-selected=true] { border-color: var(--green); box-shadow: 0 0 0 1px var(--green); }\n.device-card iframe { cursor: auto; }\n.device-heading { display: flex; justify-content: center; width: 0; min-width: 100%; margin-top: 4px; }\n.device-select { max-width: 100%; overflow: hidden; text-overflow: ellipsis; padding: 4px 6px; border: 0; background: transparent; color: var(--muted); font-size: 10px; line-height: 16px; font-weight: 400; text-align: center; }\n.device-select:hover:not(:disabled), .device-select[aria-pressed=true] { background: transparent; color: var(--ink); }\n.device-remove { position: absolute; top: 2px; right: 2px; z-index: 1; display: grid; place-items: center; width: 24px; height: 24px; padding: 4px; border: 0; border-radius: 50%; background: var(--panel); color: var(--muted); }\n.device-remove .icon { width: 14px; height: 14px; }\n.device-remove:hover:not(:disabled) { background: var(--panel); color: #FF6A4D; }\n.footprint { position: relative; }\n.device { position: absolute; top: 12px; left: 12px; transform-origin: top left; box-shadow: 0 0 0 9px #38493c, 0 16px 50px #0005; border-radius: 14px; background: white; overflow: hidden; }\n.device[data-mockup=true] { box-shadow: none; border-radius: 0; background: transparent; overflow: visible; }\n.device-bezel { position: absolute; inset: 0 auto auto 0; max-width: none; transform-origin: top left; pointer-events: none; user-select: none; }\n.device-screen { position: absolute; overflow: hidden; border-radius: 14px; background: white; }\n.screen-status, .screen-browser, .screen-navigation { position: absolute; left: 0; width: 100%; background: #F4F7F2; color: #102B20; font-family: system-ui, sans-serif; }\n.screen-status { top: 0; display: flex; align-items: center; justify-content: space-between; padding: 0 26px; font-size: 14px; font-weight: 600; }\n.screen-clock { min-width: 40px; text-align: center; }\n.screen-indicators svg { display: block; width: 62px; height: 16px; }\n.screen-browser { display: flex; flex-direction: column; justify-content: center; padding: 5px 12px; border-block: 1px solid #DCEBDF; }\n.screen-address-row { display: flex; align-items: center; gap: 8px; min-height: 32px; padding: 0 10px; background: #E5F0E8; border-radius: 9px; font-size: 13px; }\n.screen-address { flex: 1; min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; text-align: center; }\n.screen-lock, .screen-refresh { font-size: 18px; opacity: .65; }\n.screen-tab { display: none; }\n.device-screen[data-family=desktop] .screen-tab { display: block; width: 55%; max-width: 220px; height: 22px; margin: -4px 0 3px; padding: 3px 12px; border-radius: 7px 7px 0 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-size: 11px; background: #E5F0E8; }\n.device-screen[data-family=desktop] .screen-address-row { min-height: 30px; }\n.screen-navigation { bottom: 0; display: flex; justify-content: space-around; align-items: center; font-size: 24px; }\n.device-screen[data-family=android] .screen-navigation span, .device-screen[data-family=ios] .screen-navigation span { display: none; }\n.device-screen[data-family=ios] .screen-navigation { border-top: 1px solid #DCEBDF; }\n.device-screen[data-family=ios] .screen-navigation span { display: block; font-size: 21px; }\n.device-screen[data-family=android] .screen-navigation::after { content: ''; width: 80px; height: 4px; border-radius: 3px; background: currentColor; }\n.device-mask { position: absolute; width: 0; height: 0; pointer-events: none; }\n.device[data-mockup=true] iframe { border-radius: 0; }\niframe { display: block; border: 0; border-radius: 14px; background: white; }\n.workspace-error { position: absolute; bottom: 16px; left: 50%; z-index: 3; transform: translateX(-50%); width: max-content; max-width: calc(100% - 32px); margin: 0; padding: 10px 14px; border: 1px solid var(--line); border-radius: 10px; background: var(--panel); color: var(--ink); font-size: 12px; overflow-wrap: anywhere; }\n@media (max-width: 1000px) {\n  .library, .settings-panel { position: absolute; z-index: 2; inset-block: 0; width: min(324px, 100%); box-shadow: 0 16px 40px #0005; }\n  .library { left: 0; }\n  .settings-panel { right: 0; }\n}\n@media (max-width: 760px) {\n  .app-header { min-height: 60px; padding: 10px 14px; gap: 14px; }\n  .header-context { padding-left: 12px; gap: 6px; }\n  .header-button .button-label, .primary-button .button-label { display: none; }\n  .header-button, .primary-button { padding-inline: 9px; }\n  .header-actions { gap: 4px; }\n  .stage { padding: 20px; }\n}\n@media (max-width: 520px) {\n  .app-header { gap: 8px; padding-inline: 10px; }\n  .brand-name, .header-divider { display: none; }\n  .header-context { border: 0; padding: 0; flex: 1; }\n  .brand { padding: 2px; }\n  .brand-symbol { display: block; }\n  .header-actions { gap: 3px; }\n  .workspace[data-capturing=true] .header-context, .workspace[data-capturing=true] .brand { display: none; }\n  .media-label { max-width: 100px; font-size: 11px; }\n  .stage { padding: 14px; }\n}\n@media (max-width: 380px) {\n  .workspace[data-capturing=true] [data-action=settings] { display: none; }\n  .media-label { max-width: 80px; }\n}\n@media (max-height: 550px) { .app-header { min-height: 54px; padding-block: 8px; } }\n\n.capture-menu { position: fixed; inset: 0; width: min(400px, calc(100vw - 32px)); max-height: calc(100dvh - 32px); margin: auto; padding: 24px; overflow: auto; border: 1px solid var(--line); border-radius: 24px; background: var(--panel); color: var(--ink); box-shadow: 0 24px 80px #0006; }\n.capture-menu::backdrop { background: #03110b99; backdrop-filter: blur(6px); }\n.capture-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; }\n.capture-heading h2 { font-size: 20px; letter-spacing: -.5px; }\n.capture-device { margin: 6px 0 0; color: var(--muted); font-size: 12px; overflow-wrap: anywhere; }\n.capture-menu .capture-heading { margin-bottom: 24px; align-items: flex-start; }\n.capture-menu .panel-dismiss { border-radius: 50%; background: var(--bg); }\n.capture-screenshot { display: flex; align-items: center; gap: 14px; width: 100%; padding: 18px; border: 1px solid var(--line); border-radius: 16px; background: var(--bg); text-align: left; white-space: normal; }\n.capture-action-icon { display: grid; place-items: center; width: 46px; height: 46px; flex: 0 0 auto; border-radius: 13px; background: var(--accent); color: var(--accent-ink); }\n.capture-action-icon .icon { width: 22px; height: 22px; }\n.capture-action-copy { display: grid; gap: 5px; }\n.capture-action-copy strong { font-size: 14px; font-weight: 600; }\n.capture-action-copy small { font-size: 12px; color: var(--muted); }\n.capture-video { margin-top: 16px; padding: 18px; border: 1px solid var(--line); border-radius: 16px; background: var(--bg); }\n.capture-video-heading { display: flex; align-items: center; gap: 10px; }\n.capture-video-heading > .icon { color: var(--muted); width: 20px; height: 20px; }\n.capture-video-heading h3 { font-size: 14px; color: var(--ink); }\n.capture-video-hint { margin: 7px 0 20px; color: var(--muted); font-size: 12px; }\n.capture-format { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 16px; font-size: 12px; }\n.capture-format select { width: 112px; padding: 8px 10px; background: var(--panel); color: var(--ink); }\n.capture-record { width: 100%; min-height: 42px; border-radius: 10px; }\n.capture-record .icon { width: 16px; height: 16px; }\n@media (max-width: 420px) { .capture-menu { padding: 20px; border-radius: 20px; } }\n\n.capture-result { position: fixed; inset: 0; width: fit-content; min-width: min(320px, calc(100vw - 32px)); max-width: min(640px, calc(100vw - 32px)); max-height: calc(100dvh - 32px); margin: auto; overflow-y: auto; padding: 20px; border: 1px solid var(--line); border-radius: 20px; background: var(--panel); color: var(--ink); box-shadow: 0 24px 80px #0005; }\n.capture-result::backdrop { background: #03110bb3; }\n.capture-result .capture-heading h2 { font-size: 16px; }\n.result-preview { display: flex; align-items: center; justify-content: center; width: fit-content; max-width: 100%; margin: 16px auto 20px; }\n.result-preview:empty { margin: 0; }\n.result-preview img, .result-preview video { display: block; width: auto; height: auto; max-width: min(560px, calc(100vw - 74px)); max-height: min(64dvh, calc(100dvh - 220px), 640px); object-fit: contain; }\n.result-footer { display: grid; gap: 12px; }\n.result-note { margin: 0; color: var(--muted); font-size: 11px; text-align: center; }\n.result-download { width: 100%; min-height: 40px; border-radius: 10px; text-decoration: none; }\n\n.capture-fullpage { margin-top: 12px; }\n.capture-fullpage .capture-action-icon { background: var(--panel); color: var(--ink); }\n";
// Componentes sem HTML interpolado com dados do usuário.
const UI = (() => {
  // Família vetorial desenhada para os controles do projeto.
  function icon(name) {
    const paths = {
      device: '<rect x="7" y="3" width="10" height="18" rx="2.5"/><path d="M10 6h4M11 18h2"/>',
      devices: '<rect x="3" y="4" width="11" height="16" rx="2"/><rect x="17" y="8" width="4" height="12" rx="1.5"/><path d="M7 17h3"/>',
      camera: '<path d="m8 6 1.5-2h5L16 6h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"/><circle cx="12" cy="13" r="3.5"/>',
      settings: '<path d="M3 6h7m5 0h6M3 12h3m5 0h10M3 18h11m5 0h2"/><circle cx="12.5" cy="6" r="2.5"/><circle cx="8.5" cy="12" r="2.5"/><circle cx="16.5" cy="18" r="2.5"/>',
      close: '<path d="m6 6 12 12M18 6 6 18"/>',
      rotate: '<path d="M4 9a8 8 0 0 1 14-3l2 2M20 3v5h-5"/><rect x="7" y="11" width="7" height="10" rx="1.5"/>',
      reload: '<path d="M19 8a8 8 0 1 0 1 6M20 3v6h-6"/>',
      fullpage: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 6v12m-4-4 4 4 4-4"/>',
      record: '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/>',
      stop: '<rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" stroke="none"/>',
      browser: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>',
      pwa: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 18h4"/>',
      fullscreen: '<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"/>'
    };
    return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name] ?? ''}</svg>`;
  }
  function element(tag, text, className) {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  }
  function button(text, action, id) {
    const node = element('button', text);
    node.type = 'button';
    node.dataset.action = action;
    if (id) node.dataset.id = id;
    return node;
  }
  function deviceCard(device, url, i18n) {
    const card = element('article', undefined, 'device-card');
    card.dataset.id = device.id;
    const heading = element('div', undefined, 'device-heading');
    const name = i18n.profile(device);
    const select = button(name, 'select', device.id);
    select.className = 'device-select';
    const remove = button(undefined, 'remove', device.id);
    remove.className = 'device-remove';
    remove.innerHTML = icon('close');
    remove.setAttribute('aria-label', i18n.t('workspace.removeName', { name }));
    heading.append(select);
    const footprint = element('div', undefined, 'footprint');
    const shell = element('div', undefined, 'device');
    const bezel = element('img', undefined, 'device-bezel');
    bezel.alt = '';
    bezel.draggable = false;
    bezel.hidden = true;
    const screen = element('div', undefined, 'device-screen');
    const status = element('div', undefined, 'screen-status');
    status.setAttribute('aria-hidden', 'true');
    const clock = element('span', new Date().toLocaleTimeString(i18n.language, { hour: '2-digit', minute: '2-digit', hour12: false }), 'screen-clock');
    const indicators = element('span', undefined, 'screen-indicators');
    indicators.innerHTML = '<svg viewBox="0 0 62 16" fill="currentColor"><path d="M0 11h3v4H0zm5-3h3v7H5zm5-4h3v11h-3zm5-4h3v15h-3z"/><path d="M24 5a12 12 0 0 1 16 0l-2 2a9 9 0 0 0-12 0zm4 4a6 6 0 0 1 8 0l-4 5z"/><rect x="45" y="3" width="14" height="10" rx="2" fill="none" stroke="currentColor"/><path d="M47 5h10v6H47zm13 1h2v4h-2z"/></svg>';
    status.append(clock, indicators);
    const browser = element('div', undefined, 'screen-browser');
    browser.setAttribute('aria-hidden', 'true');
    const tab = element('div', new URL(url).hostname, 'screen-tab');
    const addressRow = element('div', undefined, 'screen-address-row');
    const address = element('span', new URL(url).host, 'screen-address');
    address.title = url;
    addressRow.append(element('span', '⌕', 'screen-lock'), address, element('span', '↻', 'screen-refresh'));
    browser.append(tab, addressRow);
    const navigation = element('div', undefined, 'screen-navigation');
    navigation.setAttribute('aria-hidden', 'true');
    navigation.append(element('span', '‹'), element('span', '›'), element('span', '□'), element('span', '⋯'));
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'device-mask');
    svg.setAttribute('aria-hidden', 'true');
    const defs = document.createElementNS(svg.namespaceURI, 'defs');
    const clip = document.createElementNS(svg.namespaceURI, 'clipPath');
    clip.id = `mockai-screen-${device.id}`;
    clip.setAttribute('clipPathUnits', 'userSpaceOnUse');
    const mask = document.createElementNS(svg.namespaceURI, 'path');
    clip.append(mask); defs.append(clip); svg.append(defs);
    const frame = document.createElement('iframe');
    frame.title = i18n.t('workspace.frameTitle', { name });
    // Mantém scripts e origem; não é uma fronteira de segurança contra o próprio site.
    frame.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-modals');
    frame.src = url;
    screen.append(status, browser, frame, navigation); shell.append(bezel, svg, screen); footprint.append(shell); card.append(remove, footprint, heading);
    return { card, select, remove, footprint, shell, frame, bezel, screen, mask, clip, status, browser, navigation };
  }
  function profiles(container, profiles, library, workspace, onlyFavorites, i18n) {
    const fragment = document.createDocumentFragment();
    for (const profile of profiles) {
      const row = element('div', undefined, 'library-row');
      if (profile.mockup) {
        const preview = element('img', undefined, 'profile-preview');
        preview.src = chrome.runtime.getURL(profile.mockup.thumbnail);
        preview.alt = '';
        preview.loading = 'lazy';
        preview.width = 42; preview.height = 54;
        row.append(preview);
      }
      const text = element('div', undefined, 'row-info');
      const name = i18n.profile(profile);
      text.append(element('strong', name), element('small', `${profile.width} × ${profile.height}`));
      const favorite = library.favorites.includes(profile.id);
      const star = button(favorite ? '★' : '☆', 'favorite', profile.id);
      star.setAttribute('aria-label', i18n.t(favorite ? 'library.unfavorite' : 'library.favorite', { name }));
      star.setAttribute('aria-pressed', String(favorite));
      const add = button(i18n.t('common.add'), 'add', profile.id);
      add.disabled = workspace.devices.length >= MODEL.MAX_DEVICES;
      add.setAttribute('aria-label', i18n.t('library.addName', { name }));
      row.append(text, star, add);
      if (profile.id.startsWith('custom-')) {
        const remove = button(i18n.t('common.delete'), 'delete-profile', profile.id);
        remove.setAttribute('aria-label', i18n.t('library.deleteProfile', { name }));
        row.append(remove);
      }
      fragment.append(row);
    }
    if (!profiles.length) fragment.append(element('p', i18n.t(onlyFavorites ? 'library.emptyFavorites' : 'library.empty'), 'empty'));
    container.replaceChildren(fragment);
  }
  function sets(container, library, i18n) {
    const fragment = document.createDocumentFragment();
    for (const item of library.sets) {
      const row = element('div', undefined, 'library-row');
      const text = element('div', undefined, 'row-info');
      text.append(element('strong', item.name), element('small', i18n.t('library.setCount', { count: item.workspace.devices.length })));
      const load = button(i18n.t('common.open'), 'load-set', item.id);
      load.setAttribute('aria-label', i18n.t('library.openSet', { name: item.name }));
      const remove = button(i18n.t('common.delete'), 'delete-set', item.id);
      remove.setAttribute('aria-label', i18n.t('library.deleteSet', { name: item.name }));
      row.append(text, load, remove); fragment.append(row);
    }
    if (!library.sets.length) fragment.append(element('p', i18n.t('library.emptySets'), 'empty'));
    container.replaceChildren(fragment);
  }
  return { icon, element, deviceCard, profiles, sets };
})();

const SYNC = (() => {
// Nenhum postMessage ou injeção em outras origens. Lê apenas a rolagem do documento principal.
function createScrollSync({ onStatus = () => {}, schedule = requestAnimationFrame, cancel = cancelAnimationFrame, now = Date.now } = {}) {
  const entries = new Map();
  let enabled = false, pending = null, sourceId = null, disposed = false;
  function status() {
    return { enabled, linked: [...entries.values()].filter(entry => entry.document).length, total: entries.size };
  }
  function publish() { onStatus(status()); }
  function detachDocument(entry) {
    entry.cleanup?.(); entry.cleanup = null; entry.document = entry.window = entry.expected = null;
  }
  function position(entry) {
    const element = entry.document.scrollingElement;
    if (!element) return null;
    return { x: element.scrollLeft, y: element.scrollTop,
      maxX: Math.max(0, element.scrollWidth - element.clientWidth), maxY: Math.max(0, element.scrollHeight - element.clientHeight) };
  }
  function relay() {
    pending = null;
    const source = entries.get(sourceId);
    if (!enabled || !source?.document || disposed) return;
    try {
      const origin = position(source);
      if (!origin) return;
      const fractionX = origin.maxX ? Math.max(0, Math.min(1, origin.x / origin.maxX)) : 0;
      const fractionY = origin.maxY ? Math.max(0, Math.min(1, origin.y / origin.maxY)) : 0;
      for (const entry of entries.values()) {
        if (entry === source || !entry.document) continue;
        try {
          const target = position(entry);
          if (!target) continue;
          const left = fractionX * target.maxX, top = fractionY * target.maxY;
          entry.expected = { x: left, y: top, until: now() + 250 };
          entry.window.scrollTo({ left, top, behavior: 'instant' });
        } catch { detachDocument(entry); publish(); }
      }
    } catch { detachDocument(source); publish(); }
  }
  function clearPending(id) {
    if (sourceId !== id) return;
    if (pending !== null) cancel(pending);
    pending = null; sourceId = null;
  }
  function bind(entry) {
    clearPending(entry.id);
    detachDocument(entry);
    if (!enabled || disposed) return;
    try {
      const doc = entry.frame.contentDocument;
      // about:blank anterior ao carregamento não conta como tela acessível.
      if (!doc || doc.readyState !== 'complete' || doc.URL === 'about:blank' || !doc.scrollingElement) { publish(); return; }
      entry.document = doc; entry.window = doc.defaultView;
      if (!entry.window) { detachDocument(entry); publish(); return; }
      const input = () => { entry.expected = null; };
      const scroll = event => {
        if (!enabled || disposed || !entry.document || ![doc, doc.scrollingElement].includes(event.target)) return;
        try {
          const actual = position(entry), expected = entry.expected;
          if (!actual) return;
          if (expected && (now() < expected.until || (Math.abs(actual.x - expected.x) <= 2 && Math.abs(actual.y - expected.y) <= 2))) return;
          entry.expected = null; sourceId = entry.id;
          if (pending === null) pending = schedule(relay);
        } catch { detachDocument(entry); publish(); }
      };
      doc.addEventListener('scroll', scroll, { passive: true, capture: true });
      const inputs = ['wheel', 'pointerdown', 'touchstart', 'keydown'];
      inputs.forEach(type => doc.addEventListener(type, input, { passive: true, capture: true }));
      entry.cleanup = () => {
        doc.removeEventListener('scroll', scroll, true);
        inputs.forEach(type => doc.removeEventListener(type, input, true));
      };
    } catch { detachDocument(entry); }
    publish();
  }
  function remove(id) {
    const entry = entries.get(id);
    if (!entry) return;
    clearPending(id);
    entry.frame.removeEventListener('load', entry.load);
    detachDocument(entry); entries.delete(id); publish();
  }
  return {
    status,
    add(id, frame) {
      if (disposed) return;
      remove(id);
      const entry = { id, frame, document: null };
      entry.load = () => bind(entry);
      entries.set(id, entry); frame.addEventListener('load', entry.load);
      bind(entry); publish();
    },
    remove,
    setEnabled(value) {
      if (disposed || enabled === Boolean(value)) return;
      enabled = Boolean(value);
      if (pending !== null) cancel(pending);
      pending = null; sourceId = null;
      for (const entry of entries.values()) bind(entry);
      publish();
    },
    dispose() {
      if (pending !== null) cancel(pending);
      pending = null; disposed = true; enabled = false;
      for (const id of [...entries.keys()]) remove(id);
    }
  };
}

return { createScrollSync };
})();
const COLORS = (() => {
// Lê somente documentos acessíveis do próprio quadro; não altera a página simulada.
function paletteFromColors(colors, context) {
  context.clearRect(0, 0, 1, 1);
  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, 1, 1);
  for (const color of colors) {
    context.fillStyle = color;
    context.fillRect(0, 0, 1, 1);
  }
  const [r, g, b] = context.getImageData(0, 0, 1, 1).data;
  const linear = [r, g, b].map(value => {
    const channel = value / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
  return { background: `rgb(${r}, ${g}, ${b})`, foreground: luminance > 0.179 ? '#000000' : '#ffffff' };
}

function watchFrameBackground(frame, onColor, { schedule = requestAnimationFrame, cancel = cancelAnimationFrame } = {}) {
  let cleanup = () => {}, pending = null, disposed = false, refresh = () => {};
  const queue = () => {
    if (!disposed && pending === null) pending = schedule(() => { pending = null; refresh(); });
  };
  function detach() {
    cleanup(); cleanup = () => {}; refresh = () => {};
    if (pending !== null) cancel(pending);
    pending = null;
  }
  function bind() {
    detach();
    if (disposed) return;
    onColor(null);
    try {
      const doc = frame.contentDocument;
      if (!doc?.body || !doc.defaultView || doc.URL === 'about:blank') return;
      const view = doc.defaultView;
      const canvas = doc.createElement('canvas');
      canvas.width = canvas.height = 1;
      const context = canvas.getContext('2d', { willReadFrequently: true });
      if (!context) return;
      refresh = () => {
        try {
          const colors = [doc.documentElement, doc.body].map(element => view.getComputedStyle(element).backgroundColor);
          onColor(paletteFromColors(colors, context));
        } catch { detach(); onColor(null); }
      };
      const observer = new view.MutationObserver(queue);
      observer.observe(doc.documentElement, { attributes: true, attributeFilter: ['class', 'style', 'media', 'href', 'rel'], childList: true, characterData: true, subtree: true });
      const darkMode = view.matchMedia('(prefers-color-scheme: dark)');
      darkMode.addEventListener('change', queue);
      view.addEventListener('resize', queue);
      doc.addEventListener('load', queue, true);
      doc.addEventListener('transitionend', queue, true);
      doc.addEventListener('animationend', queue, true);
      cleanup = () => {
        observer.disconnect();
        darkMode.removeEventListener('change', queue);
        view.removeEventListener('resize', queue);
        doc.removeEventListener('load', queue, true);
        doc.removeEventListener('transitionend', queue, true);
        doc.removeEventListener('animationend', queue, true);
      };
      refresh();
    } catch { detach(); onColor(null); }
  }
  frame.addEventListener('load', bind);
  bind();
  return () => {
    disposed = true;
    frame.removeEventListener('load', bind);
    detach();
  };
}

return { watchFrameBackground };
})();
// MODEL, UI e STYLES são incluídos pelo build no mundo isolado do Chrome.
(() => {
  const KEY = '__mockaiIndependentV2';
  if (globalThis[KEY]) return;
  let host, root, workspace, session, abort, previousFocus;
  let library = MODEL.emptyLibrary();
  let libraryBusy = false;
  let onlyFavorites = false;
  let saving = Promise.resolve();
  let mediaState = { state: 'idle' };
  let recordingClock = null;
  let mediaPoll = null;
  let mediaRevision = 0;
  let pageCapture = null;
  let previewJob = null;
  let measuring = false;
  let options = { ...MODEL.DEFAULT_OPTIONS };
  const i18n = MODEL.createI18n(MODEL.MESSAGES, options.language, globalThis.navigator?.language ?? 'pt-BR');
  const t = i18n.t;
  let scrollSync, stopWatching = () => {};
  let statusMessage = { key: 'workspace.hint', values: {} };
  const mediaBusy = () => ['preparing', 'recording', 'stopping'].includes(mediaState.state);
  const cards = new Map();
  let stageObserver, layoutFrame = null, selectionTimer = null;
  const query = selector => root?.querySelector(selector);
  const panels = {
    library: { panel: '.library', trigger: '[data-action=library]', focus: '[name=search]' },
    settings: { panel: '.settings-panel', trigger: '[data-action=settings]', focus: '[name=width]' }
  };
  function closePanels() {
    closeCapture();
    for (const value of Object.values(panels)) {
      query(value.panel).hidden = true;
      query(value.trigger).setAttribute('aria-expanded', 'false');
    }
  }
  function closeCapture() {
    const dialog = query('.capture-menu');
    if (dialog?.open) {
      dialog.close();
      query('[data-action=capture]')?.focus({ preventScroll: true });
    }
    query('[data-action=capture]')?.setAttribute('aria-expanded', 'false');
  }
  function closeResult() {
    const dialog = query('.capture-result');
    previewJob = null;
    const video = query('.result-preview video');
    if (video) { video.pause(); video.removeAttribute('src'); video.load(); }
    query('.result-preview')?.replaceChildren();
    query('.result-download')?.removeAttribute('href');
    if (dialog?.open) dialog.close();
    query('[data-action=capture]')?.focus({ preventScroll: true });
  }
  async function showResult(value) {
    if (!root || previewJob === value.jobId) return;
    closeCapture();
    previewJob = value.jobId;
    query('.result-preview').replaceChildren();
    query('.result-download').hidden = true;
    query('.result-note').textContent = t('export.preparing');
    if (!query('.capture-result').open) query('.capture-result').showModal();
    try {
      const file = await request('media.preview', { jobId: value.jobId });
      if (!root || previewJob !== value.jobId) return;
      if (!file.dataUrl?.startsWith(file.mode === 'image' ? 'data:image/png;base64,' : 'data:video/')) throw new Error('A captura não está mais disponível.');
      const preview = document.createElement(file.mode === 'image' ? 'img' : 'video');
      if (file.mode === 'video') { preview.controls = true; preview.preload = 'metadata'; }
      else preview.alt = t('export.alt');
      preview.src = file.dataUrl;
      query('.result-preview').append(preview);
      const download = query('.result-download');
      download.href = file.dataUrl; download.download = file.filename;
      download.textContent = t('export.download', { format: file.mode === 'image' ? 'PNG' : file.mime.startsWith('video/mp4') ? 'MP4' : 'WebM' });
      download.hidden = false;
      query('.result-note').textContent = t(value.fullPage ? 'capture.fullPageReady' : file.mode === 'image' ? 'capture.transparent' : 'export.ready');
    } catch (error) {
      if (root && previewJob === value.jobId) query('.result-note').textContent = i18n.error(error.message);
    } finally {
      try { await request('media.release', { jobId: value.jobId }); }
      catch { /* O fechamento da aba também libera o resultado. */ }
      if (root && mediaState.jobId === value.jobId) setMedia({ state: 'idle' });
    }
  }
  function openCapture() {
    if (mediaBusy()) return;
    closeResult();
    closePanels();
    query('.capture-device').textContent = i18n.profile(selected());
    query('.capture-menu').showModal();
    query('[data-action=capture]').setAttribute('aria-expanded', 'true');
  }
  function captureContext(event, id) {
    if (!root || mediaBusy()) return;
    event.preventDefault();
    event.stopPropagation();
    if (id) selectDevice(id);
    openCapture();
  }
  function watchCaptureContext(frame, id) {
    let document;
    const handle = event => captureContext(event, id);
    function bind() {
      document?.removeEventListener('contextmenu', handle, true);
      document = null;
      try {
        document = frame.contentDocument;
        document?.addEventListener('contextmenu', handle, true);
      } catch { /* O navegador protege documentos de outra origem. */ }
    }
    frame.addEventListener('load', bind);
    bind();
    return () => {
      frame.removeEventListener('load', bind);
      document?.removeEventListener('contextmenu', handle, true);
      document = null;
    };
  }
  function setPanel(name, open) {
    const value = panels[name];
    if (!value) return;
    closePanels();
    if (open) {
      query(value.panel).hidden = false;
      query(value.trigger).setAttribute('aria-expanded', 'true');
      query(value.focus).focus({ preventScroll: true });
    } else query(value.trigger).focus({ preventScroll: true });
  }
  async function request(type, data = {}) {
    try {
      if (!chrome.runtime.id) throw new Error('Extension context invalidated.');
      const response = await chrome.runtime.sendMessage({ protocol: MODEL.PROTOCOL, type, ...data });
      if (!response?.ok) throw new Error(response?.error?.message ?? 'A extensão não respondeu. Recarregue esta página.');
      return response.data;
    } catch (error) {
      if (/extension context invalidated/i.test(error.message)) throw new Error('A extensão não respondeu. Recarregue esta página.');
      throw error;
    }
  }
  function dispose() {
    restorePage();
    if (root) closeResult();
    if (recordingClock !== null) clearInterval(recordingClock);
    recordingClock = null;
    if (mediaPoll !== null) clearTimeout(mediaPoll);
    mediaPoll = null;
    abort?.abort();
    if (selectionTimer !== null) clearInterval(selectionTimer);
    selectionTimer = null;
    stageObserver?.disconnect();
    if (layoutFrame !== null) cancelAnimationFrame(layoutFrame);
    layoutFrame = null;
    stopWatching(); scrollSync?.dispose();
    for (const entry of cards.values()) { entry.stopContext?.(); entry.stopColor?.(); entry.frame.remove(); }
    cards.clear(); host?.remove();
    try { chrome.runtime.onMessage.removeListener(receive); }
    catch { /* A desmontagem local continua após uma atualização da extensão. */ }
    delete globalThis[KEY];
    if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    host = root = null;
  }
  function renderMedia() {
    if (!root) return;
    const busy = mediaBusy();
    for (const node of root.querySelectorAll('.toolbar button,.toolbar input,.toolbar select,[data-action=library],[data-action=settings]')) node.disabled = busy;
    if (busy) for (const node of root.querySelectorAll('.library button,.library input,.device-card button')) node.disabled = true;
    for (const action of ['capture', 'screenshot', 'fullpage', 'record']) query(`[data-action=${action}]`).disabled = busy;
    query('[name=videoFormat]').disabled = busy;
    query('[data-action=capture]').hidden = busy;
    query('.workspace').dataset.capturing = String(busy);
    query('.media-label').hidden = !busy;
    query('[data-action=stop-record]').hidden = mediaState.state !== 'recording';
    query('[data-action=stop-record]').disabled = mediaState.state !== 'recording';
    query('[data-action=cancel-media]').hidden = !busy;
    query('[data-action=cancel-media]').disabled = !busy;
    query('.stage').style.overflow = busy ? 'hidden' : '';
    const seconds = Math.max(0, Math.floor((Date.now() - (mediaState.startedAt ?? Date.now())) / 1000));
    const elapsed = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
    query('.media-label').textContent = mediaState.fullPage && mediaState.state === 'preparing' ? t('capture.scrolling', { progress: mediaState.progress ?? 0 }) : mediaState.state === 'recording' ? `${t('header.recording')} ${elapsed}` : mediaState.state === 'preparing' ? t('media.preparing') : mediaState.state === 'stopping' ? t('media.stopping') : '';
  }
  function setMedia(value) {
    mediaState = value;
    const revision = ++mediaRevision;
    if (mediaPoll !== null) clearTimeout(mediaPoll);
    mediaPoll = null;
    // As notificações podem chegar antes da resposta de início ou se perder.
    // Consulta o gravador para manter Parar disponível e acompanhar a finalização.
    if (root && mediaBusy()) mediaPoll = setTimeout(async () => {
      mediaPoll = null;
      try {
        const latest = await request('media.status');
        if (root && revision === mediaRevision) setMedia(latest);
      } catch (error) {
        if (root && revision === mediaRevision) { setMedia({ state: 'idle' }); reportError(error); }
      }
    }, 500);
    if (recordingClock !== null) clearInterval(recordingClock);
    recordingClock = value.state === 'recording' ? setInterval(() => { if (root) renderMedia(); }, 1000) : null;
    if (root) apply();
    if (value.state === 'error') { reportError(new Error(value.reason ?? 'Não foi possível iniciar a gravação.')); return; }
    if (value.state === 'ready') void showResult(value);
    if (value.reason) report(({ stopped: 'media.finished', 'duration-limit': 'media.duration', interrupted: 'media.interrupted' })[value.reason] ?? value.reason);
  }
  function geometry() {
    const entry = cards.get(workspace.selectedId);
    const rect = entry.shell.getBoundingClientRect(), stage = query('.stage').getBoundingClientRect();
    if (rect.left < stage.left - 0.5 || rect.right > stage.right + 0.5 || rect.top < stage.top - 0.5 || rect.bottom > stage.bottom + 0.5) throw new Error('A tela precisa estar inteira visível. Reduza o zoom e tente novamente.');
    // A moldura inteira usa a mesma escala do conteúdo, inclusive em paisagem.
    const { width, height } = entry.size;
    const scale = Math.min(1, 2400 / width, 2400 / height, Math.sqrt(3840000 / (width * height)));
    const device = selected(), layout = MODEL.mockupLayout(device);
    const screen = { x: layout?.left ?? 0, y: layout?.top ?? 0,
      width: layout?.screenWidth ?? (device.rotated ? device.height : device.width), height: layout?.screenHeight ?? (device.rotated ? device.width : device.height) };
    let artwork = {};
    if (layout) {
      const captureMask = layout.captureMaskTransform;
      const numbers = captureMask.match(/[-+]?(?:\d*\.?\d+)(?:e[-+]?\d+)?/gi).map(Number);
      const matrix = captureMask.startsWith('matrix') ? numbers : [numbers[0], 0, 0, numbers[1] ?? numbers[0], 0, 0];
      artwork = { imageWidth: layout.imageWidth, imageHeight: layout.imageHeight, rotated: device.rotated, mask: layout.mask, matrix };
    }
    const composition = { width, height, screen, frame: layout?.image ?? null, ...artwork };
    return MODEL.validateCaptureGeometry({ composition, rect: { x: rect.left, y: rect.top, width: rect.width, height: rect.height }, viewport: { width: innerWidth, height: innerHeight }, output: { width: Math.round(width * scale), height: Math.round(height * scale) } });
  }
  async function prepare(mode) {
    measuring = true;
    try {
      closePanels();
      setMedia({ state: 'preparing', mode });
      const bezel = cards.get(workspace.selectedId).bezel;
      if (!bezel.hidden) await bezel.decode();
      cards.get(workspace.selectedId).card.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' });
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject(new Error('Volte à aba do simulador para preparar a captura.')), 2000);
        requestAnimationFrame(() => requestAnimationFrame(() => { clearTimeout(timeout); resolve(); }));
      });
      return geometry();
    } catch (error) { setMedia({ state: 'idle' }); throw error; }
    finally { measuring = false; }
  }
  function restorePage(jobId) {
    const capture = pageCapture;
    if (!capture || (jobId && capture.jobId !== jobId)) return;
    pageCapture = null;
    capture.doc.removeEventListener('wheel', capture.blockScroll, true);
    capture.doc.removeEventListener('touchmove', capture.blockScroll, true);
    capture.doc.removeEventListener('keydown', capture.blockKeys, true);
    for (const [node, value, priority] of capture.hidden) {
      if (value) node.style.setProperty('visibility', value, priority);
      else node.style.removeProperty('visibility');
    }
    try { capture.scroller.scrollTo({ left: capture.x, top: capture.y, behavior: 'instant' }); }
    catch { /* O documento pode ter sido descartado. */ }
    capture.style.remove();
    scrollSync?.setEnabled(options.scrollSync);
    if (root) apply();
  }
  function pageMetrics(capture) {
    if (capture.frame.contentDocument !== capture.doc) throw new Error('A página navegou durante a captura.');
    const width = capture.frame.contentWindow.innerWidth;
    const viewportHeight = capture.frame.contentWindow.innerHeight;
    const height = Math.ceil(Math.max(viewportHeight, capture.scroller.scrollHeight));
    MODEL.pageDimensions(width, height);
    if (width !== capture.width) throw new Error('A largura da página mudou durante a captura.');
    const rect = capture.frame.getBoundingClientRect();
    const geometry = MODEL.validateCaptureGeometry({
      rect: { x: rect.left, y: rect.top, width: rect.width, height: rect.height },
      viewport: { width: innerWidth, height: innerHeight }, output: { width: 240, height: 240 }
    });
    return { width, height, viewportHeight, offset: capture.scroller.scrollTop, geometry };
  }
  async function preparePage(jobId) {
    if (pageCapture) throw new Error('Já existe uma captura de página em andamento.');
    await prepare('image');
    const frame = cards.get(workspace.selectedId).frame;
    let doc;
    try { doc = frame.contentDocument; }
    catch { /* Origem protegida pelo navegador. */ }
    if (!doc?.scrollingElement) throw new Error('Para capturar a página inteira, abra o simulador no mesmo site da página exibida.');
    const scroller = doc.scrollingElement;
    const style = doc.createElement('style');
    style.textContent = 'html,body{scroll-behavior:auto!important;scroll-snap-type:none!important;overflow-anchor:none!important;scrollbar-width:none!important}::-webkit-scrollbar{display:none!important}';
    const capture = { jobId, frame, doc, scroller, style, x: scroller.scrollLeft, y: scroller.scrollTop,
      width: frame.contentWindow.innerWidth, hidden: [] };
    capture.blockScroll = event => event.preventDefault();
    capture.blockKeys = event => {
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) event.preventDefault();
    };
    pageCapture = capture;
    try {
      scrollSync?.setEnabled(false);
      doc.documentElement.append(style);
      doc.addEventListener('wheel', capture.blockScroll, { capture: true, passive: false });
      doc.addEventListener('touchmove', capture.blockScroll, { capture: true, passive: false });
      doc.addEventListener('keydown', capture.blockKeys, true);
      apply();
      return pageMetrics(capture);
    } catch (error) { restorePage(jobId); throw error; }
  }
  async function stepPage(jobId, offset) {
    const capture = pageCapture;
    if (!capture || capture.jobId !== jobId || !Number.isFinite(offset) || offset < 0) throw new Error('A captura não está mais disponível.');
    pageMetrics(capture);
    if (offset > 0) {
      const hidden = new Set(capture.hidden.map(([node]) => node));
      for (const node of capture.doc.querySelectorAll('body *')) {
        if (hidden.has(node)) continue;
        const style = capture.frame.contentWindow.getComputedStyle(node);
        if (style.position === 'fixed' || style.position === 'sticky') {
          capture.hidden.push([node, node.style.getPropertyValue('visibility'), node.style.getPropertyPriority('visibility')]);
          node.style.setProperty('visibility', 'hidden', 'important');
        }
      }
    }
    capture.scroller.scrollTo({ top: offset, left: 0, behavior: 'instant' });
    // Dá tempo para conteúdo lazy-loaded e pintura antes de ler os pixels da aba.
    await new Promise(resolve => setTimeout(resolve, 250));
    const images = [...capture.doc.images].filter(image => {
      const rect = image.getBoundingClientRect();
      return !image.complete && rect.bottom > 0 && rect.top < capture.frame.contentWindow.innerHeight;
    });
    if (images.length) await Promise.race([
      Promise.all(images.map(image => image.decode().catch(() => {}))),
      new Promise(resolve => setTimeout(resolve, 1000))
    ]);
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Volte à aba do simulador para continuar a captura.')), 2000);
      requestAnimationFrame(() => requestAnimationFrame(() => { clearTimeout(timeout); resolve(); }));
    });
    if (pageCapture !== capture) throw new Error('A captura foi cancelada.');
    return pageMetrics(capture);
  }
  function drawStatus() {
    const status = query('.workspace > [role=status]');
    if (status) {
      status.className = statusMessage.error ? 'workspace-error' : 'sr-only';
      status.textContent = statusMessage.key ? t(statusMessage.key, statusMessage.values) : statusMessage.error ? i18n.error(statusMessage.error) : i18n.fromSource(statusMessage.source);
    }
  }
  function report(message, values = {}) {
    statusMessage = Object.hasOwn(MODEL.MESSAGES['pt-BR'], message) ? { key: message, values } : { source: message };
    drawStatus();
  }
  function reportError(error) {
    const message = error.message ?? String(error);
    statusMessage = { error: /extension context invalidated/i.test(message) ? 'A extensão não respondeu. Recarregue esta página.' : message };
    drawStatus();
  }
  function renderSync() {
    if (!root || !scrollSync) return;
    const value = scrollSync.status();
    query('.sync-status').textContent = !value.enabled ? t('sync.off') : value.linked < 2 ? t('sync.unavailable') : t('sync.status', value);
  }
  function applyOptions(value) {
    const previousLanguage = i18n.language;
    options = MODEL.validateOptions(value);
    i18n.setLanguage(options.language);
    if (previousLanguage !== i18n.language && mediaBusy()) {
      void request('media.cancel').then(setMedia).catch(reportError);
    }
    scrollSync?.setEnabled(options.scrollSync);
    if (root) apply();
  }
  function selected() { return workspace.devices.find(device => device.id === workspace.selectedId); }
  function save() {
    const snapshot = structuredClone(workspace);
    saving = saving.then(() => request('workspace.save', { workspace: snapshot }))
      .catch(error => reportError(error));
    return saving;
  }
  function renderLibrary() {
    if (!root) return;
    for (const node of query('.library').querySelectorAll('button,input')) node.disabled = false;
    const search = query('[name=search]').value.trim().toLocaleLowerCase();
    const profiles = [...MODEL.PROFILES, ...library.customProfiles].filter(profile =>
      (!onlyFavorites || library.favorites.includes(profile.id)) &&
      `${i18n.profile(profile)} ${profile.label} ${profile.width} ${profile.height}`.toLocaleLowerCase().includes(search));
    UI.profiles(query('.profiles'), profiles, library, workspace, onlyFavorites, i18n);
    UI.sets(query('.saved-sets'), library, i18n);
    query('[data-action=favorites]').setAttribute('aria-pressed', String(onlyFavorites));
    query('[data-action=favorites]').textContent = t('library.favorites', { count: library.favorites.length });
    query('.library').setAttribute('aria-busy', String(libraryBusy));
    if (libraryBusy) {
      for (const node of query('.library').querySelectorAll('button,input:not([name=search])')) node.disabled = true;
    }
    renderMedia();
  }
  function fitStage() {
    const stage = query('.stage');
    if (!stage || !cards.size) return;
    const styles = getComputedStyle(stage);
    const width = stage.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
    const height = stage.clientHeight - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom);
    if (width <= 0 || height <= 0) return;
    const entries = workspace.devices.map(device => cards.get(device.id));
    const layout = MODEL.fitMockups(entries.map(entry => entry.size), { width, height, zoom: workspace.zoom, gap: parseFloat(styles.columnGap) || 24 });
    stage.style.gridTemplateColumns = `repeat(${layout.columns}, minmax(0, 1fr))`;
    for (const entry of entries) {
      const { width: outerWidth, height: outerHeight } = entry.size;
      entry.shell.style.cssText = `width:${outerWidth}px;height:${outerHeight}px;transform:scale(${layout.scale})`;
      entry.footprint.style.cssText = `width:${outerWidth * layout.scale + 24}px;height:${outerHeight * layout.scale + 24}px`;
      entry.card.style.width = `${outerWidth * layout.scale + 46}px`;
    }
  }
  function apply() {
    if (!root) return;
    i18n.apply(root);
    query('.workspace').lang = i18n.language;
    query('[name=language]').value = options.language;
    query('[name=scrollSync]').checked = options.scrollSync;
    query('.workspace').dataset.theme = workspace.theme;
    const stage = query('.stage');
    const ids = new Set(workspace.devices.map(device => device.id));
    for (const [id, entry] of cards) {
      if (!ids.has(id)) { entry.stopContext?.(); entry.stopColor?.(); scrollSync?.remove(id); entry.frame.remove(); entry.card.remove(); cards.delete(id); }
    }
    workspace.devices.forEach((device, index) => {
      const isNew = !cards.has(device.id);
      if (isNew) cards.set(device.id, UI.deviceCard(device, session.url, i18n));
      const entry = cards.get(device.id);
      if (isNew) entry.stopContext = watchCaptureContext(entry.frame, device.id);
      // Não movemos quadros existentes em atualizações comuns: isso pode recarregar seu documento.
      if (stage.children[index] !== entry.card) stage.insertBefore(entry.card, stage.children[index] ?? null);
      if (isNew) scrollSync?.add(device.id, entry.frame);
      const name = i18n.profile(device);
      entry.frame.title = t('workspace.frameTitle', { name });
      entry.remove.setAttribute('aria-label', t('workspace.removeName', { name }));
      entry.remove.title = t('workspace.removeName', { name });
      const width = device.rotated ? device.height : device.width;
      const height = device.rotated ? device.width : device.height;
      const active = device.id === workspace.selectedId;
      entry.card.dataset.selected = String(active);
      entry.select.textContent = name;
      entry.select.title = `${name} · ${width} × ${height}`;
      entry.select.setAttribute('aria-pressed', String(active));
      entry.select.disabled = false;
      entry.remove.disabled = workspace.devices.length === 1;
      const chromeLayout = MODEL.screenLayout(device, workspace.screenMode);
      entry.frame.width = String(width); entry.frame.height = String(chromeLayout.contentHeight);
      entry.frame.style.cssText = `position:absolute;top:${chromeLayout.top}px;left:0;width:${width}px;height:${chromeLayout.contentHeight}px`;
      entry.screen.dataset.mode = workspace.screenMode;
      entry.screen.dataset.family = chromeLayout.family;
      entry.status.hidden = chromeLayout.status === 0;
      entry.status.style.height = `${chromeLayout.status}px`;
      if (workspace.screenMode === 'pwa' && !entry.stopColor) {
        entry.stopColor = COLORS.watchFrameBackground(entry.frame, palette => {
          entry.status.style.backgroundColor = palette?.background ?? '';
          entry.status.style.color = palette?.foreground ?? '';
        });
      } else if (workspace.screenMode !== 'pwa' && entry.stopColor) {
        entry.stopColor(); entry.stopColor = null;
        entry.status.style.backgroundColor = ''; entry.status.style.color = '';
      }
      entry.browser.hidden = chromeLayout.address === 0;
      entry.browser.style.cssText = `height:${chromeLayout.address}px;${chromeLayout.addressAtBottom ? `bottom:${chromeLayout.navigation}px` : `top:${chromeLayout.status}px`}`;
      entry.navigation.hidden = chromeLayout.navigation === 0;
      entry.navigation.style.height = `${chromeLayout.navigation}px`;
      const layout = MODEL.mockupLayout(device);
      const outerWidth = layout?.width ?? width, outerHeight = layout?.height ?? height;
      entry.shell.dataset.mockup = String(Boolean(layout));
      entry.bezel.hidden = !layout;
      if (layout) {
        const imageURL = chrome.runtime.getURL(layout.image);
        if (entry.bezel.getAttribute('src') !== imageURL) entry.bezel.src = imageURL;
        entry.bezel.style.cssText = `width:${layout.imageWidth}px;height:${layout.imageHeight}px;transform:${layout.imageTransform}`;
        entry.mask.setAttribute('d', layout.mask);
        entry.mask.setAttribute('transform', layout.maskTransform);
      }
      entry.screen.style.cssText = `width:${width}px;height:${height}px;left:${layout?.left ?? 0}px;top:${layout?.top ?? 0}px;${layout ? `clip-path:url('#${entry.clip.id}');border-radius:0;transform-origin:top left;transform:scale(${layout.screenScaleX},${layout.screenScaleY});` : ''}`;
      // A imagem contínua usa só a página, sem recortes da moldura em cada trecho.
      if (pageCapture?.frame === entry.frame) {
        entry.screen.style.clipPath = 'none';
        entry.screen.style.borderRadius = '0';
        entry.bezel.style.visibility = 'hidden';
      } else entry.bezel.style.visibility = '';
      entry.size = { width: outerWidth, height: outerHeight };
    });
    fitStage();
    const device = selected();
    const fixedSize = Boolean(MODEL.mockupLayout(device));
    for (const name of ['width', 'height']) {
      const input = query(`[name=${name}]`);
      input.value = device[name];
      input.disabled = fixedSize;
    }
    query('[name=zoom]').value = workspace.zoom;
    query('[data-action=rotate]').setAttribute('aria-pressed', String(device.rotated));
    query('[data-action=theme]').setAttribute('aria-pressed', String(workspace.theme === 'light'));
    for (const button of root.querySelectorAll('[data-action=screen-mode]')) button.setAttribute('aria-pressed', String(button.dataset.mode === workspace.screenMode));
    renderLibrary(); renderSync(); drawStatus();
  }
  function update(next) { if (mediaBusy()) return; workspace = MODEL.validateWorkspace(next); apply(); void save(); }
  async function libraryOperation(type, data = {}) {
    if (libraryBusy) return;
    libraryBusy = true; renderLibrary();
    try {
      const result = await request(type, data);
      if (root) { library = MODEL.validateLibrary(result.library); report('library.updated'); }
      return result;
    } finally { libraryBusy = false; renderLibrary(); }
  }
  function selectDevice(id) {
    if (!root || mediaBusy() || workspace.selectedId === id || !cards.has(id)) return;
    update({ ...workspace, selectedId: id });
  }
  async function click(event) {
    const button = event.target.closest('[data-action]');
    if (!button || button.disabled) return;
    const { action, id } = button.dataset;
    try {
      switch (action) {
        case 'capture': openCapture(); return;
        case 'dismiss-capture': closeCapture(); return;
        case 'dismiss-result': closeResult(); return;
        case 'screenshot':
        case 'fullpage':
        case 'record': {
          if (mediaBusy()) return;
          closeCapture();
          statusMessage = { key: 'workspace.hint', values: {} };
          setMedia({ state: 'preparing' });
          await saving;
          try {
            const value = await request('media.start', { mode: action === 'fullpage' ? 'full-page' : action === 'screenshot' ? 'image' : 'video', format: query('[name=videoFormat]').value });
            if (root) setMedia(value);
          } catch (error) { setMedia({ state: 'idle' }); throw error; }
          return;
        }
        case 'stop-record': {
          if (mediaState.state !== 'recording') return;
          setMedia({ ...mediaState, state: 'stopping' });
          try { setMedia(await request('media.stop')); }
          catch (error) {
            try { setMedia(await request('media.status')); }
            catch { setMedia({ state: 'idle' }); }
            throw error;
          }
          return;
        }
        case 'cancel-media': setMedia(await request('media.cancel')); return;
        case 'close':
          try { await saving; await request('session.stop'); }
          catch (error) { reportError(error); dispose(); }
          return;
        case 'library': {
          const open = query('.library').hidden;
          setPanel('library', open);
          if (open) await libraryOperation('library.get');
          return;
        }
        case 'settings': setPanel('settings', query('.settings-panel').hidden); return;
        case 'dismiss-panel': setPanel(button.dataset.panel, false); return;
        case 'favorites': onlyFavorites = !onlyFavorites; renderLibrary(); return;
        case 'select': selectDevice(id); return;
        case 'screen-mode': update({ ...workspace, screenMode: button.dataset.mode }); return;
        case 'add': {
          const profile = [...MODEL.PROFILES, ...library.customProfiles].find(item => item.id === id);
          if (!profile) throw new Error('Perfil não encontrado. Atualize a biblioteca.');
          update(MODEL.addDevice(workspace, profile));
          cards.get(workspace.selectedId).select.focus();
          return;
        }
        case 'remove': {
          update(MODEL.removeDevice(workspace, id));
          cards.get(workspace.selectedId).select.focus();
          return;
        }
        case 'rotate': update({ ...workspace, devices: workspace.devices.map(device => device.id === workspace.selectedId ? { ...device, rotated: !device.rotated } : device) }); return;
        case 'theme': update({ ...workspace, theme: workspace.theme === 'dark' ? 'light' : 'dark' }); return;
        case 'retry': cards.get(workspace.selectedId).frame.src = session.url; return;
        case 'favorite': await libraryOperation('favorite.toggle', { id }); break;
        case 'delete-profile': await libraryOperation('profile.delete', { id }); break;
        case 'delete-set': await libraryOperation('set.delete', { id }); break;
        case 'load-set': {
          if (libraryBusy) return;
          // Atualiza a biblioteca antes de abrir um conjunto que pode ter mudado em outra aba.
          await libraryOperation('library.get');
          if (!root) return;
          const item = library.sets.find(value => value.id === id);
          if (!item) throw new Error('Conjunto não encontrado.');
          const next = structuredClone(item.workspace);
          // Novas instâncias usam a página da aba atual, nunca URLs de um conjunto salvo.
          const selectedIndex = next.devices.findIndex(device => device.id === next.selectedId);
          next.devices = next.devices.map(device => ({ ...device, id: crypto.randomUUID() }));
          next.selectedId = next.devices[selectedIndex].id;
          update(next);
          report('library.opened', { name: item.name });
          cards.get(workspace.selectedId).select.focus();
          return;
        }
        default: return;
      }
      // Listas são reconstruídas após mutações; retorna o foco a um controle estável.
      query('[name=search]')?.focus();
    } catch (error) { reportError(error); }
  }
  async function submit(event) {
    event.preventDefault();
    if (libraryBusy || !event.target.reportValidity()) return;
    const form = event.target;
    try {
      if (form.dataset.form === 'profile') {
        const device = selected();
        await libraryOperation('profile.create', { label: form.elements.namedItem('profileName').value, width: device.width, height: device.height });
        if (root) form.reset();
      }
      if (form.dataset.form === 'set') {
        await libraryOperation('set.save', { name: form.elements.namedItem('setName').value, workspace: structuredClone(workspace) });
        if (root) form.reset();
      }
    } catch (error) { reportError(error); }
  }
  function mount(next, savedOptions = MODEL.DEFAULT_OPTIONS) {
    session = next;
    workspace = MODEL.validateWorkspace(next.workspace);
    if (host) { applyOptions(savedOptions); return; }
    options = MODEL.validateOptions(savedOptions); i18n.setLanguage(options.language);
    previousFocus = document.activeElement;
    abort = new AbortController();
    host = document.createElement('div');
    host.style.cssText = 'all:initial!important;position:fixed!important;inset:0!important;z-index:2147483647!important;display:block!important;';
    root = host.attachShadow({ mode: 'closed' });
    root.innerHTML = `<style>${STYLES}</style>
      <section class="workspace" role="dialog" aria-modal="true" data-i18n-aria="app.dialog" tabindex="-1">
        <header class="app-header">
          <div class="brand" aria-label="Mockaí"><img class="brand-name" src="${chrome.runtime.getURL('img/brand/mockai-logo.png')}" alt="Mockaí" width="108" height="38"><img class="brand-symbol" src="${chrome.runtime.getURL('img/icons/app/icon-48.png')}" alt="" width="28" height="28"></div>
          <div class="header-context">
            <button class="header-button" data-action="library" aria-expanded="false" aria-controls="mockai-library" data-i18n-title="workspace.library" data-i18n-aria="workspace.library">${UI.icon('devices')}<span class="button-label" data-i18n="header.devices"></span></button>
          </div>
          <div class="header-actions">
            <span class="media-label" aria-live="polite" hidden></span>
            <button class="primary-button" data-action="capture" aria-haspopup="dialog" aria-expanded="false" aria-controls="mockai-capture" data-i18n-title="header.capture" data-i18n-aria="header.capture">${UI.icon('camera')}<span class="button-label" data-i18n="header.capture"></span></button>
            <button class="primary-button recording-stop" data-action="stop-record" data-i18n-title="media.stop" hidden>${UI.icon('stop')}<span data-i18n="header.stop"></span></button>
            <button class="header-button" data-action="cancel-media" data-i18n-title="media.cancel" hidden><span data-i18n="header.cancel"></span></button>
            <button class="header-button icon-button" data-action="settings" aria-expanded="false" aria-controls="mockai-settings" data-i18n-title="header.settings" data-i18n-aria="header.settings">${UI.icon('settings')}</button>
            <span class="header-divider" aria-hidden="true"></span>
            <button class="header-button icon-button close" data-action="close" data-i18n-title="common.close" data-i18n-aria="common.close">${UI.icon('close')}</button>
          </div>
        </header>
        <div class="body">
          <aside id="mockai-library" class="library" data-i18n-aria="workspace.library" hidden>
            <div class="panel-heading"><h2 data-i18n="library.title"></h2><button class="icon-button panel-dismiss" data-action="dismiss-panel" data-panel="library" data-i18n-aria="common.close" data-i18n-title="common.close">${UI.icon('close')}</button></div>
            <label class="search"><span data-i18n="library.search"></span><input name="search" type="search" data-i18n-placeholder="library.searchHint"></label>
            <button data-action="favorites" aria-pressed="false"></button>
            <div class="profiles"></div>
            <form data-form="profile"><h3 data-i18n="library.custom"></h3><p data-i18n="library.customHint"></p><label><span data-i18n="common.name"></span><input name="profileName" maxlength="48" required></label><button type="submit" data-i18n="library.saveProfile"></button></form>
            <h2 data-i18n="library.sets"></h2><div class="saved-sets"></div>
            <form data-form="set"><label><span data-i18n="library.setName"></span><input name="setName" maxlength="48" required></label><button type="submit" data-i18n="library.saveSet"></button></form>
          </aside>
          <main class="stage" data-i18n-aria="workspace.screens"></main>
          <aside id="mockai-settings" class="settings-panel toolbar" data-i18n-aria="header.settings" hidden>
            <div class="panel-heading"><h2 data-i18n="header.settings"></h2><button class="icon-button panel-dismiss" data-action="dismiss-panel" data-panel="settings" data-i18n-aria="common.close" data-i18n-title="common.close">${UI.icon('close')}</button></div>
            <section class="settings-group">
              <h3 data-i18n="settings.device"></h3>
              <div class="dimension-fields"><label><span data-i18n="workspace.width"></span><input name="width" type="number" min="240" max="2400" step="1" required></label><span class="dimension-times" aria-hidden="true">×</span><label><span data-i18n="workspace.height"></span><input name="height" type="number" min="240" max="2400" step="1" required></label></div>
              <div class="paired-actions"><button data-action="rotate" aria-pressed="false" data-i18n-title="workspace.rotate">${UI.icon('rotate')}<span data-i18n="settings.rotate"></span></button><button data-action="retry" data-i18n-title="workspace.reload">${UI.icon('reload')}<span data-i18n="settings.reload"></span></button></div>
              <label class="setting-row"><span data-i18n="settings.scale"></span><select name="zoom"><option value="0.25">25%</option><option value="0.5">50%</option><option value="0.75">75%</option><option value="1">100%</option></select></label>
            </section>
            <section class="settings-group">
              <h3 data-i18n="settings.appearance"></h3>
              <label class="setting-row"><span data-i18n="common.language"></span><select name="language"><option value="auto" data-i18n="common.auto"></option><option value="pt-BR">Português</option><option value="en">English</option><option value="es">Español</option></select></label>
              <button class="toggle-row" data-action="theme" aria-pressed="false"><span data-i18n="workspace.light"></span><span class="toggle-track" aria-hidden="true"></span></button>
              <label class="check setting-row"><span data-i18n="sync.label"></span><input name="scrollSync" type="checkbox"></label>
              <p class="sync-status" aria-live="polite"></p>
            </section>
            <section class="settings-group">
              <h3 id="screen-mode-label" data-i18n="screen.mode"></h3>
              <div class="screen-modes" role="group" aria-labelledby="screen-mode-label">
                <button type="button" data-action="screen-mode" data-mode="browser" aria-pressed="true">${UI.icon('browser')}<span data-i18n="screen.browser"></span></button>
                <button type="button" data-action="screen-mode" data-mode="pwa" aria-pressed="false">${UI.icon('pwa')}<span data-i18n="screen.pwa"></span></button>
                <button type="button" data-action="screen-mode" data-mode="fullscreen" aria-pressed="false">${UI.icon('fullscreen')}<span data-i18n="screen.fullscreen"></span></button>
              </div>
              <p class="setting-hint" data-i18n="screen.hint"></p>
            </section>
            <details class="settings-help"><summary data-i18n="settings.about"></summary><p class="notice" data-i18n="workspace.notice"></p><p class="notice" data-i18n="sync.hint"></p></details>
          </aside>
        </div>
        <dialog class="capture-result" aria-labelledby="result-title">
          <div class="capture-heading"><h2 id="result-title" data-i18n="capture.ready"></h2><button class="icon-button panel-dismiss" data-action="dismiss-result" data-i18n-aria="common.close">${UI.icon('close')}</button></div>
          <div class="result-preview"></div>
          <div class="result-footer"><p class="result-note" role="status" aria-live="polite"></p>
          <a class="primary-button result-download" hidden></a></div>
        </dialog>
        <dialog id="mockai-capture" class="capture-menu" aria-labelledby="capture-title" aria-describedby="capture-description">
          <div class="capture-heading">
            <div><h2 id="capture-title" data-i18n="header.capture"></h2><p class="capture-device"></p></div>
            <button class="icon-button panel-dismiss" data-action="dismiss-capture" data-i18n-aria="common.close" data-i18n-title="common.close">${UI.icon('close')}</button>
          </div>
          <p id="capture-description" class="sr-only" data-i18n="capture.description"></p>
          <button class="capture-screenshot" data-action="screenshot" autofocus>
            <span class="capture-action-icon">${UI.icon('camera')}</span>
            <span class="capture-action-copy"><strong data-i18n="capture.image"></strong><small data-i18n="capture.imageHint"></small></span>
          </button>
          <button class="capture-screenshot capture-fullpage" data-action="fullpage">
            <span class="capture-action-icon">${UI.icon('fullpage')}</span>
            <span class="capture-action-copy"><strong data-i18n="capture.fullPage"></strong><small data-i18n="capture.fullPageHint"></small></span>
          </button>
          <section class="capture-video" aria-labelledby="capture-video-title">
            <div class="capture-video-heading">${UI.icon('record')}<h3 id="capture-video-title" data-i18n="capture.video"></h3></div>
            <p class="capture-video-hint" data-i18n="capture.videoHint"></p>
            <label class="capture-format"><span data-i18n="capture.format"></span><select name="videoFormat" data-i18n-aria="capture.format"><option value="webm">WebM</option><option value="mp4">MP4</option></select></label>
            <button class="primary-button capture-record" data-action="record">${UI.icon('record')}<span data-i18n="capture.videoShort"></span></button>
          </section>
        </dialog>
        <p class="sr-only" role="status" aria-live="polite"></p>
      </section>`;
    scrollSync = SYNC.createScrollSync({ onStatus: renderSync });
    scrollSync.setEnabled(options.scrollSync);
    stopWatching = MODEL.watchOptions(chrome, applyOptions);
    // O clique na moldura seleciona sem recarregar o conteúdo da tela.
    root.addEventListener('pointerdown', event => {
      if (event.target.closest('[data-action=remove]')) return;
      const card = event.target.closest('.device-card');
      if (!card || mediaBusy()) return;
      selectDevice(card.dataset.id);
      // O foco externo também permite detectar um novo clique dentro do mesmo iframe.
      if (!event.target.closest('button,iframe')) cards.get(card.dataset.id)?.select.focus({ preventScroll: true });
    }, { signal: abort.signal });
    // Eventos de ponteiro não atravessam iframes. O foco identifica a tela clicada,
    // inclusive em páginas de outra origem, sem interceptar links ou formulários.
    selectionTimer = setInterval(() => {
      if (!root || mediaBusy()) return;
      const focused = root.activeElement;
      for (const [id, entry] of cards) {
        if (entry.frame === focused) { selectDevice(id); break; }
      }
    }, 150);
    root.addEventListener('click', click, { signal: abort.signal });
    root.addEventListener('contextmenu', event => {
      captureContext(event, event.target.closest('.device-card')?.dataset.id);
    }, { signal: abort.signal });
    query('.capture-result').addEventListener('cancel', event => { event.preventDefault(); closeResult(); }, { signal: abort.signal });
    query('.capture-menu').addEventListener('cancel', event => { event.preventDefault(); closeCapture(); }, { signal: abort.signal });
    query('.capture-menu').addEventListener('click', event => {
      const dialog = event.currentTarget, rect = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) closeCapture();
    }, { signal: abort.signal });
    root.addEventListener('submit', submit, { signal: abort.signal });
    root.addEventListener('input', event => { if (event.target.name === 'search') renderLibrary(); }, { signal: abort.signal });
    root.addEventListener('change', async event => {
      const input = event.target;
      try {
        if (['language', 'scrollSync'].includes(input.name)) {
          if (mediaBusy()) return;
          const patch = input.name === 'language' ? { language: input.value } : { scrollSync: input.checked };
          const result = await request('options.update', { patch });
          if (root) { applyOptions(result.options); report('options.saved'); }
          return;
        }
        if (input.name === 'zoom') { update({ ...workspace, zoom: Number(input.value) }); return; }
        if (!['width', 'height'].includes(input.name)) return;
        if (!input.checkValidity()) throw new Error('Use as dimensões indicadas nos campos.');
        update({ ...workspace, devices: workspace.devices.map(device => device.id === workspace.selectedId ? { ...device, [input.name]: Number(input.value) } : device) });
      } catch (error) { reportError(error); apply(); }
    }, { signal: abort.signal });
    root.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        if (query('.capture-result').open) { closeResult(); return; }
        if (query('.capture-menu').open) { closeCapture(); return; }
        const open = Object.entries(panels).find(([, value]) => !query(value.panel).hidden);
        if (open) setPanel(open[0], false);
        else query('[data-action=close]').click();
      }
      if (event.key === 'Tab') {
        const scope = query('.capture-result').open ? query('.capture-result') : query('.capture-menu').open ? query('.capture-menu') : root;
        const controls = [...scope.querySelectorAll('button,input,select,iframe,a[href]')].filter(node => !node.disabled && node.getClientRects().length);
        const first = controls[0], last = controls.at(-1);
        if (event.shiftKey && root.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && root.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    }, { signal: abort.signal });
    const cancelChangedGeometry = () => {
      if (!mediaBusy() || measuring) return;
      void request('media.cancel').then(setMedia).catch(error => { setMedia({ state: 'idle' }); reportError(error); });
    };
    window.addEventListener('resize', cancelChangedGeometry, { signal: abort.signal });
    query('.stage').addEventListener('scroll', cancelChangedGeometry, { signal: abort.signal });
    document.documentElement.append(host);
    apply();
    stageObserver = new ResizeObserver(() => {
      if (layoutFrame !== null) return;
      layoutFrame = requestAnimationFrame(() => { layoutFrame = null; fitStage(); });
    });
    stageObserver.observe(query('.stage'));
    query('[data-action=close]').focus();
    void libraryOperation('library.get').catch(error => reportError(error));
    void request('media.status').then(value => { if (root) setMedia(value); }).catch(() => {});
  }
  function receive(message, sender, respond) {
    if (sender.id !== chrome.runtime.id || message?.protocol !== MODEL.PROTOCOL) return false;
    if (message.type === 'page.prepare' || message.type === 'page.step') {
      Promise.resolve().then(() => message.type === 'page.prepare' ? preparePage(message.jobId) : stepPage(message.jobId, message.offset))
        .then(page => respond({ ok: true, page }), error => respond({ ok: false, error: error.message }));
      return true;
    }
    if (message.type === 'page.restore') {
      try { restorePage(message.jobId); respond({ ok: true }); }
      catch (error) { respond({ ok: false, error: error.message }); }
      return false;
    }
    if (message.type === 'page.verify') {
      try {
        if (!pageCapture || pageCapture.jobId !== message.jobId) throw new Error('A captura não está mais disponível.');
        respond({ ok: true, page: pageMetrics(pageCapture) });
      } catch (error) { respond({ ok: false, error: error.message }); }
      return false;
    }
    if (message.type === 'media.prepare') {
      prepare(message.mode).then(geometry => respond({ ok: true, geometry }), error => respond({ ok: false, error: error.message }));
      return true;
    }
    try {
      if (message.type === 'media.verify') respond({ ok: true, geometry: geometry() });
      if (message.type === 'media.state') { setMedia(message.state); respond({ ok: true }); }
      if (message.type === 'view.mount') { mount(message.session, message.options); respond({ ok: true }); }
      if (message.type === 'view.capture') { openCapture(); respond({ ok: true }); }
      if (message.type === 'view.resume') {
        if (host) session.url = message.session.url;
        respond({ ok: true, mounted: Boolean(host) });
      }
      if (message.type === 'view.unmount') { respond({ ok: true }); dispose(); }
    } catch (error) { respond({ ok: false, error: error.message }); if (message.type === 'view.mount') dispose(); }
    return false;
  }
  globalThis[KEY] = { dispose };
  chrome.runtime.onMessage.addListener(receive);
})();

})();
