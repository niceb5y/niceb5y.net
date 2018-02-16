import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'

export default class extends Component {
  render() {
    return (
      <div className="container">
        <Header theme="kisaragi" title="niceb5y web" />
          {React.cloneElement(this.props.children)}
        <Footer />
      </div>
    )
  }
}
