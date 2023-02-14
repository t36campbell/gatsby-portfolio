const path = require('path');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

const query = `
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
        image {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1.6 # 16:10
              width: 1800
            )
          }
        }
      }
    }
  }
  posts: allMarkdownRemark(
    filter: { fileAbsolutePath: { glob: "**/src/pages/posts/*.md" } }
  ) {
    edges {
      node {
        html
        frontmatter {
          path
          category
          date
          published
          title
          author
          description
          image
        }
        image {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1.6 # 16:10
              width: 1800
            )
          }
        }
      }
    }
  }
  projects: allMarkdownRemark(
    filter: { fileAbsolutePath: { glob: "**/src/pages/projects/*.md" } }
  ) {
    edges {
      node {
        html
        frontmatter {
          path
          category
          date
          published
          title
          author
          description
          link
          repo
          image
        }
        image {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1.6 # 16:10
              width: 1800
            )
          }
        }
      }
    }
  }
  shop: allMarkdownRemark(
    filter: { fileAbsolutePath: { glob: "**/src/pages/shop/*.md" } }
  ) {
    edges {
      node {
        html
        frontmatter {
          path
          category
          date
          published
          title
          author
          description
          link
          repo
          image
        }
        image {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1.6 # 16:10
              width: 1800
            )
          }
        }
      }
    }
  }
}
`;

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type MarkdownRemark implements Node {
      image: File @link(from: "fields.localFile")
    }
  `);
};

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  getCache,
}) => {
  const shouldCreateRemoteFileNode = (node) => {
    const typeMatch =
      node.internal.type === 'MarkdownRemark' ||
      node.internal.type === 'AllMarkdownRemark';
    return typeMatch && node.frontmatter?.image !== null;
  };

  if (shouldCreateRemoteFileNode(node)) {
    const fileNode = await createRemoteFileNode({
      url: node.frontmatter.image,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      getCache,
    });

    if (fileNode) {
      createNodeField({ node, name: 'localFile', value: fileNode.id });
    }
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const listTemplate = path.resolve('src/templates/list.tsx');
  const pageTemplate = path.resolve('src/templates/page.tsx');

  const pages = graphql(query).then((result) => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

    const { lists, posts, projects, shop } = result.data;

    lists.edges.forEach(({ node }) => {
      const path = node.frontmatter.path;
      const categories = node.frontmatter.categories;
      createPage({
        path,
        component: listTemplate,
        context: {
          categories,
          page: path,
        },
      });

      categories.forEach((category) => {
        createPage({
          path: `${path}/${category}`,
          component: listTemplate,
          context: {
            categories: [category],
            page: `${path}/${category}`,
          },
        });
      });
    });

    [...posts.edges, ...projects.edges, ...shop.edges].forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: pageTemplate,
        context: {
          page: node.frontmatter.path,
          ctx: node,
        },
      });
    });
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
