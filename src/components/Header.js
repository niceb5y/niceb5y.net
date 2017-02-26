import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <header>
        <nav className={ 'navbar navbar-light bg-' + this.props.theme + ' my-4 rounded' }>
          <a className="navbar-brand mr-auto" href="/">{ this.props.title }</a>
        </nav>
      </header>
    )
  }
}
