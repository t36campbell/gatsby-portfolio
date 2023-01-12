const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const listTemplate = path.resolve('src/templates/list.tsx');
  const pageTemplate = path.resolve('src/templates/page.tsx');

  // Individual list pages
  const lists = graphql(`
    {
      lists: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/pages/lists/*.md" } }
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
      createPage({
        path: node.frontmatter.path,
        component: listTemplate,
      });
    });
  });

  // \b(dev | posts)\b

  // Individual pages
  const pages = graphql(`
    {
      pages: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/^(?:(?!:lists).)*$/" } }
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

    // Create Project pages
    result.data.pages.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: pageTemplate,
      });
    });
  });

  // Return a Promise which would wait for both the queries to resolve
  return Promise.all([lists, pages]);
};

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};
