import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const EleetPage = () => {
  const [input, setInput] = useState('Eleetify me!')

  const leetspeak = (str) =>
    str
      .replace(/l|i/gi, '1')
      .replace(/z/gi, '2')
      .replace(/e/gi, '3')
      .replace(/a/gi, '4')
      .replace(/s/gi, '5')
      .replace(/G/g, '6')
      .replace(/t/gi, '7')
      .replace(/b/gi, '8')
      .replace(/g/g, '9')
      .replace(/o/gi, '0')

  return (
    <Layout>
      <SEO title="~/eleet" />
      <h1>~/eleet</h1>
      <p>
        <a href="https://en.wikipedia.org/wiki/Leet">13375p34k</a> transformer.
      </p>
      <div style={{ marginBottom: '5rem' }}>
        <form style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            <strong>Plaintext</strong>{' '}
            <textarea
              name="input"
              id="input"
              value={input}
              placeholder="Text to eleetify"
              onChange={(e) => setInput(e.target.value)}
              style={{ width: '20rem', height: '10rem', resize: 'none' }}
            ></textarea>
          </label>

          <p>
            <strong>Output</strong>:
            <br /> {leetspeak(input)}
          </p>
        </form>
      </div>
    </Layout>
  )
}

export default EleetPage
