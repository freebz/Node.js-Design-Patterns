// 8-2-2 LevelUP 데이터베이스 데코레이터

// LevelUP 및 LevelDB 소개

// LevelUP 플러그인 구현

export function levelSubscribe (db) {
  db.subscribe = (pattern, listener) => {
    db.on('put', (key, val) => {
      const match = Object.keys(pattern).every(
        k => (pattern[k] === val[k])
      )
      if (match) {
        listener(key, val)
      }
    })
  }

  return db
}