import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo/seo';
import Layout from '@/components/layout/Layout';

const ProjectPageTemplate = ({ data }): JSX.Element => {
  const post = data.markdownRemark;
  return (
    <Layout title={post.frontmatter.title}>
      {/* <PostContainer>
        <StyledCard key={post.id}>
          <Title>{post.frontmatter.title}</Title>
          <h3 css={subtitle_styles}>
            Posted by {post.frontmatter.author} on {post.frontmatter.published}
          </h3>
          <div css={full_width}>
            <div css={flex_col}>
              <Link to="/projects">
                <button css={back_styles}>Go Back</button>
              </Link>
            </div>
            <div css={flex_col}>
              <a
                css={link_styles}
                href={post.frontmatter.link}
                target="_blank"
                rel="noreferrer"
              >
                <button css={button_styles}>View Live</button>
              </a>
            </div>
            <div css={flex_col}>
              <a
                css={link_styles}
                href={post.frontmatter.repo}
                target="_blank"
                rel="noreferrer"
              >
                <button css={back_styles}>See Code</button>
              </a>
            </div>
          </div>
          <div
            css={body_margins}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </StyledCard>
      </PostContainer> */}
    </Layout>
  );
};

export default ProjectPageTemplate;

export const postQuery = graphql`
  query ProjectPostByPath($path: String!) {
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
