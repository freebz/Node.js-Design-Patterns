// 2-5-4 인스턴스 내보내기

// logger.js 파일
class Logger {
    constructor(name) {
        this.count = 0
        this.name = name
    }
    log(message) {
        this.count++
        console.log('[' + this.name + '] ' + message)
    }
}
module.exports = new Logger('DEFAULT')


// main.js
const logger = require('./logger')
logger.log('This is an informational message')


const customLogger = new logger.constructor('CUSTOM')
customLogger.log('This. is an informational message')