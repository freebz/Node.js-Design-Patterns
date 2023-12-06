// 11-1 비동기적으로 초기화되는 컴포넌트 다루기

// 11-1-1 비동기적으로 초기화된 컴포넌트의 문제

import { EventEmitter } from 'events'

class DB extends EventEmitter {
  connected = false

  connect () {
    // 연결 지연 시뮬레이션
    setTimeout(() => {
      this.connected = true
      this.emit('connected')
    }, 500)
  }

  async query (queryString) {
    if (!this.connected) {
      throw new Error('Not connected yet')
    }
    console.log(`Query excuted: ${queryString}`)
  }
}

export const db = new DB()