// Transform 스트림을 사용한 데이터 필터링 및 집계

import { createReadStream } from 'fs'
import parse from 'csv-parse'
import { FilterByCountry } from './filter-by-country.js'
import { SumProfit } from './sum-profit.js'

const csvParser = parse({ columns: true })

createReadStream('data.csv')
  .pipe(csvParser)
  .pipe(new FilterByCountry('Italy'))
  .pipe(new SumProfit())
  .pipe(process.stdout)