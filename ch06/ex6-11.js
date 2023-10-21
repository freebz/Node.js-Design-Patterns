// 6-2-7 지연(Lazy) 스트림

import lazystream from 'lazystream'
const lazyURandom = new lazystream.Readable(function (options) {
  return fstat.createReadStream('/dev/urandom')
})