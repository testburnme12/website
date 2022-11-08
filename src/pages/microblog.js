import React, { useState, useEffect } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Spinner from '../components/spinner'

import { fetchData } from '../services/mastodon-api'
import { formatDate } from '../utils/format-date'

const MicroblogPage = ({ tag }) => {
  const [response, setResponse] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMastodonData = async () => {
      const res = await fetchData()
      setResponse(res)
      setIsLoading(false)
    }

    fetchMastodonData()
  }, [])

  return (
    <Layout>
      <SEO title="~/microblog" />
      <h1>~/microblog</h1>
      <p>
        Items sourced from my{' '}
        <a href="https://mastodon.social/@rsapkf">Mastodon toots</a>.
      </p>
      {isLoading ? (
        <Spinner />
      ) : response.status === 'resolved' ? (
        <ul>
          {response.data.slice(0, -1).map(item => (
            <li key={item.id}>
              <a href={item.url}>{formatDate(item.created_at)}</a>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.content.replace(/<br \/>.*/gi, ''),
                }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div
          style={{
            border: '1px solid #d6133d',
            borderRadius: '5px',
            padding: '20px',
          }}
        >
          <p
            style={{
              color: '#d6133d',
              fontSize: '1.2rem',
              fontFamily: 'monospace',
            }}
          >
            {response.error}. Guru Meditation.
          </p>
          <p>Something went wrong. Try reloading the page.</p>
        </div>
      )}
    </Layout>
  )
}

export default MicroblogPage
