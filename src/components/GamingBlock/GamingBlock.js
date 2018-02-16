import React, { Component } from 'react'

import GamingData from '../../data/Gaming.json'

export default class extends Component {
  render() {
    return (
      <div className="block block-bordered-lg">
        <div className="text-center">
          <h1 className="block-title mb-4">Gaming</h1>
          {
            GamingData.map((game, index) => {
              return (
                <div className="row d-flex justify-content-center mb-3" key={ index }>
                  <div className="col-md-8 col-lg-6">
                    <a href={ game.link }>
                      <img src={ game.img } alt={ game.alt } className="w-100" />
                    </a>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
