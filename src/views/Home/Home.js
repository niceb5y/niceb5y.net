import React, { Component } from 'react'

import HelloBlock from '../../components/HelloBlock/HelloBlock'
import BlogBlock from '../../components/BlogBlock/BlogBlock'
import ContactBlock from '../../components/ContactBlock/ContactBlock'
import GamingBlock from '../../components/GamingBlock/GamingBlock'
import LinkBlock from '../../components/LinkBlock/LinkBlock'
import DonateBlock from '../../components/DonateBlock/DonateBlock'

export default class extends Component {
  render() {
    return (
      <div>
        <HelloBlock />
        <BlogBlock />
        <ContactBlock />
        <GamingBlock />
        <LinkBlock />
        <DonateBlock />
      </div>
    )
  }
}
