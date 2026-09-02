interface Context {
  [key: string | number | symbol]: unknown
}

/**
 * Create and return a new isolated global context that code can be run in with `runInContext()`.
 * @returns A new isolated global context that code can be run in with `runInContext()`.
 */
export function createContext(): Context

interface RunOptions {
  filename?: string
  offset?: number
}

/**
 * Run `code` inside `context`, a context previously created with `createContext()`, and return the
 * result.
 * @param code - The JavaScript source to run.
 * @param context - A context previously created with `createContext()`.
 * @param opts - Options. `filename` is the script name used in stack traces (default
 * `'<anonymous>'`); `offset` shifts the reported line numbers (default `0`, also accepted as
 * `lineOffset` for Node.js compatibility).
 * @returns The completion value of `code`.
 */
export function runInContext(code: string, context: Context, options?: RunOptions): unknown

/**
 * Create a new context and run `code` inside it in one step, equivalent to calling
 * `createContext()` followed by `runInContext()`.
 * @param code - The JavaScript source to run.
 * @param opts - Options. `filename` is the script name used in stack traces (default
 * `'<anonymous>'`); `offset` shifts the reported line numbers (default `0`, also accepted as
 * `lineOffset` for Node.js compatibility).
 * @returns The completion value of `code`.
 */
export function runInNewContext(code: string, options?: RunOptions): unknown
