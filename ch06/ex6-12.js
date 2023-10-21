// 파이프 및 오류 처리

stream1
  .pipe(stream2)
  .on('error', () => {})


stream1
  .on('error', () => {})
  .pipe(stream2)
  .on('error', () => {})


function handleError (err) {
  console.error(err)
  stream1.destroy()
  stream2.destroy()
}

stream1
  .on('error', handleError)
  .pipe(stream2)
  .on('error', handleError)