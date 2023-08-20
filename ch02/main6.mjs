import * as loggerModule from './logger4.mjs'
console.log(loggerModule)


// import { log } from './logger4.mjs'
// log('Hello World')


// import { log, Logger } from './logger4.mjs'
// log('Hello World')
// const logger = new Logger('DEFAULT')
// logger.log('Hello world')


// const log = console.log
// SyntaxError: Identifier 'log' has already been declared


import { log as log2 } from './logger4.mjs'
const log = console.log

log('message from log')
log2('message from log2')