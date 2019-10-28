import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <nav className="navbar navbar-light my-4 px-0">
      <Link className="navbar-brand mr-auto text-primary" to="/">
        niceb5y web
      </Link>
    </nav>
  </header>
)

export default Header
