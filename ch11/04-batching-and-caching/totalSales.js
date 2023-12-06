// 11-2-3 캐싱 혹은 일괄 처리가 없는 API 서버

import level from 'level'
import sublevel from 'subleveldown'

const db = level('example-db')
const salesDb = sublevel(db, 'sales', { valueEncoding: 'json' })

export async function totalSales (product) {
  const now = Date.now()
  let sum = 0
  for await (const transaction of salesDb.createValueStream()) {
    if (!product || transaction.product === product) {
      sum += transaction.amount
    }
  }

  console.log(`totalSales() took: ${Date.now() - now}ms`)

  return sum
}