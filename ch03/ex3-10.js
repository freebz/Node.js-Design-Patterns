// 3-2-5 EventEmitter와 메모리 누수

const thisTakesMemory = 'A big string....'
const listener = () => {
    console.log(thisTakesMemory)
}
emitter.on('an_event', listener)


emitter.removeListener('an_event', listener)