// 13-2-4 큐를 통한 안정적인 메시지 전달

// 채팅 애플리케이션을 AMQP와 통합하기

import { createServer } from 'http'
import staticHandler from 'serve-handler'
import ws from 'ws'
import amqp from 'amqplib'
import JSONStream from 'JSONStream'
import superagent from 'superagent'

const httpPort = process.argv[2] || 8080

async function main () {
  const connection = await amqp.connect('amqp://localhost')
  const channel = await connection.createChannel()
  await channel.assertExchange('chat', 'fanout')
  const { queue } = await channel.assertQueue(
    `chat_srv_${httpPort}`,
    { exclusive: true }
  )
  await channel.bindQueue(queue, 'chat')
  channel.consume(queue, msg => {
    msg = msg.content.toString()
    console.log(`From queue: ${msg}`)
    broadcast(msg)
  }, { noAck: true })

  // 정적인 파일들을 서비스함
  const server = createServer((req, res) => {
    return staticHandler(req, res, { public: 'www' })
  })

  const wss = new ws.Server({ server })
  wss.on('connection', client => {
    console.log('Client connected')

    client.on('message', msg => {
      console.log(`Message: ${msg}`)
      channel.publish('chat', '', Buffer.from(msg))
    })

    // 이력 조회 서비스
    superagent
      .get('http://localhost:8090')
      .on('error', err => console.error(err))
      .pipe(JSONStream.parse('*'))
      .on('data', msg => client.send(msg))
  })

  function broadcast (msg) {
    for (const client of wss.clients) {
      if (client.readyState === ws.OPEN) {
        client.send(msg)
      }
    }
  }

  server.listen(httpPort)
}

main().catch(err => console.error(err))