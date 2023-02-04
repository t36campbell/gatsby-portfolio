import React, { FC } from 'react';
import { graphql, PageProps, Link } from 'gatsby';
import Signature from '@components/signature/signature';
import Layout from '@/components/layout/Layout';
import Card from '@/components/card/Card';
import Waka from '@/components/waka/Waka';

// eslint-disable-next-line no-use-before-define
interface IndexProps extends PageProps<QueryResult> {}

const styledButton = (color: string) =>
  `w-full ${color} py-.5 px-1 lg:py-2 lg:px-4 rounded shadow-md text:xs md:text-md lg:text-xl`;

const defaultBtn = 'bg-dracula-darker-800 hover:bg-dracula-darker-700';
const ctaBtn = 'bg-dracula-purple-900 hover:bg-dracula-purple-800';

const IndexPage = ({ data }: FC<IndexProps>) => {
  const post = data.markdownRemark;
  return (
    <Layout title='Home'>
      <Card full={true}>
        <Signature />
        <div className='flex align-items-center justify-around my-6'>
          <Link to='/blog' className='w-1/4'>
            <button className={styledButton(defaultBtn)}>Posts</button>
          </Link>
          <Link to='/projects' className='w-1/4'>
            <button className={styledButton(ctaBtn)}>Projects</button>
          </Link>
          <a
            href='/Tyler Campbell Resume (2022).pdf'
            className='w-1/4'
            target='_blank'
            rel='noreferrer'
          >
            <button className={styledButton(defaultBtn)}>Resume</button>
          </a>
        </div>
      </Card>
      <Card>
        <h3>{post.frontmatter.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Card>
      <Card>
        <h3>What I&apos;ve Been Working on&#58;</h3>
        <Waka />
      </Card>
    </Layout>
  );
};
export const postQuery = graphql`
  query AboutPostByPath($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        published
        image
        link
      }
    }
  }
`;

export default IndexPage;
interface QueryResult {
  markdownRemark: {
    html: any;
    frontmatter: {
      path: string;
      title: string;
      author: string;
      published: string;
      image: string;
      link: string;
    };
  };
}
