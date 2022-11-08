import React from 'react'
import { Link } from 'gatsby'

import * as styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      &copy; 2017 - {new Date().getFullYear()} rsapkf &middot;{' '}
      <Link to="/">$HOME</Link> &middot;{' '}
      <a
        href="https://github.com/rsapkf/www/"
        target="_blank"
        rel="noopener noreferrer"
      >
        src
      </a>
      <br />
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
        CC BY-NC-SA 4.0
      </a>
    </footer>
  )
}

export default Footer
