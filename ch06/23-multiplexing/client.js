// 6-4-4 멀티플렉싱 및 디멀티플렉싱

// 원격 로거(logger) 만들기

// 클라이언트 측 - 멀티플렉싱

import { fork } from 'child_process'
import { connect } from 'net'

function multiplexChannels (sources, destination) {
  let openChannels = sources.length
  for (let i = 0; i < sources.length; i++) {
    sources[i]
      .on('readable', function () {
        let chunk
        while ((chunk = this.read()) !== null) {
          const outBuff = Buffer.alloc(1 + 4 + chunk.length)
          outBuff.writeUInt8(i, 0)
          outBuff.writeUInt32BE(chunk.length, 1)
          chunk.copy(outBuff, 5)
          console.log(`Sending packet to channel: ${i}`)
          destination.write(outBuff)
        }
      })
      .on('end', () => {
        if (--openChannels === 0) {
          destination.end()
        }
      })
  }
}

const socket = connect(3000, () => {
  const child = fork(
    process.argv[2],
    process.argv.slice(3),
    { silent: true }
  )
  multiplexChannels([child.stdout, child.stderr], socket)
})