import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import * as styles from './caesar.module.scss'

const CaesarCipherPage = () => {
  const [plaintext, setPlaintext] = useState(
    'The quick brown fox jumps over the lazy dog.'
  )
  const [shift, setShift] = useState(13)

  const encrypt = (str, shift) => {
    return str
      .replace(/[a-z]/g, (c) =>
        String.fromCharCode(((c.charCodeAt() - 97 + shift) % 26) + 97)
      )
      .replace(/[A-Z]/g, (c) =>
        String.fromCharCode(((c.charCodeAt() - 65 + shift) % 26) + 65)
      )
  }

  const decrypt = (code, shift) => {
    return encrypt(code, 26 - shift)
  }

  const isValidShift = (shift) => {
    return shift >= 0 && shift <= 25
  }

  const input = plaintext
  const output = encrypt(plaintext, shift)

  return (
    <Layout>
      <SEO title="~/caesar" />
      <h1>~/caesar</h1>
      <p>
        <a href="https://en.wikipedia.org/wiki/Caesar_cipher">Caesar cipher</a>{' '}
        encoder/decoder.
      </p>
      <div>
        <form className={styles.form}>
          <label>
            <strong>Plaintext</strong>
            <textarea
              name="input"
              id="input"
              value={input}
              placeholder="Text to encrypt"
              onChange={(e) => setPlaintext(e.target.value)}
            ></textarea>
          </label>
          <label>
            <strong>Shift [0-26)</strong>
            <input
              type="number"
              name="shift"
              id="shift"
              value={shift}
              onChange={(e) =>
                setShift(
                  isValidShift(+e.target.value) ? +e.target.value : shift
                )
              }
            />
          </label>
          <label>
            <strong>Cipher</strong>
            <textarea
              name="output"
              id="output"
              value={output}
              placeholder="Text to decrypt"
              onChange={(e) => setPlaintext(decrypt(e.target.value, shift))}
            ></textarea>
          </label>
        </form>
      </div>
    </Layout>
  )
}

export default CaesarCipherPage
