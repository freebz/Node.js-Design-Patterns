// 3-2-8 콜백과 EventEmitter의 결합

// const eventEmitter = glob(pattern, [options], callback)

import glob from 'glob'

glob('data/*.txt',
    (err, files) => {
        if (err) {
            return console.error(err)
        }
        console.log(`All files found: ${JSON.stringify(files)}`)
    })
    .on('match', match => console.log(`Match found: ${match}`))