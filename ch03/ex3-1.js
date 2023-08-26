// 3-1 콜백 패턴

// 3-1-1 연속 전달 방식

// 동기식 연속 전달 방식

function add(a, b) {
    return a + b
}


function addCps(a, b, callback) {
    callback(a + b)
}


console.log('before')
addCps(1, 2, result => console.log(`Result: ${result}`))
console.log('after')



// 비동기 연속 전달 방식

function additionAsync(a, b, callback) {
    setTimeout(() => callback(a + b), 100)
}


console.log('before')
additionAsync(1, 2, result => console.log(`Result: ${result}`))
console.log('after')



// 비 연속 전달(Non-CPS) 콜백

const result = [1, 5, 7].map(element => element - 1)
console.log(result) // [0, 4, 6]