# bare-vm

Isolated JavaScript contexts for Bare.

```
npm i bare-vm
```

## Usage

```js
const vm = require('bare-vm')

const context = vm.createContext()
vm.runInContext('x = 40; x += 2', context) // 42

vm.runInNewContext('x = 40; x += 2') // 42
```

## License

Apache-2.0

<!-- bare-refgen:api start -->

## API

### Functions

#### `createContext(): Context`

Create and return a new isolated global context that code can be run in with `runInContext()`.

**Returns** `Context` — A new isolated global context that code can be run in with `runInContext()`.

#### `runInContext(code: string, context: Context, options?: RunOptions): unknown`

Run `code` inside `context`, a context previously created with `createContext()`, and return the result.

**Parameters**

| Parameter  | Type         | Default | Description                                          |
| ---------- | ------------ | ------- | ---------------------------------------------------- |
| `code`     | `string`     | —       | The JavaScript source to run.                        |
| `context`  | `Context`    | —       | A context previously created with `createContext()`. |
| `options?` | `RunOptions` | —       | —                                                    |

**Returns** `unknown` — The completion value of `code`.

#### `runInNewContext(code: string, options?: RunOptions): unknown`

Create a new context and run `code` inside it in one step, equivalent to calling `createContext()` followed by `runInContext()`.

**Parameters**

| Parameter  | Type         | Default | Description                   |
| ---------- | ------------ | ------- | ----------------------------- |
| `code`     | `string`     | —       | The JavaScript source to run. |
| `options?` | `RunOptions` | —       | —                             |

**Returns** `unknown` — The completion value of `code`.

### Types

#### `Context`

```ts
interface Context {}
```

#### `RunOptions`

```ts
interface RunOptions {
  filename?: string
  offset?: number
}
```

<!-- bare-refgen:api end -->
