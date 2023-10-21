// 스트림을 사용한 Gzipping

// gzip-stream.js
import { createReadStream, createWriteStream } from 'fs'
import { createGzip } from 'zlib'

const filename = process.argv[2]

createReadStream(filename)
    .pipe(createGzip())
    .pipe(createWriteStream(`${filename}.gz`))
    .on('finish', () => console.log('File successfully compressed'))