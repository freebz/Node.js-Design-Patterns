// 9-1 전략 패턴

// 9-1-1 여러 형식을 지원하는 환경설정 객체

import { promises as fs } from 'fs'
import objectPath from 'object-path'

export class Config {
  constructor (formatStrategy) {
    this.data = {}
    this.formatStrategy = formatStrategy
  }

  get (configPath) {
    return objectPath.get(this.data, configPath)
  }

  set (configPath, value) {
    return objectPath.set(this.data, configPath, value)
  }

  async load (filePath) {
    console.log(`Deserializing from ${filePath}`)
    this.data = this.formatStrategy.deserialize(
      await fs.readFile(filePath, 'utf-8')
    )
  }

  async save (filePath) {
    console.log(`Serializing to ${filePath}`)
    await fs.writeFile(filePath,
      this.formatStrategy.serialize(this.data))
  }
}