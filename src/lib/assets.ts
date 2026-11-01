/** Public paths must be relative, e.g. images/approved-filename.png. */
export function publicAsset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
