import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'

export default class extends Component {
  render() {
    const path = this.props.location.pathname
    const color = path.startsWith('/mirror')?'takasuki':'kisaragi'
    const title = path.startsWith('/mirror')?'niceb5y mirror':'niceb5y web'

    return (
      <div className="container">
        <Header theme={ color } title={ title } />
          {React.cloneElement(this.props.children)}
        <Footer />
      </div>
    )
  }
}
