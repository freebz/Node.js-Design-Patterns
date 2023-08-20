// 2-6-3 export와 import 기본값 설정하기(Default exports and imports)

// logger.js
export default class Logger {
    constructor(name) {
        this.name = name
    }

    log(message) {
        console.log(`[${this.name}] ${message}`)
    }
}


// main.js

import MyLogger from './logger.js'
const logger = new MyLogger('info')
logger.log('Hello World')


// showDefault.js
import * as loggerModule from './logger.js'
console.log(loggerModule)


// 동작하지 않음 (defualt를 명시적으로 임포트 할 수 없음)
import { default } from './logger.js'
// SyntaxError: Unexpected reserved word