/* eslint-disable no-use-before-define */
import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import Layout from '@components/layout/Layout';
import Card from '@components/card/Card';
import { IGatsbyImageData } from 'gatsby-plugin-image';
interface PageTemplateProps
  extends PageProps<null, { page: string; ctx: PageContext }> {}

const PageTemplate: FC<PageTemplateProps> = ({ pageContext }): JSX.Element => {
  const { ctx, page: path } = pageContext;
  const { title, description, image } = ctx.frontmatter;
  const layout = {
    title,
    description,
    image,
    path,
  };

  const card = {
    full: true,
    image: {
      alt: 'image',
      image: ctx.image.childImageSharp.gatsbyImageData,
    },
  };
  return (
    <Layout {...layout}>
      <Card {...card}>
        <div dangerouslySetInnerHTML={{ __html: ctx.html }} />
      </Card>
    </Layout>
  );
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
