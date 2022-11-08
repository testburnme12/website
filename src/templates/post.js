import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostNav from '../components/post-nav'
import TOC from '../components/toc'

import { CopyPermalink } from '../components/copy-permalink'
import * as styles from './post.module.scss'

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fileAbsolutePath
      frontmatter {
        title
        date(formatString: "MMM D, YYYY")
        lastUpdated(formatString: "MMM D, YYYY")
        tags
        type
      }
      body
      timeToRead
      fields {
        slug
      }
      tableOfContents
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

const Post = ({ data, pageContext }) => {
  const slug = data.mdx.fields.slug
  const { title, date, lastUpdated, tags, type } = data.mdx.frontmatter
  const permalink = `${data.site.siteMetadata.siteUrl}/weblog/${slug}`
  const editUrl = `https://github.com/rsapkf/www/blob/main/content/weblog/${
    data.mdx.fileAbsolutePath.split('weblog/')[1]
  }`
  const hasToc = data.mdx.tableOfContents.items ? true : false

  return (
    <Layout>
      <SEO
        title={title}
        // description={data.mdx.excerpt}
        article
      />
      <h1 className={styles.title}>{title}</h1>
      {type !== 'page' && (
        <small>
          {date} &middot; {data.mdx.timeToRead} min read &middot; Last updated:{' '}
          {lastUpdated}
          <hr />
        </small>
      )}
      <div className={styles.articleContainer}>
        <div className={styles.article}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
        {hasToc ? (
          <div className={`${styles.toc} shadow`}>
            <TOC items={data.mdx.tableOfContents.items} />
          </div>
        ) : null}
      </div>
      {type !== 'page' && (
        <div className={`${styles.articleFooter} shadow`}>
          <div>
            Posted in <Link to="/weblog/">weblog#{type}</Link>
          </div>
          <div>
            Categories:{' '}
            {tags.slice(0, 4).map((tag, idx) => (
              <span key={idx}>
                <Link to={`/weblog/tags/${tag}/`}>#{tag}</Link>{' '}
              </span>
            ))}
          </div>
          <CopyPermalink link={permalink} /> &middot;{' '}
          <Link to="/contact/">Feedback</Link> &middot;{' '}
          <a href={editUrl} target="_blank" rel="noreferrer noopener">
            Edit
          </a>
          <PostNav prev={pageContext.prevPost} next={pageContext.nextPost} />
        </div>
      )}
    </Layout>
  )
}

export default Post
