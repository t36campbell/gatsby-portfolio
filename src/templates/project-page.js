import React from "react"
import Main_Layout from "../components/main_layout/index"
import SEO from "../components/seo/index"
import Link from "gatsby-link"
import styled from "@emotion/styled"
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
    transition: all 500ms;
    overflow: hidden;
  `
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
          <h1>{post.frontmatter.title}</h1>
          <h4>
            Posted by {post.frontmatter.author} on {post.frontmatter.published}
          </h4>
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <Link to="/projects">Go Back</Link>
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
      }
    }
  }
`
