# bare-vm

Isolated V8 contexts for Bare. Based on [bare-realm](https://github.com/holepunchto/bare-realm).

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
