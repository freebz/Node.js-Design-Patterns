// showDefault.js
import * as loggerModule from './logger5.mjs'
console.log(loggerModule)

// 동작하지 않음 (defualt를 명시적으로 임포트 할 수 없음)
import { default } from './logger5.mjs'
// SyntaxError: Unexpected reserved word