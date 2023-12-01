// 런타임 코드 분기의 문제점

import { clientFunctionality } from 'clientModule'
import { serverFunctionality } from 'serverModule'
if (typeof window !== 'undefined' && window.document) {
  clientFunctionality()
} else {
  serverFunctionality()
}



moduleList.forEach(function(module) {
  import(module)
})



function getControllerModule (controller) {
  return import(`./controller/${controllerName}`)
}