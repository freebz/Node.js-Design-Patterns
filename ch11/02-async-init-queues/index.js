// 로컬 초기화(Local initialization) 확인

import { once } from 'events'
import { db } from './db.js'

db.connect()

async function updateLastAccess() {
  await db.query(`INSERT (${Date.now()}) INTO "LastAccesses"`)
}

updateLastAccess()
setTimeout(() => {
  updateLastAccess()
}, 600)