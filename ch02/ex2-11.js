// 2-6 ESM: ECMAScript 모듈

// ES 모듈시 적합히지 않음 (ES 모듈은 static import)
if (condition) {
    import module1 from 'module1'
} else {
    import module2 form 'module2'
}


// CommonJS에서는 문제 없음 (CommonJS 모듈은 dynamic import)
let module = null
if (condition) {
    module = require('module1')
} else {
    module = require('module2')
}