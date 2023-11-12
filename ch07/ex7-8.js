// 7-4 싱글톤

// 'Database.js'
export class Database {
  constructor (dbName, connectionDetails) {
    // ...
  }
  // ...
}



// file 'dbInstance.js'
import { Database } from './Database.js'

export const dbInstance = new Database('my-app-db', {
    url: 'localhost:5432',
    username: 'user',
    password: 'password'
})



import { dbInstance } from './dbInstance.js'



// package.json
{
  "name": "mydb",
  "version": "2.0.0",
  "type": "module",
  "main": "dbInstance.js"
}



import { dbInstance } from 'mydb'

export function getDbInstance () {
  return dbInstance
}



// app/
// `-- node_modules
//     |-- package-a
//     |  `-- node_modules
//     |      `-- mydb
//     `-- package-b
//         `-- node_modules
//             `-- mydb



import { getDbInstance as getDbFromA } from 'package-a'
import { getDbInstance as getDbFromB } from 'package-b'

const isSame = getDbFromA() === getDbFromB()
console.log('Is the db instance in package-a the same ' +
  `as package-b ? ${isSame ? 'YES' : 'No'}`)



globalThis.dbInstance = new Database('my-app-db', {/*...*/})