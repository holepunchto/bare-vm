const Realm = require('bare-realm')

const realms = new WeakMap()

function createContext() {
  const realm = new Realm()

  const context = realm.evaluate('globalThis')

  realms.set(context, realm)

  return context
}

exports.createContext = createContext

function runInContext(code, context, opts = {}) {
  const {
    filename,
    offset = opts.lineOffset // For Node.js compatibility
  } = opts

  const realm = realms.get(context)

  return realm.evaluate(code, { filename, offset })
}

exports.runInContext = runInContext

function runInNewContext(code, opts) {
  return runInContext(code, createContext(), opts)
}

exports.runInNewContext = runInNewContext
