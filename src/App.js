import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './views/Home/Home'
import NotFound from './views/NotFound/NotFound'

export default () => {
	return (
		<Router>
			<div className="container">
				<Header theme="kisaragi" title="niceb5y web" />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</div>
		</Router>
	)
}