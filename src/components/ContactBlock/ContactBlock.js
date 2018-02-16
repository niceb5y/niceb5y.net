import React, { Component } from 'react'

import Contact from './Contact'
import ContactData from '../../data/Contact.json'

export default class extends Component {
  render() {
    return (
      <div className="block block-bordered-lg">
        <div className="row">
          {
            ContactData.map((contact, index) => {
              return (
                <Contact
                  icon={ contact.icon }
                  title={ contact.title }
                  link={ contact.link }
                  desc={ contact.desc }
                  color={ contact.color }
                  key={ index }
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}
