const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("src/templates/blog-post.js")
  const projectTemplate = path.resolve("src/templates/project-page.js")

  // Individual post pages
  const posts = graphql(`
    {
      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/pages/posts/*.md" } }
        sort: { fields: [frontmatter___order]}
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              path
              order
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }

    // Create post pages
    result.data.posts.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })

  // Individual projects pages
  const projects = graphql(`
    {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/pages/projects/*.md" } }
        sort: { fields: [frontmatter___order]}
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              path
              order
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }

    // Create Project pages
    result.data.projects.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: projectTemplate,
      })
    })
  })

  // Return a Promise which would wait for both the queries to resolve
  return Promise.all([posts, projects])
}
