// 6-4-1 스트림 결합

import { createReadStream, createWriteStream } from 'fs'
import { Transform, pipeline } from 'stream'
import { strict as assert } from 'assert'

const streamA = createReadStream('package.json')
const streamB = new Transform({
  transform (chunk, enc, done) {
    this.push(chunk.toString().toUpperCase())
    done()
  }
})
const streamC = createWriteStream('package-uppercase.json')

const pipelineReturn = pipeline(
  streamA,
  streamB,
  streamC,
  () => {
    // 여기서 에러를 처리
  })
assert.strictEqual(streamC, pipelineReturn) // 유효함

const pipeReturn = streamA.pipe(streamB).pipe(streamC)
assert.strictEqual(streamC, pipeReturn) // 유효함