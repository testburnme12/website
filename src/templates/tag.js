import React from 'react'
import PropTypes from 'prop-types'

import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            type
          }
        }
      }
    }
  }
`

const Tag = ({
  pageContext: { tag },
  data: {
    allMdx: { edges, totalCount },
  },
}) => {
  return (
    <Layout>
      <SEO title={`#${tag} :: /weblog/tags`} />
      <div>
        <h2>~/weblog/tags/{tag}</h2>
        <p>
          {totalCount} entr{totalCount === 1 ? 'y' : 'ies'} in{' '}
          <Link to={`/weblog/`}>weblog#{edges[0].node.frontmatter.type}</Link>{' '}
          tagged with "{tag}
          ":
        </p>
        <ul>
          {edges.map(
            ({
              node: {
                fields: { slug },
                frontmatter: { title },
              },
            }) => {
              return (
                <li key={slug}>
                  <Link to={`/weblog/${slug}/`}>{title}</Link>
                </li>
              )
            }
          )}
        </ul>
        <Link to={`/weblog/tags/`}>&larr; weblog/tags</Link>
      </div>
    </Layout>
  )
}

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tag
