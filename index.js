const Realm = require('bare-realm')

const createContext = exports.createContext = function createContext () {
  return new Realm()
}

const runInContext = exports.runInContext = function runInContext (code, context, opts = {}) {
  if (opts.lineOffset) opts.offset = opts.lineOffset // Node.js compatibility

  return context.evaluate(code, opts)
}

exports.runInNewContext = function runInNewContext (code, opts) {
  return runInContext(code, createContext(), opts)
}
