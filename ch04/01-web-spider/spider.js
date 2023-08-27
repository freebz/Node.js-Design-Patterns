// 4-1 비동기 프로그래밍의 어려움

// 4-1-1 간단한 웹 스파이더 만들기

import fs from 'fs'
import path from 'path'
import superagent from 'superagent'
import mkdirp from 'mkdirp'
import { urlToFilename } from './utils.js'

export function spider(url, cb) {
    const filename = urlToFilename(url)
    fs.access(filename, err => {
        if (err && err.code === 'ENOENT') {
            console.log(`Downloading ${url} into ${filename}`)
            superagent.get(url).end((err, res) => {
                if (err) {
                    cb(err)
                } else {
                    mkdirp(path.dirname(filename), err => {
                        if (err) {
                            cb(err)
                        } else {
                            fs.writeFile(filename, res.text, err => {
                                if (err) {
                                    cb(err)
                                } else {
                                    cb(null, filename, true)
                                }
                            })
                        }
                    })
                }
            })
        } else {
            cb(null, filename, false)
        }
    })
}