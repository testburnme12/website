import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const A1Z26CipherPage = () => {
  const [plaintext, setPlaintext] = useState('all your base are belong to us')

  const encrypt = (str) => {
    return str
      .toLowerCase()
      .replace(/[\s\d]/g, '')
      .split('')
      .join(' ')
      .replace(/[a-z]/g, (c) => c.charCodeAt(0) - 96)
  }

  const isValidPlaintext = (str) => {
    return str === '' || /[A-Za-z ]/.test(str.charAt(str.length - 1))
  }

  const input = plaintext
  const output = encrypt(plaintext)

  return (
    <Layout>
      <SEO title="~/a1z26" />
      <h1>~/a1z26</h1>
      <p>A1Z26 cipher encoder/decoder.</p>
      <div style={{ marginBottom: '5rem' }}>
        <form style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            <strong>Plaintext [a-z]</strong>
            <textarea
              name="input"
              id="input"
              value={input}
              placeholder="Text to encrypt"
              onChange={(e) =>
                setPlaintext(
                  isValidPlaintext(e.target.value)
                    ? e.target.value.toLowerCase()
                    : plaintext
                )
              }
              style={{ width: '20rem', height: '10rem', resize: 'none' }}
            ></textarea>
          </label>
          <p>
            <strong>Output</strong>: <br />
            {output}
          </p>
        </form>
      </div>
    </Layout>
  )
}

export default A1Z26CipherPage
