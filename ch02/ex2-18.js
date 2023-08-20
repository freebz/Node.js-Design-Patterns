// 2-7-2 ESM에서의 참조 유실

console.log(exports) // ReferenceError: exports is not defined
console.log(module) // ReferenceError: module is not defiend
console.log(__filename) // ReferenceError: __filename is not defined
console.log(__dirname) // ReferenceError: __dirname is not defined


import { fileURLToPath } from "url"
import { dirname } from "path"
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


// this.js - ESM
console.log(this) // undefined

// this.cjs - CommonJS
console.log(this === exports) // true