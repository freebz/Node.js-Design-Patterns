// 2-6-7 모듈 적재 이해하기

// 읽기 전용 라이브 바인딩

// counter.js
export let count = 0
export function increment() {
    count++
}


// main.js
import { count, increment } from './counter.js'
console.log(count) // 0을 출력

increment()
console.log(count) // 1을 출력
count++ // TypeError: Assingment to constant variable!



// 순환 종속성 분석

// a.js
import * as bModule from './b.js'
export let loaded = false
export const b = bModule
loaded = true

// b.js
import * as aModule from './a.js'
export let loaded = false
export const a = aModule
loaded = true


// main.js
import * as a from './a.js'
import * as b from './b.js'
console.log('a ->', a)
console.log('b ->', b)