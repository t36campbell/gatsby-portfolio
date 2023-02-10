import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '@components/layout/Layout';
import Card from '@components/card/Card';

// eslint-disable-next-line no-use-before-define
interface PageTemplateProps extends PageProps<QueryResult> {}

const PageTemplate: FC<PageTemplateProps> = ({
  data,
}: PageTemplateProps): JSX.Element => {
  const frontmatter = data.markdownRemark.frontmatter;
  return (
    <Layout {...frontmatter}>
      <Card full={true}>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Card>
    </Layout>
  );
};

export default PageTemplate;

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

interface QueryResult {
  markdownRemark: {
    html: string;
    frontmatter: {
      path: string;
      title: string;
      author: string;
      date: string;
      published: string;
      description: string;
      image: string;
      link: string;
      repo: string;
    };
  };
}
