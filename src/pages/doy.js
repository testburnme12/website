import React, { useState } from 'react'

import dayjs from 'dayjs'
import dayOfYear from 'dayjs/plugin/dayOfYear.js'

import Layout from '../components/layout'
import SEO from '../components/seo'

dayjs.extend(dayOfYear)

const getYd = (ymd) => {
  const parsed = dayjs(ymd).format('YYYY-MM-DD')
  const doy = dayjs(ymd).dayOfYear()
  if (!isNaN(doy)) {
    return `${parsed.split('-')[0]}-${doy}`
  }
  return 'Invalid Date'
}

const getYmd = (yd) => {
  try {
    const parts = yd.split('-')
    return dayjs(parts[0]).dayOfYear(parts[1]).format('YYYY-MM-DD')
  } catch {
    return 'Invalid Date'
  }
}

const DoyPage = () => {
  const [yd, setYd] = useState('2000-366')
  const [ymd, setYmd] = useState('2000-12-31')

  return (
    <Layout>
      <SEO title="~/doy" />
      <h1>~/doy</h1>
      <p>
        Convert an{' '}
        <a href="https://en.wikipedia.org/wiki/Ordinal_date">ordinal date</a>{' '}
        (YYYY-DDD) to YYYY-MM-DD and vice versa.
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          marginBottom: '5rem',
        }}
      >
        <div>
          <form>
            <label>
              YYYY-DDD:{' '}
              <input
                type="text"
                name="doy"
                id="doy"
                onChange={(e) => {
                  setYd(e.target.value)
                }}
                value={yd}
              />
            </label>
          </form>
          YYYY-MM-DD: <strong>{getYmd(yd)}</strong>
        </div>
        <div>
          <form>
            <label>
              YYYY-DD-YY:{' '}
              <input
                type="text"
                name="doy"
                id="doy"
                onChange={(e) => {
                  setYmd(e.target.value)
                }}
                value={ymd}
              />
            </label>
          </form>
          YYYY-DDD: <strong>{getYd(ymd)}</strong>
        </div>
      </div>
    </Layout>
  )
}

export default DoyPage
