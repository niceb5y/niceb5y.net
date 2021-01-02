import Head from 'next/head'
import Link from 'next/link'
import styles from './404.module.scss'

const NotFoundPage = () => (
  <div>
    <Head>
      <title>페이지를 찾을 수 없습니다.</title>
    </Head>
    <div className={styles.root}>
      <h1 className={styles.thinking}>
        <span role="img" aria-label="not found">
          🤔
        </span>
      </h1>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <Link href="/">
        <a>메인으로 가기</a>
      </Link>
    </div>
  </div>
)

export default NotFoundPage
