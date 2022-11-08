import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IpPage = () => {
  const [ipv4, setIpv4] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get('https://api.ipify.org?format=json', {
        timeout: 5000,
      })
      .then((res) => setIpv4(res.data.ip))
      .catch((err) => setError(err.message))
  }, [])

  return (
    <Layout>
      <SEO title="~/ip" />
      <h1>~/ip</h1>
      <p>
        {error ? (
          error
        ) : ipv4 ? (
          <>
            Your IP is <strong>{ipv4}</strong>.
          </>
        ) : (
          `Getting IP...`
        )}
      </p>
    </Layout>
  )
}

export default IpPage
