// 10-4 범용 JavaScript 앱 만들기

// 10-4-1 프론트엔드 전용 앱

import react from 'react'
import ReactDOM from 'react-dom'
import htm from 'htm'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App.js'

const html = htm.bind(react.createElement)

ReactDOM.render(
  html`<${BrowserRouter}><${App}/></>`,
  document.getElementsByTagName('body')[0]
)