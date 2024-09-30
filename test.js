const test = require('brittle')
const vm = require('.')

test('createContext + runInContext', (t) => {
  t.plan(2)

  const x = undefined
  const code = 'x = 42'
  const context = vm.createContext()

  const result = vm.runInContext(code, context)

  t.is(result, 42)
  t.absent(x)

  t.teardown(() => context.destroy())
})

test('runInNewContext', (t) => {
  t.is(vm.runInNewContext('x = 42'), 42)

  // TODO: teardown
})
