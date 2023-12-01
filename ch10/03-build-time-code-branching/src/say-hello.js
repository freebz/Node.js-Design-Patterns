// 10-2-2 빌드 시 코드 분기

import nunjucks from 'nunjucks'
export function sayHello (name) {
  if (typeof __BROWSER__ !== 'undefined') {
    // 클라이언트 측 코드
    const template = '<h1>Hello <i>{{ name }}</i></h1>'
    return nunjucks.renderString(template, { name })
  }
  // Node.js 코드
  return `Hello \u001b[1m${name}\u001b[0m`
}