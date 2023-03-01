import React, { FC } from 'react';
import { graphql, PageProps, Link } from 'gatsby';
import SEO from '@components/seo/seo';
import Signature from '@components/signature/signature';
import Layout from '@components/layout/layout';
import Card from '@components/card/card';
import Waka from '@components/waka/waka';

// eslint-disable-next-line no-use-before-define
interface IndexProps extends PageProps<QueryResult> {}

const styledButton = (color: string) =>
  `w-full ${color} py-.5 px-1 lg:py-2 lg:px-4 rounded shadow-md text:xs md:text-md lg:text-xl`;

const defaultBtnStyles = 'bg-dracula-darker-800 hover:bg-dracula-darker-700';
const ctaBtnStyles = 'bg-dracula-purple-900 hover:bg-dracula-purple-800';
const headerStyles = 'text-xl text-center pb-3';

const replaceName = 'Tyler Campbell | ';

const IndexPage: FC<IndexProps> = ({ data }: IndexProps): JSX.Element => {
  const frontmatter = data.markdownRemark.frontmatter;
  return (
    <Layout {...frontmatter}>
      <Card full>
        <Signature />
        <div className='flex align-items-center justify-around my-6'>
          <Link to='/blog' className='w-1/4'>
            <button className={styledButton(defaultBtnStyles)}>Posts</button>
          </Link>
          <Link to='/projects' className='w-1/4'>
            <button className={styledButton(ctaBtnStyles)}>Projects</button>
          </Link>
          <a
            href='/Tyler Campbell Resume (2023).pdf'
            className='w-1/4'
            target='_blank'
            rel='noreferrer'
          >
            <button className={styledButton(defaultBtnStyles)}>Resume</button>
          </a>
        </div>
      </Card>
      <Card>
        <h1 className={headerStyles}>
          {frontmatter.title.replace(replaceName, '')}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Card>
      <Card>
        <h1 className={headerStyles}>What I&apos;ve Been Working on&#58;</h1>
        <Waka />
      </Card>
    </Layout>
  );
};

export const postQuery = graphql`
  query AboutPost($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
      }
    }
  }
`;

export const Head = ({ data }: IndexProps) => {
  const { description, path } = data.markdownRemark.frontmatter;
  const seo = { title: 'Home', description, path };
  return <SEO {...seo} />;
};

interface QueryResult {
  markdownRemark: {
    html: any;
    frontmatter: {
      path: string;
      title: string;
      description: string;
    };
  };
}

export default IndexPage;
