import React from 'react'

export default ({title}) => (
  <header>
    <nav className={'navbar navbar-light my-4 rounded'}>
      <a className="navbar-brand mr-auto" href="/">{title}</a>
    </nav>
  </header>
)
