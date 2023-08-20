// 2-7-3 상호 운용

import packageMain from 'commonjs-package' // 작동
import { method } from 'commonjs-package'  // 에러


import data from './data.json'
// TypeError(Unknown file extension: .json)


import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const data = require('./data.json')
console.log(data)