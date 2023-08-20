// 2-6-1 Node.js에서 ESM의 사용

// - 확장자를 .mjs
// - package.json의 type필드에 module 추가


// 2-6-2 exports와 imports 지정하기(named exports and imports)

// logger.js

// `log`로서 함수를 익스포트
export function log(message) {
    console.log(message)
}

// `DEFAULT_LEVEL`로서 상수를 익스포트
export const DEFAULT_LEVEL = 'info'

// `LEVELS`로서 객체를 익스포트

export const LEVELS = {
    error: 0,
    debug: 1,
    warn: 2,
    data: 3,
    info: 4,
    verbose: 5
}

// `Logger`로서 클래스 익스포트
export class Logger {
    constructor(name) {
        this.name = name
    }

    log(message) {
        console.log(`[${this.name}] ${message}`)
    }
}


import * as loggerModule from './logger.js'
console.log(loggerModule)


import { log } from './logger.js'
log('Hello World')


import { log, Logger } from './logger.js'
log('Hello World')
const logger = new Logger('DEFAULT')
logger.log('Hello world')


import { log } from './logger.js'
const log = console.log


import { log as log2 } from './logger.js'
const log = console.log

log('message from log')
log2('message from log2')