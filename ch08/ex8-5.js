// 내장 프록시 객체

class StackCalculator {
  constructor () {
    this.stack = []
  }

  putValue (value) {
    this.stack.push(value)
  }

  getValue () {
    return this.stack.pop()
  }

  peekValue () {
    return this.stack[this.stack.length - 1]
  }

  clear () {
    this.stack = []
  }

  divide () {
    const divisor = this.getValue()
    const dividend = this.getValue()
    const result = dividend / divisor
    this.putValue(result)
    return result
  }

  multiply () {
    const multiplicand = this.getValue()
    const multiplier = this.getValue()
    const result = multiplier * multiplicand
    this.putValue(result)
    return result
  }
}



const safeCalculatorHandler = {
  get: (target, property) => {
    if (property === 'divide') {
      // 프록시 된 함수
      return function () {
        // 추가적인 검증 로직
        const divisor = target.peekValue()
        if (divisor === 0) {
          throw Error('Division by 0')
        }
        // Subject에 대한 유효한 위임자일 경우
        return target.divide()
      }
    }

    // 위임된 함수들과 속성들
    return target[property]
  }
}

const calculator = new StackCalculator()
const safeCalculator = new Proxy(
  calculator,
  safeCalculatorHandler
)

calculator.putValue(3)
calculator.putValue(2)
console.log(calculator.multiply())      // 3*2 = 6

safeCalculator.putValue(2)
console.log(safeCalculator.multiply())  // 6*2 = 12

calculator.putValue(0)
console.log(calculator.divide())        // 12/0 = Infinity

safeCalculator.clear()
safeCalculator.putValue(4)
safeCalculator.putValue(0)
console.log(safeCalculator.divide())    // 4/0 -> 에러