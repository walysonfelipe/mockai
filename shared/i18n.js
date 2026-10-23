export const SUPPORTED_LANGUAGES = Object.freeze(['pt-BR', 'en', 'es']);
export function resolveLanguage(preference = 'auto', browserLanguage = 'pt-BR') {
  const value = String(preference === 'auto' ? browserLanguage : preference).toLowerCase().replaceAll('_', '-');
  return /^en(?:-|$)/.test(value) ? 'en' : /^es(?:-|$)/.test(value) ? 'es' : 'pt-BR';
}
export function createI18n(messages, preference = 'auto', browserLanguage = 'pt-BR') {
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
