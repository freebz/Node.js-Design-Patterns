// 5-1 프라미스(Promise)

// 5-1-1 Promise란 무엇인가?

promise.then(onFulfilled, onRejected)


asyncOperation(arg, (err, result) => {
    if (err) {
        // 에러 처리
    }
    // 결과 처리
})


asyncOperationPromise(arg)
    .then(result => {
        // 결과 처리
    }, err => {
        // 에러 처리
    })


asyncOperationPromise(arg)
    .then(result1 => {
        // 다른 프라미스를 반환
        return asyncOperationPromise(arg2)
    })
    .then(result2 => {
        // 값을 반환
        return 'done'
    })
    .then(undefined, err => {
        // 체인내의 에러를 여기서 catch 함
    })