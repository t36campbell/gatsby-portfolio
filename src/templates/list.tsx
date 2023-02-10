import React, { FC } from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import Layout from '@components/layout/Layout';
import Card from '@components/card/Card';

// eslint-disable-next-line no-use-before-define
interface ListTemplateProps extends PageProps<QueryResult> {}

const ListList: FC<ListTemplateProps> = ({
  data,
}: ListTemplateProps): JSX.Element => {
  const frontmatter = data.markdownRemark.frontmatter;
  return (
    <Layout {...frontmatter}>
      {data.allMarkdownRemark.edges.map((post) => (
        <Link key={post.node.id} to={post.node.frontmatter.path}>
          <Card image={post.node.frontmatter.image}>
            <div>
              <div>
                <h1>{post.node.frontmatter.title}</h1>
              </div>
              <div>
                <h3>{post.node.frontmatter.published}</h3>
              </div>
            </div>
          </Card>
        </Link>
      ))}
      {/* if length == 0 show fallback */}
    </Layout>
  );
};

export default ListList;

export const pageQuery = graphql`
  query ListByCategory($categories: [String!]!, $path: String) {
    allMarkdownRemark: allMarkdownRemark(
      filter: { frontmatter: { category: { in: $categories } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            category
            title
            published
            image
          }
        }
      }
    }
    markdownRemark: markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
        description
      }
    }
  }
`;

interface Edges {
  node: {
    id: string;
    frontmatter: {
      path: string;
      category: string;
      title: string;
      published: string;
      image: string;
    };
  };
}
interface QueryResult {
  allMarkdownRemark: {
    edges: Edges[];
  };
  markdownRemark: {
    frontmatter: {
      path: string;
      title: string;
      description: string;
    };
  };
}
