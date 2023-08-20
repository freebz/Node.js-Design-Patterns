// 2-4-2 모듈 정의

// 또 다른 종속성 로드
const dependency = require('./anotherModule')

// private 함수
function log() {
    console.log(`Well done ${dependency.username}`)
}

// 공개적으로 사용되기 위해 익스포트되는 API
module.exports.run = () => {
    log()
}