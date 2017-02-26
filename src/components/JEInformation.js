import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div className="block pt-3 pb-5 text-center">
        <div className="row">
          <div className="col-12">
            <h1>
              Ubuntu JE
              <a className="text-takasuki" href="http://bugbear5.tumblr.com/post/103450583331/je-14-04" target="_blank">
                <small><span className="icon icon-popup" aria-hidden="true"></span></small>
              </a> / JE Classic
              <a className="text-takasuki" href="http://bugbear5.tumblr.com/post/108634866076/je-classic-14-04" target="_blank">
                <small><span className="icon icon-popup" aria-hidden="true"></span></small>
              </a>
              &nbsp;mirror
            </h1>
            <p className="lead">
              <a className="text-takasuki" href="https://twitter.com/bugbear5">떠돌이</a>님이 제작하신 Ubuntu JE의 비공식 미러입니다.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
