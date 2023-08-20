// 2-4-7 순환 종속성

// 모듈 a.js:
exports.loaded = false
const b = require('./b')
module.exports = {
    b,
    loaded: true // 이전 export문을 오버라이드
}


// 모듈 b.js:
exports.loaded = false
const a = require('./a')
module.exports = {
    a,
    loaded: true
}


// main.js
const a = require('./a')
const b = require('./b')
console.log('a ->', JSON.stringify(a, null, 2))
console.log('b ->', JSON.stringify(b, null, 2))