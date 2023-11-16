// 객체 확장(augmentation)

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



function patchCalculator (calculator) {
  // 새로운 함수
  calculator.add = function () {
    const addend2 = calculator.getValue()
    const addend1 = calculator.getValue()
    const result = addend1 + addend2
    calculator.putValue(result)
    return result
  }

  // 수정된 함수
  const divideOrig = calculator.divide
  calculator.divide = () => {
    // 추가적인 검증 로직
    const divisor = calculator.peekValue()
    if (divisor === 0) {
      throw Error('Division by 0')
    }
    // Subject에 대한 유효한 위임자(delegates)일 경우
    return divideOrig.apply(calculator)
  }

  return calculator
}

const calculator = new StackCalculator()
const enhancedCalculator = patchCalculator(calculator)

enhancedCalculator.putValue(4)
enhancedCalculator.putValue(3)
console.log(enhancedCalculator.add())       // 4+3 = 7
enhancedCalculator.putValue(2)
console.log(enhancedCalculator.multiply())  // 7*2 = 14