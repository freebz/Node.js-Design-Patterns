// 2-4-4 require 함수는 동기적이다.

// wrong !!
setTimeout(() => {
    loadModule.exports = function () {...}
}, 100)
