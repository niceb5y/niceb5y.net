import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swUrl = `/service-worker.js`
    navigator.serviceWorker.register(swUrl)
  })
}
