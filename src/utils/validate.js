// 判断是否为内外部资源
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
