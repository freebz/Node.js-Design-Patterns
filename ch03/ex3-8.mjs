// 3-2-2 EventEmitter 생성 및 사용

import { EventEmitter } from 'events'
import { readFile } from 'fs'

function findRegex(files, regex) {
    const emitter = new EventEmitter()
    for (const file of files) {
        readFile(file, 'utf8', (err, content) => {
            if (err) {
                return emitter.emit('error', err)
            }

            emitter.emit('fileread', file)
            const match = content.match(regex)
            if (match) {
                match.forEach(elem => emitter.emit('found', file, elem))
            }
        })
    }
    return emitter
}


findRegex(
    ['fileA.txt', 'fileB.json'],
    /hello \w+/g
)
    .on('fileread', file => console.log(`${file} was read`))
    .on('found', (file, match) => console.log(`matched "${match}" in ${file}`))
    .on('error', err => console.error(`Error emitted ${err.message}`))