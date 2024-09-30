const test = require('brittle')
const vm = require('.')

test('createContext + runInContext', (t) => {
  globalThis.x = 84

  const context = vm.createContext()

  context.x = 42

  const result = vm.runInContext('globalThis.x', context)

  t.is(result, 42)
  t.is(globalThis.x, 84)
})

test('runInNewContext', (t) => {
  t.is(vm.runInNewContext('x = 42'), 42)
})
