// 9-6 명령

// 9-6-1 작업(Task) 패턴

function createTask(target, ...args) {
  return () => {
    target(...args)
  }
}


const task = target.bind(null, ...args)