// 2-6-6 비동기 임포트

// strings-el.js
export const HELLO = 'Γειά σου Κόσμε'

// strings-en.js
export const HELLO = 'Hello World'

// strings-es.js
export const HELLO = 'Hola mundo'

// strings-it.js
export const HELLO = 'Ciao mondo'

// strings-pl.js
export const HELLO = 'Witaj świecie'


// msin.js
const SUPPORTED_LANGUAGES = ['el', 'en', 'es', 'it', 'pl']
const selectedLanguage = process.argv[2]

if (!SUPPORTED_LANGUAGES.includes(selectedLanguage)) {
    console.error('The specified language is not supported')
    process.exit(1)
}

const translationModule = `./strings-${selectedLanguage}.js`
import(translationModule)
    .then((strings) => {
        console.log(strings.HELLO)
    })