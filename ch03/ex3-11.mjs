// 3-2-6 동기 및 비동기 이벤트

import { EventEmitter } from 'events'
import { readFileSync } from 'fs'

class FileRegexSync extends EventEmitter {
    constructor(regex) {
        super()
        this.regex = regex
        this.files = []
    }

    addFile(file) {
        this.files.push(file)
        return this
    }

    find() {
        for (const file of this.files) {
            let content
            try {
                content = readFileSync(file, 'utf8')
            } catch (err) {
                this.emit('error', err)
            }
            
            this.emit('fileread', file)
            const match = content.match(this.regex)
            if (match) {
                match.forEach(elem => this.emit('found', file, elem))
            }
        }
        return this
    }
}


const findRegexSyncInstance = new FileRegexSync(/hello \w+/)
findRegexSyncInstance
    .addFile('fileA.txt')
    .addFile('fileB.json')
    // 리스너가 호출됨
    .on('found', (file, match) => console.log(`[Before] Matched "${match}"`))
    .find()
    .on('found', (file, match) => console.log(`[After] Matched "${match}"`))