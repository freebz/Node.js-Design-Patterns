// 6-4-2 스트림 분기

// 다중 체크썸 생성기 구현

import { createReadStream, createWriteStream } from 'fs'
import { createHash } from 'crypto'

const filename = process.argv[2]
const sha1Stream = createHash('sha1').setEncoding('hex')
const md5Stream = createHash('md5').setEncoding('hex')
const inputStream = createReadStream(filename)

inputStream
  .pipe(sha1Stream)
  .pipe(createWriteStream(`${filename}.sha1`))

inputStream
  .pipe(md5Stream)
  .pipe(createWriteStream(`${filename}.md5`))