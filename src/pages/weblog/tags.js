import React from 'react'
import PropTypes from 'prop-types'

import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

import * as styles from './tags.module.scss'

export const pageQuery = graphql`
  query {
    allMdx(limit: 2000, filter: { frontmatter: { type: { ne: null } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
        nodes {
          frontmatter {
            type
          }
        }
      }
    }
  }
`

const TagsList = ({ tags }) => {
  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <Link
          to={`/weblog/tags/${tag.fieldValue}/`}
          key={tag.fieldValue}
          className={styles.tag}
        >
          {tag.fieldValue} ({tag.totalCount})
        </Link>
      ))}
    </div>
  )
}

const TagsPage = ({ data }) => {
  const postTypes = ['tech', 'diversions', 'thoughts']

  return (
    <Layout>
      <SEO title="~/weblog/tags" />
      <div>
        <h1>~/weblog/tags</h1>
        <div>
          <Link to="/weblog/">&larr; weblog</Link>
        </div>
        <div className={styles.container}>
          {postTypes.map((postType) => (
            <div key={postType} className={styles.tagsContainer}>
              <h3>#{postType}</h3>
              <TagsList
                tags={data.allMdx.group.filter(
                  (tag) => tag.nodes[0].frontmatter.type === postType
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage
