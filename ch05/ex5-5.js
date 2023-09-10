// 5-2-2 Async/await에서의 에러 처리

// 통일된 try...catch 사용

function delayError(milliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`Error after ${milliseconds}ms`))
        }, milliseconds)
    })
}


async function playingWithErrors(throwSyncError) {
    try {
        if (throwSyncError) {
            throw new Error('This is a synchronous error')
        }
        await delayError(1000)
    } catch (err) {
        console.error(`We have an error: ${err.message}`)
    } finally {
        console.log('Done')
    }
}


playingWithErrors(true)
// We have an error: This is a synchronous error
// Done


playingWithErrors(false)
// We have an error: Error after 1000ms
// Done



// "return" vs "return await" 함정

async function errorNotCaught() {
    try {
        return delayError(1000)
    } catch (err) {
        console.error('Error caught by the async function: ' +
            err.message)
    }
}

errorNotCaught()
    .catch(err => console.error('Error caught by the caller: ' +
        err.message))
// Error caught by the caller: Error after 1000ms


async function errorCaught() {
    try {
        return await delayError(1000)
    } catch (err) {
        console.error('Error caught by the async function: ' +
            err.message)
    }
}

errorCaught()
    .catch(err => console.error('Error caught by the caller: ' +
        err.message))
// Error caught by the async function: Error after 1000ms