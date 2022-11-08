---
title: ~/colophon
type: page
slug: colophon
---

## Framework

This site is powered by [Gatsby](https://github.com/gatsbyjs/gatsby), an open source static site generator based on [React](https://github.com/facebook/react) and [GraphQL](https://graphql.org). It is hosted on [Netlify](https://www.netlify.com/). For form submissions, I use [Netlify's form handling](https://docs.netlify.com/forms/setup/). For styling, I use CSS Modules and SCSS.
The source code is available on my [GitHub](https://github.com/rsapkf/www/).

Some Gatsby plugins I use on this site are:

- [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/): Sources data into your Gatsby application from your local filesystem.

- [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/): Parses Markdown files using [RemarkJS](https://github.com/remarkjs/remark).

  _Update: I have moved entirely to MDX. This plugin is no longer used._

- [gatsby-plugin-mdx](https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/): [MDX](https://github.com/mdx-js/mdx) lets you write JSX embedded inside markdown. You can write, for example, `# heading` for the little things and JSX for more advanced components.

- [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/): Provides drop-in support for server rendering data added with [React Helmet](https://github.com/nfl/react-helmet). With this plugin, attributes you add in their component, e.g. title, meta attributes, etc. will get added to the static HTML pages Gatsby builds.

- [gatsby-plugin-feed](https://www.gatsbyjs.org/packages/gatsby-plugin-feed/): Creates an RSS feed (or multiple feeds) for Gatsby sites.

- [gatsby-plugin-sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/): Handles [SCSS/Sass](https://sass-lang.com/) files. Requires [node-sass](https://github.com/sass/node-sass).

- [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/): Adds syntax highlighting to code blocks in markdown files using [Prism](https://github.com/PrismJS/prism). Requires [prismjs](https://github.com/PrismJS/prism).

## Analytics

This site does not use any analytics whatsoever.

## Fonts

This site uses self-hosted fonts. The font used is "Source Sans Pro". The wiki and most of my other personal projects make use of the [system font stack](https://www.digitalocean.com/community/tutorials/css-system-font-stack) as much as possible.

## Partially inaccessible pages

The following pages use external APIs to fetch data from GitHub and Mastodon and are therefore partially inaccessible on [text-based browsers](https://en.wikipedia.org/wiki/Text-based_web_browser#List_of_notable_text-based_web_browsers).

- <Link to="/projects/">/projects</Link>
- <Link to="/microblog/">/microblog</Link>

## Links

- [W3C HTML validator](https://validator.w3.org/nu/?doc=https://rsapkf.org)
- [W3C CSS validator](https://jigsaw.w3.org/css-validator/validator?uri=https://rsapkf.org)
- [W3C RSS validator](https://validator.w3.org/feed/check.cgi?url=https://rsapkf.org/weblog/rss.xml)
- [Lighthouse](https://pagespeed.web.dev/report?url=https://rsapkf.org)

<img src="/img/valid-css.gif" alt="valid css" />
<img src="/img/valid-rss.png" alt="valid rss" />
<br />

<small>Last updated: May 8, 2021</small>

<hr />
