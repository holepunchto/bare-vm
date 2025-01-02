export function createContext(): Record<string | number | symbol, unknown>

export function runInContext(
  code: string,
  context: Record<string | number | symbol, unknown>,
  opts?: {
    filename?: string
    offset?: number
  }
): unknown

export function runInNewContext(
  code: string,
  opts?: {
    filename?: string
    offset?: number
  }
): unknown
