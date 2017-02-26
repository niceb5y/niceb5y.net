import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Information from '../../components/JEInformation'
import Download from '../../components/JEDownload'

export default class extends Component {
  render() {
    return (
      <div>
        <Helmet title="Ubuntu JE - niceb5y mirror" />
        <Information />
        <Download />
      </div>
    )
  }
}
