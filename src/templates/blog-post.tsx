/** @jsx jsx */
import * as React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled';

import { Card } from 'antd';
import SEO from '../components/seo/index';
import Main_Layout from '../components/main_layout/index';

export default function Template({ data }) {
  const post = data.markdownRemark;
  const PostContainer = styled.div`
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fill, 94%);
    @media (max-width: 992px) {
      grid-template-columns: repeat(auto-fill, 90%);
    }
  `;
  const Styled_Card = styled(Card)`
    font-size: 1rem;
    transition: all 1000ms;
    overflow: hidden;
    border-color: #212121;
    @media (max-width: 992px) {
      font-size: 0.81rem;
    }
  `;
  const Title = styled.h1`
    text-align: center;
    font-size: 1.5rem;
    @media (max-width: 992px) {
      font-size: 1rem;
    }
  `;
  const subtitle_styles = css({
    textAlign: 'center',
  });
  const underline = css({
    textDecoration: 'underline',
    color: '#ccc',
    background: '#242424',
  });
  const full_width = css({
    display: 'flex',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'flex-start',
    marginBottom: '2.5%',
  });
  const flex_col = css({
    marginLeft: '2.5%',
    width: '32%',
  });
  const body_margins = css({
    marginLeft: '2.5%',
    marginRight: '2.5%',
  });
  const back_styles = css({
    '&:hover': underline,
    width: '100%',
    textDecoration: 'none',
    backgroundColor: '#191919',
    color: '#ccc',
    transition: 'all 1000ms',
  });
  return (
    <Main_Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <PostContainer>
        <Styled_Card
          hoverable
          theme="dark"
          key={post.id}
          cover={
            <img alt={post.frontmatter.image} src={post.frontmatter.image} />
          }
        >
          <Title>{post.frontmatter.title}</Title>
          <h3 css={subtitle_styles}>
            Posted by {post.frontmatter.author} on {post.frontmatter.published}
          </h3>
          <div css={full_width}>
            <div css={flex_col}>
              <Link to="/blog">
                <button css={back_styles}>Go Back</button>
              </Link>
            </div>
          </div>
          <div
            css={body_margins}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Styled_Card>
      </PostContainer>
    </Main_Layout>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
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
      }
    }
  }
`;
