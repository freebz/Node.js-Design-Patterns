// logger.js 파일
module.exports = (message) => {
    console.log(`info: ${message}`)
}

module.exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
}