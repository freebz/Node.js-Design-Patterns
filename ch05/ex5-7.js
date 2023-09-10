// 5-3 무한 재귀 프라미스 해결(resolution) 체인의 문제

function delay(milliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date())
        }, milliseconds)
    })
}

function leakingLoop() {
    return delay(1)
        .then(() => {
            console.log(`Tick ${Date.now()}`)
            return leakingLoop()
        })
}


for (let i = 0 ; i < 1e6; i++) {
    leakingLoop()
}


function nonLeakingLoop() {
    delay(1)
        .then(() => {
            console.log(`Tick ${Date.now()}`)
            nonLeakingLoop()
        })
}


function nonLeakingLoopWithErrors() {
    return new Promise((resolve, reject) => {
        (function internalLoop() {
            delay(1)
                .then(() => {
                    console.log(`Tick ${Date.now()}`)
                    internalLoop()
                })
                .catch(err => {
                    reject(err)
                })
        })()
    })
}


async function nonLeakingLoopAsync() {
    while (true) {
        await delay(1)
        console.log(`Tick ${Date.now()}`)
    }
}


async function leakingLoopAsync() {
    await delay(1)
    console.log(`Tick ${Date.now()}`)
    return leakingLoopAsync()
}