import React from 'react'
import ReactDOM from 'react-dom'
import { Router,  browserHistory } from 'react-router'

import route from './route'

ReactDOM.render(
  <Router history={browserHistory} routes={route} />,
  document.getElementById('root')
)