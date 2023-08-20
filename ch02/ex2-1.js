// 2-3 모듈 시스템과 패턴

// 2-3-1 노출식 모듈 패턴

const myModule = (() => {
    const privateFoo = () => { }
    const privateBar = []

    const exported = {
        publicFoo: () => { },
        publicBar: () => { }
    }

    return exported
})() // 여기서 괄호가 파싱되면, 함수는 호출됩니다.

console.log(myModule)
console.log(myModule.privateFoo, myModule.privateBar)