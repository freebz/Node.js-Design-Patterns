// main.js
import { count, increment } from './counter.mjs'
console.log(count) // 0을 출력

increment()
console.log(count) // 1을 출력
count++ // TypeError: Assingment to constant variable!