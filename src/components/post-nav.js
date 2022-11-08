import React from 'react'
import { Link } from 'gatsby'

import * as styles from './post-nav.module.scss'

export default function PostNav({ prev, next }) {
  return (
    <div className={styles.container}>
      {prev && (
        <span>
          <Link to={`/weblog/${prev.node.fields.slug}/`}>
            <span>&larr; Next</span>
            <br />
          </Link>
          <span className={styles.title}>{prev.node.frontmatter.title}</span>
        </span>
      )}
      {next && (
        <span>
          <Link to={`/weblog/${next.node.fields.slug}/`}>
            <span>Previous &rarr;</span>
            <br />
          </Link>
          <span className={styles.title}>{next.node.frontmatter.title}</span>
        </span>
      )}
    </div>
  )
}
