export function generateListKey(): string {
  return `key-${Date.now()}-${Math.floor(Math.random() * 1e6)}`
}
