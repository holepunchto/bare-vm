interface Context {
  [key: string | number | symbol]: unknown
}

export function createContext(): Context

interface RunOptions {
  filename?: string
  offset?: number
}

export function runInContext(code: string, context: Context, options?: RunOptions): unknown

export function runInNewContext(code: string, options?: RunOptions): unknown
