const Realm = require('bare-realm')

const realms = new WeakMap()

// prettier-ignore
const createContext = exports.createContext = function createContext() {
  const realm = new Realm()

  const context = realm.evaluate('globalThis')

  realms.set(context, realm)

  return context
}

// prettier-ignore
const runInContext = exports.runInContext = function runInContext(code, context, opts = {}) {
  const {
    filename,
    offset = opts.lineOffset // For Node.js compatibility
  } = opts

  const realm = realms.get(context)

  return realm.evaluate(code, { filename, offset })
}

exports.runInNewContext = function runInNewContext(code, opts) {
  return runInContext(code, createContext(), opts)
}
