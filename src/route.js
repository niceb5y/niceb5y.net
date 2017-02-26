import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Container from './components/Container'

import Home from './views/Home/Home'
import UbuntuJe from './views/Mirror/UbuntuJe'
import NotFound from './views/NotFound/NotFound'

export default (
	<Route path="/" component={Container}>
  	<IndexRoute component={Home} />
  	<Route path="/mirror/ubuntu-je" component={UbuntuJe} />
  	<Route path="*" component={NotFound} />
  </Route>
)