import React from "react"
import Link from "gatsby-link"
import Main_Layout from "../components/main_layout/index"
import SEO from "../components/seo/index"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

export default function Template({ data }) {
  const post = data.markdownRemark
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    font-size: 1rem;
    color: #191919;
    height: 100%;
    width: 100%;
    border-radius: 36px;
    background: linear-gradient(
      145deg,
      rgb(184, 184, 184, 0.9),
      rgb(218, 218, 218, 0.81)
    );
    transition: all 500ms;
    overflow: hidden;
  `
  const post_content = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    width: "75%",
  })
  return (
    <Main_Layout>
      <SEO title={post.frontmatter.title} />
      <Container>
        <h1>{post.frontmatter.title}</h1>
        <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.published}
        </h4>
        <div
          css={post_content}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Link to="/projects">Go Back</Link>
      </Container>
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
      }
    }
  }
`
