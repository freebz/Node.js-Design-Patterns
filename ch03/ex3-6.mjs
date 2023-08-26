// 오류 전파

import { readFile } from 'fs'

function readJSON(filename, callback) {
    readFile(filename, 'utf8', (err, data) => {
        let parsed
        if (err) {
            // 에러를 전파하고 현재의 함수에서 빠져 나옴
            return callback(err)
        }

        try {
            // 파일 내용 파싱
            parsed = JSON.parse(data)
        } catch (err) {
            // 파싱 에러 캐치
            return callback(err)
        }
        // 에러없음, 데이터 전파
        callback(null, parsed)
    })
}



// 캐치되지 않는 예외

function readJSONThrows(filename, callback) {
    readFile(filename, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data))
    })
}


readJSONThrows('invalid_json', (err) => console.error(err))


// anti-pattern: 예외를 잡을 수 없음

try {
    readJSONThrows('invalid_json', (err) => console.error(err))
} catch (err) {
    console.log('This will NOT catch the JSON parsing exception')
}


process.on('uncaughtException', (err) => {
    console.error(`This will catch at last the JSON parsing exception: ${err.message}`)
    // 종료 코드 1(에러)과 함께 애플리케이션 종료
    // 아래 코드가 없으면 애플리케이션은 계속됨
    process.exit(1)
})