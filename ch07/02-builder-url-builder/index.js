import { Url } from './url.js'

const _url = new Url('https', null, null, 'example.com', null, null, null,
  null)

console.log(_url.toString())



import { UrlBuilder } from './urlBuilder.js'

const url = new UrlBuilder()
  .setProtocol('https')
  .setAuthentication('user', 'pass')
  .setHostname('example.com')
  .build()

console.log(url.toString())