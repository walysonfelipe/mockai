import { PROFILES, MAX_CUSTOM_PROFILES, MAX_SETS, emptyLibrary, validateLibrary, validateName, validateView, validateWorkspace } from '../shared/model.js';
const KEY = 'mockai.library.v1';
export async function readLibrary(storage) {
  const value = (await storage.get(KEY))[KEY];
  // Dados corrompidos são preservados; não sobrescrevemos a biblioteca silenciosamente.
  return value === undefined ? emptyLibrary() : validateLibrary(value);
}
export async function changeLibrary(storage, message) {
  const library = await readLibrary(storage);
  switch (message.type) {
    case 'profile.create': {
      if (library.customProfiles.length >= MAX_CUSTOM_PROFILES) throw new Error(`O limite é de ${MAX_CUSTOM_PROFILES} perfis personalizados.`);
      const label = validateName(message.label);
      const { width, height } = validateView({ width: message.width, height: message.height, rotated: false, zoom: 1, theme: 'dark' });
      library.customProfiles.push({ id: `custom-${crypto.randomUUID()}`, label, width, height });
      break;
    }
    case 'profile.delete': {
      if (!library.customProfiles.some(profile => profile.id === message.id)) throw new Error('Perfil personalizado não encontrado.');
      library.customProfiles = library.customProfiles.filter(profile => profile.id !== message.id);
      library.favorites = library.favorites.filter(id => id !== message.id);
      break;
    }
    case 'favorite.toggle': {
      if (![...PROFILES, ...library.customProfiles].some(profile => profile.id === message.id)) throw new Error('Perfil não encontrado.');
      library.favorites = library.favorites.includes(message.id) ? library.favorites.filter(id => id !== message.id) : [...library.favorites, message.id];
      break;
    }
    case 'set.save': {
      if (library.sets.length >= MAX_SETS) throw new Error(`O limite é de ${MAX_SETS} conjuntos.`);
      library.sets.push({ id: `set-${crypto.randomUUID()}`, name: validateName(message.name), workspace: validateWorkspace(message.workspace) });
      break;
    }
    case 'set.delete': {
      if (!library.sets.some(item => item.id === message.id)) throw new Error('Conjunto não encontrado.');
      library.sets = library.sets.filter(item => item.id !== message.id);
      break;
    }
    default: throw new Error('Operação de biblioteca desconhecida.');
  }
  const result = validateLibrary(library);
  await storage.set({ [KEY]: result });
  return result;
}
