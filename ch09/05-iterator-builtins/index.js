// 9-4-3 네이티브 JavaScript 인터페이스로서의 Iterator와 Iterable

import { Matrix } from './matrix.js'

const matrix2x2 = new Matrix([
  ['11', '12'],
  ['21', '22']
])


for (const element of matrix2x2) {
  console.log(element)
}



const flattenedmatrix = [...matrix2x2]
console.log(flattenedmatrix)



const [oneOne, oneTwo, twoOne, towTwo] = matrix2x2
console.log(oneOne, oneTwo, twoOne, towTwo)