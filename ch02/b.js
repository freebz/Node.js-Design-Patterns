// 모듈 b.js:
exports.loaded = false
const a = require('./a')
module.exports = {
    a,
    loaded: true
}