const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const listTemplate = path.resolve('src/templates/list.tsx');
  const pageTemplate = path.resolve('src/templates/page.tsx');

  const pages = graphql(`
    {
      lists: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/pages/lists/*.md" } }
      ) {
        edges {
          node {
            frontmatter {
              path
              categories
            }
          }
        }
      }
      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/pages/posts/*.md" } }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/pages/projects/*.md" } }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

    result.data.lists.edges.forEach(({ node }) => {
      const path = node.frontmatter.path;
      const categories = node.frontmatter.categories;
      createPage({
        path,
        component: listTemplate,
        context: {
          categories,
        },
      });

      categories.forEach((category) => {
        createPage({
          path: `${path}/${category}`,
          component: listTemplate,
          context: {
            categories: [category],
          },
        });
      });
    });

    [...result.data.posts.edges, ...result.data.projects.edges].forEach(
      ({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: pageTemplate,
          context: {
            path: node.frontmatter.path,
          },
        });
      },
    );
  });

  return Promise.all([pages]);
};

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};
