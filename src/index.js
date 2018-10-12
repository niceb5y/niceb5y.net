import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    const swUrl = `/sw.js`
    navigator.serviceWorker.register(swUrl).then(registration => {
      registration.onupdatefound = () => {
        registration.installing.onstatechange = () => {
          if (registration.installing && registration.installing.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              window.location.reload()
            }
          }
        }
      }
    })
  })
}
