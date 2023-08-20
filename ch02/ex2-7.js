// 2-5-2 함수 내보내기

// logger.js 파일
module.exports = (message) => {
    console.log(`info: ${message}`)
}

module.exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
}


// main.js 파일
const logger = require('./logger1')
logger('This is an informational message')
logger.verbose('This is a verbose message')