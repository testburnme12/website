import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404" />
      <h1>404</h1>
      <p style={{ marginBottom: '5rem' }}>
        Page not found
        <br />
        <code>¯\_(ツ)_/¯</code>
      </p>
    </Layout>
  )
}

export default NotFoundPage
