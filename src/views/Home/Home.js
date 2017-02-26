import React, { Component } from 'react'

import HelloBlock from '../../components/HelloBlock'
import BlogBlock from '../../components/BlogBlock'
import ContactBlock from '../../components/ContactBlock'
import GamingBlock from '../../components/GamingBlock'
import LinkBlock from '../../components/LinkBlock'
import DonateBlock from '../../components/DonateBlock'

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
