// 2-6-4 혼합된 export(mixed exports)

// logger.js
export default function log(message) {
    console.log(message)
}

export function info(message) {
    log(`info: ${message}`)
}


import mylog, { info } from './logger.js'