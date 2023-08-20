// 2-4-3 module.exports 대 exports

exports.hello = () => {
    console.log('Hello')
}


// wrong !!
exports = () => {
    console.log('Hello')
}


loadModule.exports = () => {
    console.log('Hello')
}