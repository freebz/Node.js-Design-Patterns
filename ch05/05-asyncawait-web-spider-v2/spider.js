// 안티패턴 - 순차 실행을 위한 Array.forEach와 async/awist의 사용

import { promises as fsPromises } from 'fs'
import { dirname } from 'path'
import superagent from 'superagent'
import mkdirp from 'mkdirp'
import { urlToFilename, getPageLinks } from './utils.js'
import { promisify } from 'util'

const mkdirpPromises = promisify(mkdirp)

async function download(url, filename) {
    console.log(`Downloading ${url}`)
    const { text: content } = await superagent.get(url)
    await mkdirpPromises(dirname(filename))
    await fsPromises.writeFile(filename, content)
    console.log(`Downloaded and saved: ${url}`)
    return content
}

async function spiderLinks(currentUrl, content, nesting) {
    if (nesting === 0) {
        return
    }
    const links = getPageLinks(currentUrl, content)
    
    // 병렬로 실행됨
    links.forEach( async function iteration(link) {
        await spider(link, nesting - 1)
    } )
}

export async function spider(url, nesting) {
    const filename = urlToFilename(url)
    let content
    try {
        content = await fsPromises.readFile(filename, 'utf8')
    } catch (err) {
        if (err.code !== 'ENOENT') {
            throw err
        }

        content = await download(url, filename)
    }
    
    return spiderLinks(url, content, nesting)
}