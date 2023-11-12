import { ImmutableBuffer } from './immutableBuffer.js'

const hello = 'Hello!'
const immutable = new ImmutableBuffer(hello.length,
  ({ write }) => {
    write(hello)
  })

console.log(String.fromCharCode(immutable.readInt8(0)))

// 다음과 가은 에러가 발생합니다.
// "TypeError: immutable.write is not a function"

// immutable.write('Hello?')