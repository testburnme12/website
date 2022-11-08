import React, { useState } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import * as styles from './books.module.scss'

export const pageQuery = graphql`
  query BooksQuery {
    allBooksJson {
      edges {
        node {
          year
          books {
            title
            author
            link
            genre
            desc
            audiobook
          }
        }
      }
    }
  }
`

const BooksPage = ({
  data: {
    allBooksJson: { edges },
  },
}) => {
  const [selectedGenre, setSelectedGenre] = useState('All')

  const genres = []
  edges.forEach((edge) => {
    edge.node.books.forEach((book) => {
      book.genre.forEach((genre) => genres.push(genre))
    })
  })

  return (
    <Layout>
      <SEO title="~/books" />
      <h1>~/books</h1>
      <div className={styles.filters}>
        {['All', ...new Set(genres.sort())].map((genre) => (
          <button
            key={genre}
            className={styles.genre}
            onClick={() => setSelectedGenre(genre)}
            style={selectedGenre === genre ? { border: '1.1px solid' } : null}
          >
            {genre}
          </button>
        ))}
      </div>
      <div style={{ marginBottom: '1rem' }}>
        * <i>Currently reading</i>
      </div>
      {edges.map(({ node: { year, books } }) =>
        selectedGenre === 'All' ||
        books.some((book) => book.genre.includes(selectedGenre)) ? (
          <div key={year}>
            <h3 id={year}>{year}</h3>
            <ul>
              {books.map(({ title, author, link, desc, audiobook, genre }) => {
                return selectedGenre === 'All' ||
                  genre.includes(selectedGenre) ? (
                  <li key={link}>
                    <a href={link}>{title}</a>
                    {author ? <> - {author}</> : null}
                    {audiobook ? <> &#9835;</> : null}
                    {desc ? (
                      <>
                        <br />
                        <span dangerouslySetInnerHTML={{ __html: desc }} />
                      </>
                    ) : null}
                  </li>
                ) : null
              })}
            </ul>
          </div>
        ) : null
      )}
      <small>Last updated: Jun 14, 2022</small>
      <hr />
    </Layout>
  )
}

export default BooksPage
