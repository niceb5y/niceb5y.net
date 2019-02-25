import React from "react"

import Helmet from "react-helmet"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <div className="container">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
