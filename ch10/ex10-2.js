// 패킹(Packing)

((modulesMap) => {
  const require = (name) => {
    const module = { exports: {} }
    modulesMap[name](module, require)
    return module.exports
  }
  require('app.js')
})(
  {
    'app.js': (module, require) => {/* ... */},
    'calculator.js': (module, require) => {/* ... */},
    'display.js': (module, require) => {/* ... */},
    'parser.js': (module, require) => {/* ... */},
    'resolver.js': (module, require) => {/* ... */},
  }
)