import React from "react"

export default () => (
  <div className="block block-bordered-lg">
    <div className="text-center">
      <h1 className="block-title">Donate</h1>
      <p className="lead pb-3">
        여러분의 돈은 소중합니다. 더 가치있는 곳에 쓰세요.
      </p>
      <a
        className="btn btn-lg btn-dark"
        target="_blank"
        href="https://www.buymeacoffee.com/niceb5y"
        role="button"
      >
        <img
          src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
          alt="Buy me a coffee"
        />
        <span style={{ marginLeft: "5px" }}>Buy me a coffee</span>
      </a>
    </div>
  </div>
)
