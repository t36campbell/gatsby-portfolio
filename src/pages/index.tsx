import React, { FC } from 'react';
import { graphql, PageProps, Link } from 'gatsby';
import SEO from '@components/seo/seo';
import Signature from '@components/signature/signature';
import Layout from '@components/layout/layout';
import Card from '@components/card/card';
import Waka from '@components/waka/waka';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Tile from '@src/components/tile/tile';
import useMediaQuery from '@src/hooks/media-query';

// eslint-disable-next-line no-use-before-define
interface IndexProps extends PageProps<QueryResult> {}

const transitionStyles = 'transition-all ease-in-out duration-600';
const styledButton = (color: string) =>
  `w-full ${color} py-.5 px-1 lg:py-2 lg:px-4 rounded shadow-md text:xs md:text-md lg:text-xl ${transitionStyles}`;

const defaultBtnStyles = 'bg-dracula-darker-800 hover:bg-dracula-darker-700';
const ctaBtnStyles = 'bg-dracula-purple-900 hover:bg-dracula-purple-800';
const headerStyles = 'text-xl text-center pb-3';

const IndexPage: FC<IndexProps> = ({ data }: IndexProps) => {
  const queryMatch = useMediaQuery('(min-width: 1024px)');
  const mid = Math.ceil(data.featured.edges.length / 2);
  const featuredPosts = data.featured.edges.map((post) => (
    <Tile
      key={post.node.id}
      frontmatter={post.node.frontmatter}
      image={{
        alt: 'image',
        image: post.node.image?.childImageSharp.gatsbyImageData,
      }}
    />
  ));

  const leftHalf = featuredPosts.slice(0, mid);
  const rightHalf = featuredPosts.slice(mid, data.featured.edges.length);

  return (
    <Layout>
      <Card full>
        <Signature />
        <div className='flex align-items-center justify-around my-6'>
          <Link aria-label='/blog' to='/blog' className='w-1/4'>
            <button
              aria-label='link to posts'
              className={styledButton(defaultBtnStyles)}
            >
              Posts
            </button>
          </Link>
          <a
            href='/Tyler Campbell Resume (2024).pdf'
            aria-label='Tyler Campbell Resume'
            className='w-1/4'
            target='_blank'
            rel='noreferrer'
          >
            <button
              aria-label='link to resume'
              className={styledButton(ctaBtnStyles)}
            >
              Resume
            </button>
          </a>
          <Link aria-label='/projects' to='/projects' className='w-1/4'>
            <button
              aria-label='link to projects'
              className={styledButton(defaultBtnStyles)}
            >
              Projects
            </button>
          </Link>
        </div>
      </Card>
      {queryMatch ? (
        <>
          <div className='h-min grid gap-6'>
            <Card>
              <h1 className={headerStyles}>
                What I&apos;ve Been Working on&#58;
              </h1>
              <div className='text-center mb-3'>
                Check out my projects on&nbsp;
                <a
                  href='https://github.com/t36campbell'
                  aria-label='github.com/t36campbell'
                  className='hover:underline'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>
              </div>
              <div className='mx-3'>
                <Waka />
              </div>
            </Card>
            {leftHalf}
          </div>
          <div className='h-min grid gap-6'>
            <Card>
              <h1 className={headerStyles}>What I&apos;m Doing Now&#58;</h1>
              <div
                className='mx-3 -my-3'
                dangerouslySetInnerHTML={{ __html: data.about.html }}
              />
            </Card>
            {rightHalf}
          </div>
        </>
      ) : (
        <>
          <div className='h-min grid gap-6'>
            <Card>
              <h1 className={headerStyles}>
                What I&apos;ve Been Working on&#58;
              </h1>
              <div className='text-center mb-3'>
                Check out my projects on&nbsp;
                <a
                  href='https://github.com/t36campbell'
                  aria-label='github.com/t36campbell'
                  className='hover:underline'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>
              </div>
              <div className='mx-3'>
                <Waka />
              </div>
            </Card>
            <Card>
              <h1 className={headerStyles}>What I&apos;m Doing Now&#58;</h1>
              <div
                className='mx-3 -my-3'
                dangerouslySetInnerHTML={{ __html: data.about.html }}
              />
            </Card>
          </div>
          <div className='h-min grid gap-6'>{featuredPosts}</div>
        </>
      )}
    </Layout>
  );
};

export const postQuery = graphql`
  query IndexContent($path: String) {
    about: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
      }
    }
    featured: allMarkdownRemark(
      limit: 6
      filter: { frontmatter: { featured: { eq: "true" } } }
      sort: { frontmatter: { order: ASC } }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            category
            price
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
  }
`;

export const Head = ({ data }: IndexProps) => {
  const { description, path } = data.about.frontmatter;
  const seo = { title: 'Home', description, path };
  return <SEO {...seo} />;
};

interface Edges {
  node: {
    id: string;
    frontmatter: {
      path: string;
      category: string;
      price?: number;
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
  about: {
    html: any;
    frontmatter: {
      path: string;
      title: string;
      description: string;
    };
  };
  featured: {
    edges: Edges[];
  };
}

export default IndexPage;
