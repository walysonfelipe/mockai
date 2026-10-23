export const OPEN_MENU_ID = 'mockai-open';

export function registerContextMenu(api, controller) {
  async function install() {
    await api.contextMenus.removeAll();
    await new Promise((resolve, reject) => {
      api.contextMenus.create({
        id: OPEN_MENU_ID,
        title: api.i18n.getMessage('context_menu_open') || 'Abrir no Mockaí',
        contexts: ['page', 'selection', 'link', 'image', 'video', 'audio', 'frame'],
        documentUrlPatterns: ['http://*/*', 'https://*/*']
      }, () => {
        const error = api.runtime.lastError;
        if (error) reject(new Error(error.message));
        else resolve();
      });
    });
  }
  // O Chrome preserva os menus ao reiniciar o worker e o navegador.
  api.runtime.onInstalled.addListener(() => { void install().catch(console.error); });
  api.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId !== OPEN_MENU_ID || !Number.isInteger(tab?.id) || tab.id < 0) return;
    // Com o simulador aberto, também alcança a captura a partir de quadros protegidos.
    void controller.contextMenu(tab.id).catch(console.error);
  });
}
