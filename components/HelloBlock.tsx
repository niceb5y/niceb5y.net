import React from 'react'

export default () => (
  <div className="block">
    <div className="text-center">
      <h1 className="block-title mb-1">HELLO</h1>
      <p className="lead pb-5">안녕하세요.</p>
      <div className="pt-5">
        <img
          src="/images/profile.jpg"
          className="rounded-circle"
          srcSet="/images/profile@2x.jpg 2x, /images/profile@3x.jpg 3x"
        />
        <p className="mt-3">과제에 고통받는 컴퓨터학부생 (화석)</p>
      </div>
    </div>
    <style jsx>{`
      img.rounded-circle {
        width: 100px;
        height: 100px;
      }
    `}</style>
  </div>
)
