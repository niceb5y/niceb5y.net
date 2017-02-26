import React, { Component } from 'react'

import profile from '../images/profile.jpg'

export default class extends Component {
  render() {
    return (
      <div className="block">
        <div className="text-center">
          <h1 className="block-title mb-1">HELLO</h1>
          <p className="lead pb-5">안녕하세요.</p>
          <div className="pt-5">
            <img src={profile} className="rounded-circle" alt="profile" />
            <p className="mt-3">
              컴맹, 기계치, 라이트 게이머, A등급 귀차니스트.
            </p>
            <p className="text-muted">
              컴퓨터 잘 못합니다.
            </p>
          </div>
        </div>
        <style jsx>{`
          img {
            width: 100px;
          }                          
        `}</style>
      </div>
    )
  }
}
