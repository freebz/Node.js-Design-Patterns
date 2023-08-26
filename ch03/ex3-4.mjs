// 지연 실행(deferred execution)으로 비동시성을 보장

import { readFile } from 'fs'

const cache = new Map()

function consistentReadAsync(filename, callback) {
    if (cache.has(filename)) {
        // 지연된 콜백 호출
        process.nextTick(() => callback(cache.get(filename)))
    } else {
        // 비동기 함수
        readFile(finename, 'utf8', (err, data) => {
            cache.set(filename, data)
            callback(data)
        })
    }
}