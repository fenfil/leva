export const get = (name: string): string => {
  if (!process.browser) return null;
  return localStorage.getItem(name);
};
export const set = (name: string, value: string): void => {
  if (!process.browser) return null;
  localStorage.setItem(name, value);
};
export const remove = (name: string): void => {
  if (!process.browser) return null;
  localStorage.removeItem(name);
};
export const getWithDefault = (name: string, def: string): string => {
  if (!process.browser) return def;
  const item = get(name);
  if (!item) return def;
};
