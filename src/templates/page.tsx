/* eslint-disable no-use-before-define */
import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import SEO from '@components/seo/seo';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Layout from '@components/layout/layout';
import Card from '@components/card/card';
interface PageTemplateProps
  extends PageProps<null, { page: string; ctx: PageContext }> {}

const PageTemplate: FC<PageTemplateProps> = ({ pageContext }) => {
  const { ctx } = pageContext;
  const card = {
    full: true,
    image: {
      alt: 'image',
      image: ctx.image.childImageSharp.gatsbyImageData,
    },
  };
  return (
    <Layout>
      <Card {...card}>
        <div className='flex justify-between text-3xl'>
          <h1>{ctx.frontmatter.title}</h1>
          <h3>{ctx.frontmatter.published}</h3>
        </div>
        <br></br>
        <div dangerouslySetInnerHTML={{ __html: ctx.html }} />
      </Card>
    </Layout>
  );
};

export const Head = ({ pageContext }: PageTemplateProps) => {
  const { ctx, page: path } = pageContext;
  const { title, description, image } = ctx.frontmatter;
  const seo = {
    title,
    description,
    image,
    path,
  };
  return <SEO {...seo} />;
};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
interface PageQuery {}

interface BlogFrontmatter {
  path: string;
  category: string;
  date: string;
  published: string;
  title: string;
  author: string;
  description: string;
  image: string;
}

interface ProjectFrontmatter extends BlogFrontmatter {
  link: string;
  repo: string;
}
interface PageContext {
  html: string;
  frontmatter: BlogFrontmatter | ProjectFrontmatter;
  image: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

export default PageTemplate;
