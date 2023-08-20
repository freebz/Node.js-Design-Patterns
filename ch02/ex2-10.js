// 2-5-5 다른 모듈 또는 전역 범위(global scope) 수정

// patcher.js 파일

// ./logger 는 다른 모듈
require('./logger').customMessage = function () {
    console.log('This is a new functionality')
}


// main.js 파일

require('./patcher')
const logger = require('./logger')
logger.customMessage()