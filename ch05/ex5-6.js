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