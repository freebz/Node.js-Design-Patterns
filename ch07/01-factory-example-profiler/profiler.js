// 7-1-3 간단한 코드 프로파일러 만들기

class Profiler {
  constructor (label) {
    this.label = label
    this.lastTime = null
  }

  start () {
    this.lastTime = process.hrtime()
  }

  end () {
    const diff = process.hrtime(this.lastTime)
    console.log(`Timer "${this.label}" took ${diff[0]} seconds ` +
      `and ${diff[1]} nanoseconds.`)
  }
}

const noopProfiler = {
  start () {},
  end () {}
}

export function createProfiler (label) {
  if (process.env.NODE_ENV === 'production') {
    return noopProfiler
  }

  return new Profiler(label)
}