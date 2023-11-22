// 9-4-7 비동기 반복자 및 Node.js 스트림

import split from 'split2'

async function main () {
  const stream = process.stdin.pipe(split())
  for await (const line of stream) {
    console.log(`You wrote: ${line}`)
  }
}

main()