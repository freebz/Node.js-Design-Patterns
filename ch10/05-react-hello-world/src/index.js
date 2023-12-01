// 10-3 React 개요

// 10-3-1 Hello React

import react from 'react'
import ReactDOM from 'react-dom'

const h = react.createElement

class Hello extends react.Component {
  render () {
    return h('h1', null, [
      'Hello ',
      this.props.name || 'World'
    ])
  }
}

ReactDOM.render(
  h(Hello, { name: 'React' }),
  document.getElementsByTagName('body')[0]
)