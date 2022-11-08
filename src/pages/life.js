import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const GameOfLifePage = () => {
  return (
    <Layout>
      <SEO title="~/life" />
      <h1>~/life</h1>
      <p>
        This page simulates{' '}
        <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
          Conway's Game of Life
        </a>
        .
      </p>
    </Layout>
  )
}

export default GameOfLifePage
