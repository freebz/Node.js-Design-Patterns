// 7-2-2 실전에서

superagent
  .post('https://example.com/api/person')
  .send({ name: 'John Doe', role: 'user' })
  .set('accept', 'json')
  .then((response) => {
    // 응답을 처리하는 부분
  })