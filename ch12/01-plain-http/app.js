// 간단한 HTTP 서버 만들기

import { createServer } from 'http'

const { pid } = process
const server = createServer((req, res) => {
  // CPU 집약적인 작업
  let i = 1e7;
  while (i > 0) { i-- }

  console.log(`Handling request from ${pid}`)
  res.end(`Hello from ${pid}\n`)
})

server.listen(8080, () => console.log(`Started at ${pid}`))