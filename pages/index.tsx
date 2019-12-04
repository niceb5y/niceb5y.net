import React from 'react'
import Head from 'next/head'

import HelloBlock from '../components/HelloBlock'
import BlogBlock from '../components/BlogBlock'
import ContactBlock from '../components/ContactBlock'
import GamingBlock from '../components/GamingBlock'
import LinkBlock from '../components/LinkBlock'
import CoffeeBlock from '../components/CoffeeBlock'

const Home = () => (
  <div>
    <Head>
      <title>Hello - niceb5y web</title>
    </Head>
    <HelloBlock />
    <BlogBlock />
    <ContactBlock />
    <GamingBlock />
    <LinkBlock />
    <CoffeeBlock />
  </div>
)

export default Home
