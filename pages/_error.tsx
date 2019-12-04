import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

const NotFoundPage = () => (
  <div>
    <Head>
      <title>페이지를 찾을 수 없습니다.</title>
    </Head>
    <div className="row">
      <div className="block text-center">
        <h1 className="block-title">
          <span role="img" aria-label="not found">
            🤔
          </span>
        </h1>
        <p className="lead">요청하신 페이지를 찾을 수 없습니다.</p>
        <Link href="/">
          <a className="btn btn-outline-primary" role="button">
            메인으로 가기
          </a>
        </Link>
      </div>
    </div>
  </div>
)

export default NotFoundPage
