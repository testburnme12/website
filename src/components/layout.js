import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { useLocation } from '@reach/router'

import Header from './header'
import Footer from './footer'
import SEO from './seo'

import ThemeContext from '../context/theme-context'

import '../styles/main.scss'
import * as styles from './layout.module.scss'

const shortcodes = { Link, SEO }

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  const location = useLocation()

  return (
    <MDXProvider components={shortcodes}>
      <div className={theme}>
        <div className={location.pathname !== '/' ? styles.container : null}>
          {location.pathname !== '/' && <Header />}
          {children}
          {location.pathname !== '/' && <Footer />}
        </div>
      </div>
    </MDXProvider>
  )
}

export default Layout
