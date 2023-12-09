// 13-2-3 ZeroMQ로 피어 투 피어 Pub/Sub

// ZeroMQ PUB/SUB 소켓 사용

import { createServer } from 'http'
import staticHandler from 'serve-handler'
import ws from 'ws'
import yargs from 'yargs'
import zmq from 'zeromq'

// 정적인 파일들을 서비스함
const server = createServer((req, res) => {
  return staticHandler(req, res, { public: 'www' })
})

let pubSocket
async function initializeSockets () {
  pubSocket = new zmq.Publisher()
  await pubSocket.bind(`tcp://127.0.0.1:${yargs.argv.pub}`)

  const subSocket = new zmq.Subscriber()
  const subPorts = [].concat(yargs.argv.sub)
  for (const port of subPorts) {
    console.log(`Subscribing to ${port}`)
    subSocket.connect(`tcp://127.0.0.1:${port}`)
  }
  subSocket.subscribe('chat')

  for await (const [msg] of subSocket) {
    console.log(`message from another server: ${msg}`)
    broadcast(msg.toString().split(' ')[1])
  }
}

initializeSockets()

const wss = new ws.Server({ server })
wss.on('connection', client => {
  console.log('Client connected')
  client.on('message', msg => {
    console.log(`Message: ${msg}`)
    broadcast(msg)
    pubSocket.send(`chat ${msg}`)
  })
})

function broadcast (msg) {
  for (const client of wss.clients) {
    if (client.readyState === ws.OPEN) {
      client.send(msg)
    }
  }
}

server.listen(yargs.argv.http || 8080)