import React, { Component } from 'react'

import blog from '../../images/blog.jpg'

import './BlogBlock.css'

export default class extends Component {
  render() {
    return (
      <div className="BlogBlock block block-bordered-lg pb-0">
        <div className="container">
          <div className="row">
            <div id="image-container" className="col-md-5 col-sm-6">
              <img src={blog} className="w-100" data-transition="entrance" alt="blog" />
              <hr className="mt-0 mb-2 mx-auto hidden-md-up" />
            </div>
            <div className="col-md-7 col-sm-6 text-center">
              <h1 className="block-title p-t">niceb5y blog</h1>
              <p className="lead">
                그냥 이것 저것 쓰는 블로그
              </p>
              <a
                className="btn btn-lg btn-hoshii mb-3"
                href="http://blog.niceb5y.net/"
                role="button"
              >
                blog
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
