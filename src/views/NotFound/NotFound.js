import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component {
  render() {
    return (
      <div className="row">
        <div className="block text-center">
        	<h1 className="block-title">{ '¯\\_(ツ)_/¯' }</h1>
        	<p className="lead">요청하신 페이지를 찾을 수 없습니다.</p>
        	<Link className="btn btn-kisaragi" to="/" role="button">메인으로 가기</Link>
        </div>
      </div>
    )
  }
}
