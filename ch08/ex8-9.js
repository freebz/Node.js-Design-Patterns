// Proxy 객체를 이용한 데코레이팅

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



const enhancedCalculatorhandler = {
  get (target, property) {
    if (property === 'add') {
      // 새로운 함수
      return function add () {
        const addend2 = target.getValue()
        const addend1 = target.getValue()
        const result = addend1 + addend2
        target.putValue(result)
        return result
      }
    } else if (property === 'divide') {
      // 수정된 함수
      return function () {
        // 추가적인 검증 로직
        const divisor = target.peekValue()
        if (divisor === 0) {
          throw Error('Divison by 0')
        }
        // Subject에 대한 유요한 위임자(delegates) 일 경우
        return target.divide()
      }
    }

    // 위임된 함수들과 속성들
    return target[property]
  }
}

const calculator = new StackCalculator()
const enhancedCalculator = new Proxy(
  calculator,
  enhancedCalculatorhandler
)

enhancedCalculator.putValue(4)
enhancedCalculator.putValue(3)
console.log(enhancedCalculator.add())       // 4+3 = 7
enhancedCalculator.putValue(2)
console.log(enhancedCalculator.multiply())  // 7*2 = 14