import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div className="col-sm-6">
        <div className={ 'card card-inverse card-' + this.props.color + ' mb-3 text-center' }>
          <div className="card-block">
            <a href={this.props.link}>
              <h3 className="card-title">
                <span className={ 'icon icon-' + this.props.icon }></span>
                { ' ' + this.props.title }
              </h3>
            </a>
            <p className="card-text">
              { this.props.desc }
            </p>
          </div>
        </div>
      </div>
    )
  }
}
