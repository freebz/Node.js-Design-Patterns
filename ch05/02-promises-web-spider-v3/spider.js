// 5-1-7 병렬 실행

import { promises as fsPromises } from 'fs'
import { dirname } from 'path'
import superagent from 'superagent'
import mkdirp from 'mkdirp'
import { urlToFilename, getPageLinks } from './utils.js'
import { promisify } from 'util'

const mkdirpPromises = promisify(mkdirp)

function download(url, filename) {
    console.log(`Downloading ${url}`)
    let content
    return superagent.get(url)
        .then((res) => {
            content = res.text
            return mkdirpPromises(dirname(filename))
        })
        .then(() => fsPromises.writeFile(filename, content))
        .then(() => {
            console.log(`Downloaded and saved: ${url}`)
            return content
        })
}

function spiderLinks(currentUrl, content, nesting) {
    if (nesting === 0) {
        return Promise.resolve()
    }
    const links = getPageLinks(currentUrl, content)
    const promises = links.map(link => spider(link, nesting - 1))

    return Promise.all(promises)
}

export function spider(url, nesting) {
    const filename = urlToFilename(url)
    return fsPromises.readFile(filename, 'utf8')
        .catch((err) => {
            if (err.code !== 'ENOENT') {
                throw err
            }

            // 파일이 존재하지 않아, 다운로드를 시작
            return download(url, filename)
        })
        .then(content => spiderLinks(url, content, nesting))
}