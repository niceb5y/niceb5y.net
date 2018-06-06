import React from 'react'

import profile from '../../images/profile.jpg'

import './HelloBlock.css'

export default () =>(
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
        <p className="mt-5">
          저는 어떠한 종류의 인터넷 검열도 반대합니다.&nbsp;
          <a href="https://savetheinternet.kr" target="_blank">#SaveTheInternetKR</a>
        </p>
      </div>
    </div>
  </div>
)
