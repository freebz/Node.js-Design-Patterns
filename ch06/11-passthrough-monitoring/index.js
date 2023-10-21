// 6-2-6 PassThrough 스트림

// 관찰 가능성(Observability)

import { PassThrough } from 'stream'

let bytesWritten = 0
const monitor = new PassThrough()
monitor.on('data', (chunk) => {
  bytesWritten += chunk.length
})
monitor.on('finish', () => {
  console.log(`${bytesWritten} bytes written`)
})

monitor.write('hello!')
monitor.end()