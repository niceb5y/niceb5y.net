import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Container from './components/Container'

import Home from './views/Home/Home'
import NotFound from './views/NotFound/NotFound'

export default (
	<Route path="/" component={Container}>
  	<IndexRoute component={Home} />
  	<Route path="*" component={NotFound} />
  </Route>
)