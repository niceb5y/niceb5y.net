import React from "react"

import Helmet from "react-helmet"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <div className="container">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
