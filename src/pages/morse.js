import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import * as styles from './morse.module.scss'

const MORSE = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--...',
  8: '---..',
  9: '----.',
  0: '-----',
  '.': '.-.-.-',
  ',': '--..--',
  '?': '..--..',
  "'": '.----.',
  '!': '-.-.--',
  '/': '-..-.',
  '(': '-.--.',
  ')': '-.--.-',
  '&': '.-...',
  ':': '---...',
  ';': '-.-.-.',
  '=': '-...-',
  '+': '.-.-.',
  '-': '-....-',
  '"': '.-..-.',
  '@': '.--.-.',
  _: '..--.-',
  $: '...-..-',
  ' ': '/',
}

const encode = (str) => {
  return str
    .split('')
    .map((s) => MORSE[s])
    .join(' ')
}

const decode = (code) => {
  return code
    .split(' ')
    .map((c) => Object.keys(MORSE).find((key) => MORSE[key] === c) || '')
    .join('')
}

const MorseCodePage = () => {
  const [input, setInput] = useState('')
  const [inputMorse, setInputMorse] = useState('')

  return (
    <Layout>
      <SEO title="~/morse" />
      <h1>~/morse</h1>
      <p>Morse code encoder/decoder.</p>
      <div className={styles.boxes}>
        <div className={styles.formContainer}>
          <form>
            <textarea
              name="input"
              id="input"
              placeholder="Enter text to encode"
              onChange={(e) => setInput(e.target.value)}
            ></textarea>
          </form>
          <p>
            <strong>Output</strong>:
            <br />
            {encode(input.toLowerCase())}
          </p>
        </div>
        <div className={styles.formContainer}>
          <form>
            <textarea
              name="inputMorse"
              id="inputMorse"
              placeholder="Enter text to decode"
              onChange={(e) => setInputMorse(e.target.value)}
            ></textarea>
          </form>
          <p>
            <strong>Output</strong>:
            <br />
            {decode(inputMorse)}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default MorseCodePage
