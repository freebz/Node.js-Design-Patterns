// 10-2-3 모듈 스와핑

import chalk from 'chalk'

export function sayHello (name) {
  return `Hello ${chalk.green(name)}`
}