// patcher.js 파일

// ./logger 는 다른 모듈
require('./logger3').customMessage = function () {
    console.log('This is a new functionality')
}