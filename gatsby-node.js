const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("src/templates/blog-post.ts")
  const projectTemplate = path.resolve("src/templates/project-page.ts")

  // Individual post pages
  const posts = graphql(`
    {
      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/pages/posts/*.md" } }
      ) {
        edges {
          node {
            frontmatter {
              path
              published
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
      ) {
        edges {
          node {
            frontmatter {
              path
              published
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

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};