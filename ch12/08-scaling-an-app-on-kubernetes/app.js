// Docker로 컨테이너 생성 및 실행

import { createServer } from 'http'
import { hostname } from 'os'

const version = 1
const server = createServer((req, res) => {
  let i = 1e7; while (i > 0) { i-- }
  res.end(`Hello from ${hostname()} (v${version})`)
})
server.listen(8080)