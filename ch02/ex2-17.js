// 2-6-8 모듈의 수정

// mock-read-file.js
import fs from 'fs'

const originalReadFile = fs.readFile
let mockedResponse = null

function mockedReadFile(path, cb) {
    setImmediate(() => {
        cb(null, mockedResponse)
    })
}

export function mockEnable(respondWith) {
    mockedResponse = respondWith
    fs.readFile = mockedReadFile
}

export function mockDisalbe() {
    fs.readFile = originalReadFile
}


// main.js
import fs from 'fs'
import { mockEnable, mockDisalbe } from './mock-read-file.js'

mockEnable(Buffer.from('Hello World'))

fs.readFile('fake-path', (err, data) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(data.toString()) // 'Hello World'
})

mockDisalbe()


import fs, { readFileSync } from 'fs'
import { syncBuiltinESMExports  } from 'module'

fs.readFileSync = () => Buffer.from('Hello, ESM')
syncBuiltinESMExports()

console.log(fs.readFileSync === readFileSync) // true