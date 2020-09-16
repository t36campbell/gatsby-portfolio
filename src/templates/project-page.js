import React from "react"
import Main_Layout from "../components/main_layout/index"
import SEO from "../components/seo/index"
import Link from "gatsby-link"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Card } from 'antd';

export default function Template({ data }) {
  const post = data.markdownRemark
  const PostContainer = styled.div`
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fill, 94%);
    @media (max-width: 992px) {
      grid-template-columns: repeat(auto-fill, 90%);
    }
  `
  const Styled_Card = styled(Card)`
    font-size: 1rem;
    transition: all 1000ms;
    overflow: hidden;
    border-color: #212121;
    @media (max-width: 992px) {
      font-size: .81rem;
    }
  `
  const underline = css({
    textDecoration: "underline",
  })
  const full_width = css({
    width: "100%",
    textAlign: "center",
  })
  const button_styles = css({
    ":hover": underline,
    width: "25%",
    minWidth: "125px",
    background: "linear-gradient(145deg, #9450bb, #7c449e)",
    boxShadow:  "0 18px 36px rgba(0, 0, 0, 075)",
    textDecoration: "none",
    color: "#191919",
  })
  const link_styles = css({
    ":hover": underline,
    textDecoration: "none",
    color: "#191919",
    textAlign: "center"
  })
  const Title = styled.h1`
    text-align: center;
    font-size: 1.2rem;
    @media (max-width: 992px) {
      font-size: 1rem;
    }
  `
  const subtitle_styles = css({
    textAlign: "center"
  })
  const back_styles = css({
    ":hover": underline,
    textDecoration: "none",
    width: "25%",
    minWidth: "125px",
    backgroundColor: "#191919",
    textDecoration: "none",
    color: "#ccc",
  })
  return (
    <Main_Layout>
      <SEO title={post.frontmatter.title} />
      <PostContainer>
        <Styled_Card
          hoverable
          theme="dark" 
          key={post.id}
          cover={<img alt={post.frontmatter.image} src={post.frontmatter.image} />}
        >
          <Title>{post.frontmatter.title}</Title>
          <p css={subtitle_styles}>
            Posted by {post.frontmatter.author} on {post.frontmatter.published}
          </p>
          <div css={full_width}>
            <a css={link_styles} href={post.frontmatter.link} target="_blank">
              <button css={button_styles}>View Live</button>
            </a>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.html }}/>
          <div css={full_width}>
            <Link to="/projects">
              <button css={back_styles}>Go Back</button>
            </Link>
          </div>
        </Styled_Card>
      </PostContainer>
    </Main_Layout>
  )
}

export const postQuery = graphql`
  query ProjectPostByPath($path: String!) {
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
`
