// 4-2-4 병렬 실행

// 피턴

const tasks = [ /* ... */ ]

let completed = 0
tasks.forEach(task => {
    task(() => {
        if (++completed === tasks.length) {
            finish()
        }
    })
})

function finish() {
    // 모든 작업이 완료됨
}



// 동시 작업과 경쟁 상태 수정

export function spider(url, nesting, cb) {
    const filename = urlToFilename(url)
    fs.readFile(filename, 'utf8', (err, fileContent) => {
        if (err) {
            if (err.code !== 'ENOENT') {
                return cb(err)
            }
            return download(url, filename, (err, requestContent) => {
                // ...
            })
        }
    })
}


const spidering = new Set()
function spider(url, nesting, cb) {
    if (spidering.has(url)) {
        return process.nextTick(cb)
    }
    spidering.add(url)

// ...
}