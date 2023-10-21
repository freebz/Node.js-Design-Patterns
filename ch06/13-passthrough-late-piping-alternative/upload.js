import axios from 'axios'
import { PassThrough } from 'stream'

function upload (filename, contentStream) {
  return axios.post(
    'http://localhost:3000',
    contentStream,
    {
      headers: {
        'Content-Type': 'application/octet-stream',
        'X-Filename': filename
      }
    }
  )
}

export function createUploadStream (filename) {
  // upload 데이터를 사용할 수 있도록 writable 스트림을 반환
  const connnector = new PassThrough()
  upload(filename, connector)
  return connnector
}