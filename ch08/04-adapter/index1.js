import fs from 'fs';

fs.writeFile('file.txt', 'Hello!', () => {
  fs.readFile('file.txt', { encoding: 'utf8' }, (err, res) => {
    if (err) {
      return console.error(err)
    }
    console.log(res)
  })
})

// 누락된 파일 읽기를 시도
fs.readFile('missing.txt', { encoding: 'utf8' }, (err, res) => {
  console.error(err)
})