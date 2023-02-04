import React from 'react';
import { graphql } from 'gatsby';
import SEO from '@/components/seo/seo';
import Layout from '@/components/layout/Layout';
import Card from '@/components/card/Card';

const ProjectPageTemplate = ({ data }): JSX.Element => {
  const post = data.markdownRemark;
  return (
    <Layout title={post.frontmatter.title}>
      <Card full={true}>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Card>
    </Layout>
  );
};

export default ProjectPageTemplate;

export const postQuery = graphql`
  query PageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        published
        description
        image
        link
        repo
      }
    }
  }
`;
