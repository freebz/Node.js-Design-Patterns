// 13-2-2 Redis를 간단한 메시지 브로커로 사용하기

import { createServer } from 'http'
import staticHandler from 'serve-handler'
import ws from 'ws'
import Redis from 'ioredis'

const redisSub = new Redis()
const redisPub = new Redis()

// 정적인 파일들을 서비스함
const server = createServer((req, res) => {
  return staticHandler(req, res, { public: 'www' })
})

const wss = new ws.Server({ server })
wss.on('connection', client => {
  console.log('Client connected')
  client.on('message', msg => {
    console.log(`Message: ${msg}`)
    redisPub.publish('chat_messages', msg)
  })
})

redisSub.subscribe('chat_messages')
redisSub.on('message', (channel, msg) => {
  for (const client of wss.clients) {
    if (client.readyState === ws.OPEN) {
      client.send(msg)
    }
  }
})

server.listen(process.argv[2] || 8080)