import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import * as styles from './vigenere.module.scss'

const VigenereCipherPage = () => {
  const [plaintext, setPlaintext] = useState(
    'The quick brown fox jumps over the lazy dog.'
  )
  const [key, setKey] = useState('abc')

  const getKeyArr = (key) => {
    // Turn each letter in key to its index in the lowercase alphabet
    // 'afhz' => [0, 5, 7, 25]
    return key.split('').map((c) => (c.charCodeAt(0) - 65) % 32)
  }

  const encrypt = (str, keyArr) => {
    let output = ''
    for (let i = 0, j = 0; i < str.length; i++) {
      let c = str.charCodeAt(i)
      if (/[A-Z]/.test(str[i])) {
        output += String.fromCharCode(
          ((c - 65 + keyArr[j % keyArr.length]) % 26) + 65
        )
        j++
      } else if (/[a-z]/.test(str[i])) {
        output += String.fromCharCode(
          ((c - 97 + keyArr[j % keyArr.length]) % 26) + 97
        )
        j++
      } else {
        output += str.charAt(i)
      }
    }
    return output
  }

  const decrypt = (code, keyArr) => {
    return encrypt(
      code,
      keyArr.map((c) => 26 - c)
    )
  }

  const isValidKey = (key) => {
    return key === '' || /^[A-Za-z]+$/.test(key)
  }

  const input = plaintext
  const output = key.length
    ? encrypt(plaintext, getKeyArr(key))
    : 'Please enter a key'

  return (
    <Layout>
      <SEO title="~/vigenere" />
      <h1>~/vigenere</h1>
      <p>
        <a href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher">
          Vigenère cipher
        </a>{' '}
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
            <strong>Key [a-z]</strong>
            <input
              type="text"
              name="key"
              id="key"
              value={key}
              onChange={(e) =>
                setKey(
                  isValidKey(e.target.value)
                    ? e.target.value.toLowerCase()
                    : key
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
              onChange={(e) =>
                setPlaintext(decrypt(e.target.value, getKeyArr(key)))
              }
            ></textarea>
          </label>
        </form>
      </div>
    </Layout>
  )
}

export default VigenereCipherPage
