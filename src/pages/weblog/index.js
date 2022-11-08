import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import * as styles from './index.module.scss'

export const pageQuery = graphql`
  query WeblogQuery {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { ne: null } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMM D, YYYY")
            spoiler
            type
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

const ArticlesContainer = ({ articles }) => {
  return (
    <div className={styles.articles}>
      {articles.map((edge, idx) => {
        const { title, date, spoiler } = edge.node.frontmatter

        return (
          <div className={`${styles.article} shadow`} key={idx}>
            <Link to={`/weblog/${edge.node.fields.slug}/`}>
              <span style={{ width: '50%' }}>{title}</span>
            </Link>
            <br />
            <span className={styles.description}>
              <small>
                {date} &middot; {edge.node.timeToRead} min read
                <br />
                {spoiler}
              </small>
            </span>
          </div>
        )
      })}
    </div>
  )
}

const WeblogPage = (props) => {
  const postTypes = ['tech', 'diversions', 'thoughts']

  return (
    <Layout>
      <SEO title="~/weblog" />
      <h1>~/weblog</h1>
      <div>
        <Link to={`/weblog/tags/`}>./tags</Link>{' '}
        <Link to={`/weblog/rss.xml`}>./rss.xml</Link>{' '}
        <Link to="/discussions/">discussions</Link>
      </div>
      <div className={styles.container}>
        {postTypes.map((postType) => (
          <div key={postType} className={styles.articleContainer}>
            <h3>#{postType}</h3>
            <ArticlesContainer
              articles={props.data.allMdx.edges.filter(
                (edge) => edge.node.frontmatter.type === postType
              )}
            />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default WeblogPage
