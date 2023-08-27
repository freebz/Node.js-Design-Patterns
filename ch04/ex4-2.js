// 4-2 콜백 모범 사례와 제어 흐름 패턴

// 4-2-1 콜백 규칙

// 4-2-2 콜백 규칙 적용

if (err) {
    cb(err)
} else {
    // 에러가 없을 때 실행할 코드
}


if (err) {
    return cb(err)
}
// 에러가 없을 때 실행할 코드


function saveFile(filename, contents, cb) {
    mkdirp(path.dirname(filename), err => {
        if (err) {
            return cb(err)
        }
        fs.writeFile(filename, contents, cb)
    })
}


function download(url, filename, cb) {
    console.log(`Downloading ${url}`)
    superagent.get(url).end((err, res) => {
        if (err) {
            return cb(err)
        }
        saveFile(filename, res.text, err => {
            if (err) {
                return cb(err)
            }
            console.log(`Downloaded and saved: ${url}`)
            cb(null, res.text)
        })
    })
}


export function spider(url, cb) {
    const filename = urlToFilename(url)
    fs.access(filename, err => {
        if (!err || err.code !== 'ENOENT') {
            return cb(null, filename, false)
        }
        download(url, filename, err => {
            if (err) {
                return cb(err)
            }
            cb(null, filename, true)
        })
    })
}