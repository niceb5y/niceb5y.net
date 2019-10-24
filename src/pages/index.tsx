import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import HelloBlock from "../components/HelloBlock"
import BlogBlock from "../components/BlogBlock"
import ContactBlock from "../components/ContactBlock"
import GamingBlock from "../components/GamingBlock"
import LinkBlock from "../components/LinkBlock"
import CoffeeBlock from "../components/CoffeeBlock"

const IndexPage = () => (
  <Layout>
    <SEO title="Hello" />
    <HelloBlock />
    <BlogBlock />
    <ContactBlock />
    <GamingBlock />
    <LinkBlock />
    <CoffeeBlock />
  </Layout>
)

export default IndexPage
