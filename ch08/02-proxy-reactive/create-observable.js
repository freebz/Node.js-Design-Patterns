// 8-1-3 프록시를 사용한 변경 옵저버

export function createObservable (target, observer) {
  const observable = new Proxy(target, {
    set (obj, prop, value) {
      if (value !== obj[prop]) {
        const prev = obj[prop]
        obj[prop] = value
        observer({ prop, prev, curr: value })
      }
      return true
    }
  })

  return observable
}