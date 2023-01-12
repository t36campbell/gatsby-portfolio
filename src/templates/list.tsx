import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '@/components/layout/Layout';
import Card from '@/components/card/Card';

const ListPage = ({ data }): JSX.Element => {
  return (
    <Layout title={'Posts'}>
      {data.allMarkdownRemark.edges
        .filter((post) => post.node.frontmatter.category)
        .map((post) => (
          <Link key={post.node.id} to={post.node.frontmatter.path}>
            <Card>
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
    </Layout>
  );
};

export default ListPage;

export const pageQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            path
            category
            title
            date
            published
            author
            image
          }
        }
      }
    }
  }
`;
