// Este módulo é o único proprietário das regras de sessão da extensão.
// activeTab limita o acesso ao site autorizado pelo clique no popup.
export function createCompatibility(api) {
  const dnr = api.declarativeNetRequest;
  async function stop(tabId) {
    const rules = await dnr.getSessionRules();
    const removeRuleIds = rules.filter(rule => rule.condition.tabIds?.includes(tabId)).map(rule => rule.id);
    if (removeRuleIds.length) await dnr.updateSessionRules({ removeRuleIds });
  }
  async function start(tabId, url) {
    if (!Number.isInteger(tabId) || tabId < 0) throw new Error('Aba inválida.');
    const page = new URL(url);
    if (!['http:', 'https:'].includes(page.protocol)) throw new Error('Abra uma página HTTP ou HTTPS para simular.');
    const rules = await dnr.getSessionRules();
    const previous = rules.filter(rule => rule.condition.tabIds?.includes(tabId));
    const used = new Set(rules.map(rule => rule.id));
    let id = previous[0]?.id ?? 1;
    if (!previous.length) while (used.has(id)) id++;
    await dnr.updateSessionRules({
      removeRuleIds: previous.map(rule => rule.id),
      addRules: [{
        id,
        priority: 1,
        action: {
          type: 'modifyHeaders',
          responseHeaders: [{ header: 'x-frame-options', operation: 'remove' }]
        },
        condition: {
          tabIds: [tabId],
          resourceTypes: ['sub_frame'],
          // A barra final evita alcançar outros hosts, portas ou subdomínios.
          urlFilter: `|${page.origin}/`
        }
      }]
    });
  }
  return { start, stop };
}
