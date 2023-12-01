// 10-2 크로스 플랫폼 개발의 기초

// 10-2-1 런타임 코드 분기

import nunjucks from 'nunjucks'

const template = '<h1>Hello <i>{{ name }}</i></h1>'

export function sayHello (name) {
  if (typeof window !== 'undefined' && window.document) {
    // client-side code
    return nunjucks.renderString(template, { name })
  }
  
  // Node.js code
  return `Hello \u001b[1m${name}\u001b[0m`
}