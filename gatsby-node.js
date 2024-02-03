const path = require('path');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

const image = `
image {
  childImageSharp {
    gatsbyImageData(
      aspectRatio: 1.6 # 16:10
      width: 1800
    )
  }
}`;

const edges = `
edges {
  node {
    html
    frontmatter {
      ...fm
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
}`;

const postQueries = (names) =>
  names.map((name) => {
    const filter = `filter: { fileAbsolutePath: { glob: "**/src/pages/${name}/**/*.md" } }`;
    return `
      ${name}: allMarkdownRemark(${filter}) {
        ${edges}
      }`;
  });

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
        ${image}
      }
    }
  }
  ${postQueries(['posts', 'projects', 'shop'])}
}

fragment fm on Frontmatter {
  category
  description
  image
  path
  title
}

`;

exports.createSchemaCustomization = ({ actions }) => {
  const { createFieldExtension, createTypes } = actions;

  createFieldExtension({
    name: 'author',
    extend(_options, _prevFieldConfig) {
      return {
        resolve(source) {
          return source.author === null ? 'Tyler Campbell' : source.author;
        },
      };
    },
  });

  createFieldExtension({
    name: 'price',
    extend(_options, _prevFieldConfig) {
      return {
        resolve(source) {
          return source.price === 0 ? 'FREE' : source.price;
        },
      };
    },
  });

  createFieldExtension({
    name: 'published',
    extend(_options, _prevFieldConfig) {
      return {
        resolve(source) {
          const date = new Date(source.date);
          const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            timeZone: 'UTC',
          };
          return date.toLocaleDateString('en-us', options);
        },
      };
    },
  });

  const definitions = [
    `type MarkdownRemark implements Node {
      image: File @link(from: "fields.localFile")
      frontmatter: Frontmatter
    }`,
    `type Frontmatter {
      author: String! @author
      category: String!
      date: String!
      description: String
      image: String
      link: String
      path: String!
      price: String @price 
      published: String @published
      repo: String
      title: String
    }`,
  ];

  createTypes(definitions);
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
    const imageDefault =
      'https://ik.imagekit.io/t36campbell/Portfolio/blog-1_rbK4YAxj4.png';
    const fileNode = await createRemoteFileNode({
      url: node.frontmatter.image ?? imageDefault,
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

    const tags = [];
    lists.edges.forEach(({ node }) => {
      const path = node.frontmatter.path;
      const categories = node.frontmatter.categories;
      const nodes = categories.map((name) => ({
        name,
        path,
      }));

      tags.push(...nodes);

      createPage({
        path,
        component: listTemplate,
        context: {
          categories,
          page: path,
        },
      });
    });

    tags.forEach((category) => {
      const { name, path } = category;
      const route = `${path}/${name}`;
      createPage({
        path: route,
        component: listTemplate,
        context: {
          categories: [name],
          page: route,
        },
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
