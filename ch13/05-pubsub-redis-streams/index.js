// 13-2-5 스트림을 통한 안정적인 메시징

// Redis Streams를 사용하여 채팅 애플리케이션 구현

import { createServer } from 'http'
import staticHandler from 'serve-handler'
import ws from 'ws'
import Redis from 'ioredis'

const redisClient = new Redis()
const redisClientXRead = new Redis()

// 정적인 파일들을 서비스함
const server = createServer((req, res) => {
  return staticHandler(req, res, { public: 'www' })
})

const wss = new ws.Server({ server })
wss.on('connection', async client => {
  console.log('Client connected')

  client.on('message', msg => {
    console.log(`Message: ${msg}`)
    redisClient.xadd('chat_stream', '*', 'message', msg)
  })

  // Load message history
  const logs = await redisClient.xrange(
    'chat_stream', '-', '+')
  for (const [, [, message]] of logs) {
    client.send(message)
  }
})

function broadcast (msg) {
  for (const client of wss.clients) {
    if (client.readyState === ws.OPEN) {
      client.send(msg)
    }
  }
}

let lastRecordId = '$'

async function processStreamMessages () {
  while (true) {
    const [[, records]] = await redisClientXRead.xread(
      'BLOCK', '0', 'STREAMS', 'chat_stream', lastRecordId)
    for (const [recordId, [, message]] of records) {
      console.log(`Message from stream: ${message}`)
      broadcast(message)
      lastRecordId = recordId
    }
  }
}

processStreamMessages().catch(err => console.error(err))

server.listen(process.argv[2] || 8080)