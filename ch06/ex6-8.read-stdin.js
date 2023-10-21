// 6-2-2 Readable 스트림

// 스트림에서 읽기

// non-flowing 모드

// read-stdiin.js

process.stdin
  .on('readable', () => {
    let chunk
    console.log('New data available')
    while ((chunk = process.stdin.read()) !== null) {
      console.log(
        `Chunk read (${chunk.length} bytes): "${chunk.toString()}"`
      )
    }
  })
  .on('end', () => console.log('End of stream'))