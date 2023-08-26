// 3-1-3 Node.js 콜백 규칙

// 콜백은 맨 마지막에

readFile(filename, [options], callback)



// 오류는 맨 처음에

readFile('foo.txt', 'utf8', (err, data) => {
    if (err) {
        handleError(err)
    } else {
        processData(data)
    }
})