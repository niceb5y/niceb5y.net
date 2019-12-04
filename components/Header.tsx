import React from 'react'
import Link from 'next/link'

const Header = () => (
  <header>
    <nav className="navbar navbar-light my-4 px-0">
      <Link href="/">
        <a className="navbar-brand mr-auto text-primary">niceb5y web</a>
      </Link>
    </nav>
  </header>
)

export default Header
