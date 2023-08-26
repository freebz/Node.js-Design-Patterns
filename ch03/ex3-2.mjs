// 3-1-2 동기? 비동기?

// 예측할 수 없는 함수

import { readFile } from 'fs'

const cache = new Map()

function inconsistentRead(filename, cb) {
    if (cache.has(filename)) {
        // 동기적으로 호출됨
        cb(cache.get(filename))
    } else {
        // 비동기 함수
        readFile(filename, 'utf8', (err, data) => {
            cache.set(filename, data)
            cb(data)
        })
    }
}



// Zalgo를 풀어놓다

function createFileReader(filename) {
    const listeners = []
    inconsistentRead(filename, value => {
        listeners.forEach(listener => listener(value))
    })

    return {
        onDataReady: listener => listeners.push(listener)
    }
}


const reader1 = createFileReader('data.txt')
reader1.onDataReady(data => {
    console.log(`First call data: ${data}`)

    // 얼마 후 같은 파일을 다시 읽으려고 시도합니다.
    const reader2 = createFileReader('data.txt')
    reader2.onDataReady(data => {
        console.log(`Second call data: ${data}`)
    })
})