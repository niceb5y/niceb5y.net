import React from 'react'

export default ({icon, title, link, desc}) =>  (
  <div className="col-sm-6 py-3">
    <div className={ 'card text-center' }>
      <div className="card-block">
        <a href={link}>
          <h3 className="card-title">
            <span className={ 'icon icon-' + icon }></span>
            { ' ' + title }
          </h3>
        </a>
        <p className="card-text">
          { desc }
        </p>
      </div>
    </div>
  </div>
)
