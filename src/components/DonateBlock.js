import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div id="donate" className="block block-bordered-lg">
        <div className="text-center">
          <h1 className="block-title">Donate</h1>
          <p className="lead pb-3"> 정 돈을 쓸 곳이 없으시다면야....</p>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----" />
            <button type="submit" className="btn btn-lg btn-outline-ganaha" name="submit">
              <span className="icon icon-paypal"> Donate</span>
            </button>
          </form>
        </div>
      </div>
    )
  }
}
