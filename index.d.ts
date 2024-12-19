export function createContext(): Record<any, any>

export function runInContext(
  code: string,
  context: Record<any, any>,
  opts?: {
    filename?: string
    offset?: number
  }
): any

export function runInNewContext(
  code: string,
  opts?: {
    filename?: string
    offset?: number
  }
): any
