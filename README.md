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
