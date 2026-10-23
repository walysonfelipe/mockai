export const OPTIONS_KEY = 'mockai.options.v1';
export const DEFAULT_OPTIONS = Object.freeze({ version: 1, language: 'auto', scrollSync: false });
export function validateOptions(value) {
  if (!value || value.version !== 1 || !['auto', 'pt-BR', 'en', 'es'].includes(value.language) || typeof value.scrollSync !== 'boolean') throw new Error('Preferências inválidas.');
  return { version: 1, language: value.language, scrollSync: value.scrollSync };
}
export async function readOptions(storage) {
  const value = (await storage.get(OPTIONS_KEY))[OPTIONS_KEY];
  try { return validateOptions(value); } catch { return { ...DEFAULT_OPTIONS }; }
}
export async function updateOptions(storage, patch) {
  if (!patch || typeof patch !== 'object' || Array.isArray(patch) || Object.keys(patch).some(key => !['language', 'scrollSync'].includes(key))) throw new Error('Preferências inválidas.');
  const options = validateOptions({ ...await readOptions(storage), ...patch });
  await storage.set({ [OPTIONS_KEY]: options });
  return options;
}
export function watchOptions(api, callback) {
  if (!api.storage?.onChanged) return () => {};
  const listener = (changes, area) => {
    if (area !== 'local' || !Object.hasOwn(changes, OPTIONS_KEY)) return;
    try { callback(validateOptions(changes[OPTIONS_KEY].newValue)); }
    catch { callback({ ...DEFAULT_OPTIONS }); }
  };
  api.storage.onChanged.addListener(listener);
  return () => api.storage.onChanged.removeListener(listener);
}
