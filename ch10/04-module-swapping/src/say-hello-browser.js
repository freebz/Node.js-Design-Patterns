// 10-2-3 모듈 스와핑

// src/say-hello-browser.js
import nunjucks from 'nunjucks'

const template = '<h1>Hello <i>{{ name }}</i></h1>'

export function sayHello (name) {
  return nunjucks.renderString(template, { name })
}