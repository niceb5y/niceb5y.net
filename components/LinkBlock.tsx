import React from 'react'

import LinkData from '../data/Link'

export default () => (
  <div className="block block-bordered-lg">
    <div className="container text-center">
      <h1 className="block-title">Link</h1>
      <p className="lead">이것저것</p>
      {LinkData.map((link, index) => (
        <a
          className="btn btn-lg btn-outline-primary m-3"
          role="button"
          href={link.url}
          key={index}
        >
          {link.title}
        </a>
      ))}
    </div>
  </div>
)
