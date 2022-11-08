import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import * as styles from './caesar.module.scss'

import { alphabet } from '../constants'

const AffineCipherPage = () => {
  const [plaintext, setPlaintext] = useState(
    'The quick brown fox jumps over the lazy dog.'
  )
  const [key, setKey] = useState('3/10')

  const getGcd = (x, y) => {
    if (!y) return x
    return getGcd(y, x % y)
  }

  const getModInv = (x, y) => {
    x %= y
    for (let i = 1; i < y; i++) {
      if ((x * i) % 26 === 1) {
        return i
      }
    }
  }

  const mod = (x, y) => ((x % y) + y) % y

  const encrypt = (str, key) => {
    let parts = key.split('/')
    let a = +parts[0]
    let b = +parts[1]

    if (!a || !b) return 'Invalid key'
    if (getGcd(a, 26) !== 1) return 'a must be coprime to 26.'

    return str
      .replace(/[a-z]/g, (c) => alphabet[(a * alphabet.indexOf(c) + b) % 26])
      .replace(/[A-Z]/g, (c) =>
        alphabet[(a * alphabet.indexOf(c.toLowerCase()) + b) % 26].toUpperCase()
      )
  }

  const decrypt = (code, key) => {
    let parts = key.split('/')
    let a = +parts[0]
    let b = +parts[1]
    let ainv = getModInv(a, 26)

    return code
      .replace(
        /[a-z]/g,
        (c) => alphabet[mod((alphabet.indexOf(c) - b) * ainv, 26)]
      )
      .replace(/[A-Z]/g, (c) =>
        alphabet[
          mod((alphabet.indexOf(c.toLowerCase()) - b) * ainv, 26)
        ].toUpperCase()
      )
  }

  const input = plaintext
  const output = encrypt(plaintext, key)

  return (
    <Layout>
      <SEO title="~/affine" />
      <h1>~/affine</h1>
      <p>
        <a href="https://en.wikipedia.org/wiki/Affine_cipher">Affine</a>/
        <a href="https://en.wikipedia.org/wiki/Atbash">Atbash</a> ciphers
        encoder/decoder.
      </p>
      <p>
        To use Atbash,{' '}
        <span
          style={{ borderBottom: '1px solid', cursor: 'pointer' }}
          onClick={() => setKey('25/25')}
        >
          set the key
        </span>{' '}
        to "25/25".{' '}
        <a href="https://en.wikipedia.org/wiki/Atbash#Relationship_to_the_affine_cipher">
          More info
        </a>
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
            <strong>Key (a/b)</strong>
            <input
              type="text"
              name="key"
              id="key"
              value={key}
              placeholder="Key"
              onChange={(e) => setKey(e.target.value)}
            ></input>
          </label>
          <label>
            <strong>Cipher</strong>
            <textarea
              name="output"
              id="output"
              value={output}
              placeholder="Text to decrypt"
              onChange={(e) => setPlaintext(decrypt(e.target.value, key))}
            ></textarea>
          </label>
        </form>
      </div>
    </Layout>
  )
}

export default AffineCipherPage
