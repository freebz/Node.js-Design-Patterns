// 13-2-1 간단한 실시간 채팅 애플리케이션 만들기

// 서버 측 구현
import { createServer } from 'http'
import staticHandler from 'serve-handler'
import ws from 'ws'

// 정적인 파일들을 서비스함
const server = createServer((req, res) => {
  return staticHandler(req, res, { public: 'www' })
})

const wss = new ws.Server({ server })
wss.on('connection', client => {
  console.log('Client connected')
  client.on('message', msg => {
    console.log(`Message: ${msg}`)
    broadcast(msg)
  })
})

function broadcast (msg) {
  for (const client of wss.clients) {
    if (client.readyState === ws.OPEN) {
      client.send(msg)
    }
  }
}

server.listen(process.argv[2] || 8080)