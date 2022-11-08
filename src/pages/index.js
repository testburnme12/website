import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Blinker from '../components/blinker'

import * as styles from './index.module.scss'

const IndexPage = () => {
  const [unixTime, setUnixTime] = useState(Date.now() / 1000)

  useEffect(() => {
    const timer = setInterval(() => setUnixTime(Date.now() / 1000), 1)
    return () => clearInterval(timer)
  }, [])

  return (
    <Layout>
      <SEO title="$HOME" />
      <div className={styles.container}>
        <div className={styles.time}>{unixTime.toFixed(3)}</div>
        <Link to="/about" className={styles.link}>
          $ whoami
          <Blinker />
        </Link>
      </div>
    </Layout>
  )
}

export default IndexPage
