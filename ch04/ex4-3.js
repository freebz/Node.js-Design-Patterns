// 4-2-3 순차 실행

// 알려진 일련의 작업을 순차적으로 실행하기

function asyncOperation (cb) {
    process.nextTick(cb)
}

function task1(cb) {
    asyncOperation(() => {
        task2(cb)
    })
}

function task2(cb) {
    asyncOperation(() => {
        task3(cb)
    })
}

function task3(cb) {
    asyncOperation(() => {
        cb() // 결과적으로 콜백을 실행
    })
}

task1(() => {
    // task1, task2, task3 가 완료되었을 때 실행된다.
    console.log('tasks 1, 2, and 3 executed')
})



// 패턴

function iterate(index) {
    if (index === tasks.length) {
        return finish()
    }
    const task = tasks[index]
    task(() => iterate(index + 1))
}

function finish() {
    // 반복 완료
}

iterate(0)


iterateSeries(collection, iteratorCallback, finalCallback)