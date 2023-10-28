import React, { FC } from 'react';
import SEO from '@components/seo/seo';
import { graphql, Link, PageProps } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Layout from '@components/layout/layout';
import Card from '@components/card/card';

// eslint-disable-next-line no-use-before-define
interface ListTemplateProps extends PageProps<QueryResult> {}

const ListTemplate: FC<ListTemplateProps> = ({ data }: ListTemplateProps) => {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map((post) => (
        <Link key={post.node.id} to={post.node.frontmatter.path}>
          <Card
            image={{
              alt: 'image',
              image: post.node.image.childImageSharp.gatsbyImageData,
            }}
          >
            <h1 className='group-hover/card:underline'>
              {post.node.frontmatter.title}
            </h1>
            <h3>{post.node.frontmatter.published}</h3>
          </Card>
        </Link>
      ))}
    </Layout>
  );
};

export const pageQuery = graphql`
  query ListByCategory($categories: [String!]!, $page: String) {
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
    markdownRemark: markdownRemark(frontmatter: { path: { eq: $page } }) {
      frontmatter {
        path
        title
        description
      }
    }
  }
`;

export const Head = ({ data }: ListTemplateProps) => {
  const seo = data.markdownRemark.frontmatter;
  return <SEO {...seo} />;
};

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
    image: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
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

export default ListTemplate;
