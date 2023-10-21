// 6-2-8 파이프를 사용하여 스트림 연결하기

// replace.js
import { ReplaceStream } from './replace-stream.js'

process.stdin
  .pipe(new ReplaceStream(process.argv[2], process.argv[3]))
  .pipe(process.stdout)