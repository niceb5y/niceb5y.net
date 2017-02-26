import React, { Component } from 'react'
import { Link } from 'react-router'

import LinkData from '../data/Link.json'

export default class extends Component {
  render() {
    return (
      <div className="block block-bordered-lg">
        <div className="container text-center">
          <h1 className="block-title">Link</h1>
          <p className="lead">이것저것</p>
            {
              LinkData.map((link, index) => {
                if (link.url.startsWith('/')) {
                  return (
                    <Link
                      className="btn btn-lg btn-outline-miura m-3"
                      role="button"
                      to={ link.url }
                      key={ index }
                    >
                      { link.title }
                    </Link>
                  )
                } else {
                  return (
                    <a
                      className="btn btn-lg btn-outline-miura m-3"
                      role="button"
                      href={ link.url }
                      key={ index }
                    >
                      { link.title }
                    </a>
                  )
                }
              })
            }
        </div>
      </div>
    )
  }
}
