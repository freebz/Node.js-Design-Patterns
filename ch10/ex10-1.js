// 10-1 브라우저와 코드 공유

// 10-1-1 크로스 플랫폼 컨텍스트의 JavaScript 모듈

// 종속성 해결

// app.js
import { calculator } from './calculator.js'
import { display } from './display.js'
display(calculator('2 + 2 / 4'))

// display.js
export function display () {
  // ... 
}

// calculator.js
import { parser } from './parser.js'
import { resolver } from './resolver.js'
export function calculator (expr) {
  return resolver(parser(expr))
}

// parser.js
export function parser (expr) {
  // ...
}

// resolver.js
export function resolver (tokens) {
  // ...
}



{
  'app.js': (module, require) => {/* ... */},
  'calculator.js': (module, require) => {/* ... */},
  'display.js': (module, require) => {/* ... */},
  'parser.js': (module, require) => {/* ... */},
  'resolver.js': (module, require) => {/* ... */}
}



(module, require) => {
  const { parser } = require('parser.js')
  const { resolver } = require('resolver.js')
  module.exports.calculator = function (expr) {
    return resolver(parser(expr))
  }
}