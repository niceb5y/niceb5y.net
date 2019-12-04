import React from 'react'

export default () => (
  <div className="block block-bordered-lg">
    <div className="text-center">
      <h1 className="block-title mb-4">Gaming</h1>
      <p className="lead pb-3">
        <span className="badge badge-primary mx-3">#PS4</span>
        <span className="badge badge-primary mx-3">#ミリシタ</span>
      </p>
      <div className="d-flex justify-content-center">
        <div className="col-md-8 col-lg-6">
          <a href="https://psnprofiles.com/ShKim_niceb5y">
            <img
              src="https://card.psnprofiles.com/2/ShKim_niceb5y.png"
              className="py-3 w-100"
            />
          </a>
          <img src="/images/mltd.png" className="py-3 w-100" />
        </div>
      </div>
    </div>
  </div>
)
