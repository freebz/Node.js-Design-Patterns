// 5-1-5 프라미스화(promisification)

function promisify(callbackBasedApi) {
    return function promisified(...args) {
        return new Promise((resolve, reject) => {
            const newArgs = [
                ...args,
                function (err, result) {
                    if (err) {
                        return reject(err)
                    }

                    resolve(result)
                }
            ]
            callbackBasedApi(...newArgs)
        })
    }
}


import { randomBytes } from 'crypto'

const randomBytesP = promisify(randomBytes)
randomBytesP(32)
    .then(buffer => {
        console.log(`Random bytes: ${buffer.toString()}`)
    })