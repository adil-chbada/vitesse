export const requireAssets = (path: string) => {
  return new URL(path, import.meta.url).href
}
