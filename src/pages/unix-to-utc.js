import React, { useState } from 'react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc.js'

import Layout from '../components/layout'
import SEO from '../components/seo'

dayjs.extend(utc)

const UnixToUtcPage = () => {
  const [unixTime, setUnixTime] = useState('0')
  const [utcInput, setUtcInput] = useState('1970-01-01T00:00:00Z')

  const getUtc = (timestamp) => {
    let parsed = dayjs.unix(timestamp)
    return parsed.isValid() ? parsed.utc().format() : 'Invalid timestamp'
  }

  const getUnixTime = (utc) => {
    let parsed = dayjs.utc(utc)
    return parsed.isValid() ? parsed.unix() : 'Invalid date input'
  }

  return (
    <Layout>
      <SEO title="~/unix-to-utc" />
      <h1>~/unix-to-utc</h1>
      <div style={{ marginBottom: '5rem' }}>
        <form style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <input
              type="text"
              name="timestamp"
              id="timestamp"
              value={unixTime}
              placeholder="Unix time"
              onChange={(e) => setUnixTime(e.target.value)}
            />
            <p>
              <strong>UTC</strong>: <br />
              {getUtc(unixTime)}
            </p>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <input
              type="text"
              name="timestamp"
              id="timestamp"
              value={utcInput}
              placeholder="UTC"
              onChange={(e) => setUtcInput(e.target.value)}
            />
            <p>
              <strong>Unix time</strong>: <br />
              {getUnixTime(utcInput)}
            </p>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default UnixToUtcPage
