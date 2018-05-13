import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
  window.location.hostname === "[::1]" ||
  window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
)

export default function register() {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    const publicUrl = new URL("/", window.location)
    if (publicUrl.origin !== window.location.origin) return
    window.addEventListener("load", () => {
      const swUrl = `/service-worker.js`
      if (isLocalhost) {
        checkValidServiceWorker(swUrl)
      } else {
        navigator.serviceWorker.register(swUrl)
      }
    })
  }
}

function checkValidServiceWorker(swUrl) {
  fetch(swUrl)
  .then(response => {
    if (
      response.status === 404 ||
      response.headers.get("content-type").indexOf("javascript") === -1
    ) {
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload()
        })
      })
    } else {
      navigator.serviceWorker.register(swUrl)
    }
  })
}
