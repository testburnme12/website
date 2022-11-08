import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import * as styles from './rail-fence.module.scss'

const RailFenceCipherPage = () => {
  const [plaintextInput, setPlaintextInput] = useState(
    'The quick brown fox jumps over the lazy dog.'
  )
  const [cipherInput, setCipherInput] = useState('Flee at once.')
  const [key, setKey] = useState(2)
  const [offset, setOffset] = useState(0)

  const encrypt = (str, key, offset) => {
    const cycle = key * 2 - 2
    const fences = new Array(key).fill('')

    for (let x = 0; x < str.length; x++) {
      let y = key - 1 - Math.abs(cycle / 2 - ((x + offset) % cycle))
      fences[y] += str[x]
    }

    return fences
  }

  const decrypt = (code, key, offset) => {
    const cycle = key * 2 - 2
    const result = new Array(code.length)

    let j = -1

    for (let y = 0; y < key; y++) {
      for (let x = 0; x < code.length; x++) {
        if ((y + x + offset) % cycle === 0 || (y - x - offset) % cycle === 0) {
          result[x] = code[++j]
        }
      }
    }

    return result
  }

  const isValidKey = (key) => {
    return +key >= 2 && +key < plaintextInput.length
  }

  const isValidOffset = (offset) => {
    return +offset >= 0 && +offset < key
  }

  return (
    <Layout>
      <SEO title="~/rail-fence" />
      <h1>~/rail-fence</h1>
      <p>
        <a href="https://en.wikipedia.org/wiki/Rail_fence_cipher">
          Rail fence cipher
        </a>{' '}
        encoder/decoder.
      </p>
      <div>
        <form className={styles.form}>
          <div>
            <label>
              <strong>Plaintext</strong>
              <textarea
                name="plaintextInput"
                id="plaintextInput"
                value={plaintextInput}
                placeholder="Text to encrypt"
                onChange={(e) =>
                  setPlaintextInput(
                    e.target.value.replace(/\n|/g, '').replace(/\s+/g, ' ')
                  )
                }
              ></textarea>
            </label>
            <p>
              Output: <br />
              {encrypt(plaintextInput, key, offset).join('')}
            </p>
          </div>

          <div>
            <label>
              <strong>Key</strong>
              <input
                type="number"
                name="key"
                id="key"
                value={key}
                onChange={(e) =>
                  setKey(isValidKey(e.target.value) ? +e.target.value : key)
                }
              />
            </label>
            <label>
              <strong>Offset</strong>
              <input
                type="number"
                name="offset"
                id="offset"
                value={offset}
                onChange={(e) =>
                  setOffset(
                    isValidOffset(e.target.value) ? +e.target.value : offset
                  )
                }
              />
            </label>
          </div>

          <div>
            <label>
              <strong>Cipher</strong>
              <textarea
                name="cipherInput"
                id="cipherInput"
                value={cipherInput}
                placeholder="Text to decrypt"
                onChange={(e) =>
                  setCipherInput(
                    e.target.value.replace(/\n|/g, '').replace(/\s+/g, ' ')
                  )
                }
              ></textarea>
            </label>
            <p>
              Output: <br />
              {decrypt(cipherInput, key, offset)}
            </p>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default RailFenceCipherPage
