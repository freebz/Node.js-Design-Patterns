// 2-5-3 클래스 내보내기

class Logger {
    constructor(name) {
        this.name = name
    }

    log(message) {
        console.log(`[${this.name}] ${message}`)
    }

    info(message) {
        this.log(`info: ${message}`)
    }

    verbose(message) {
        this.log(`verbose: ${message}`)
    }
}
module.exports = Logger


// main.js 파일
const Logger = require('./logger1')
const dbLogger = new Logger('DB')
dbLogger.info('This is an informational message')
const accessLogger = new Logger('ACCESS')
accessLogger.verbose('This is a verbose message')