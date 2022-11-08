const path = require('path')

module.exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  if (node.internal.type === 'Mdx') {
    createNodeField({
      node,
      name: 'slug',
      value:
        node.frontmatter.slug || path.basename(node.fileAbsolutePath, '.mdx'),
    })
  }
}

async function createPostAndTagPages({ graphql, actions: { createPage } }) {
  const res = await graphql(`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
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
      tagsGroup: allMdx(
        limit: 2000
        filter: { frontmatter: { type: { ne: null } } }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  // /weblog/:post
  const posts = res.data.allMdx.edges
  posts.forEach(
    (
      {
        node: {
          fields: { slug },
          frontmatter: { type },
        },
      },
      idx
    ) => {
      createPage({
        path: type === 'page' ? `/${slug}` : `/weblog/${slug}`,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug,
          prevPost: posts
            .slice(0, idx)
            .reverse()
            .find((p) => p.node.frontmatter.type === type),
          nextPost: posts
            .slice(idx + 1)
            .find((p) => p.node.frontmatter.type === type),
        },
      })
    }
  )

  // /weblog/tags/:tag
  const tags = res.data.tagsGroup.group
  tags.forEach(({ fieldValue }) => {
    createPage({
      path: `/weblog/tags/${fieldValue}`,
      component: path.resolve(`./src/templates/tag.js`),
      context: {
        tag: fieldValue,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([createPostAndTagPages({ graphql, actions })])
}
