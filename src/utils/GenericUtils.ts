export function filterByProperty<T, K extends keyof T>(
  items: T[],
  key: K,
  value: T[K]
): T[] {
  return items.filter(item => item[key] === value);
}

export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
