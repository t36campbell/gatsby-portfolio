import React from "react"
import Main_Layout from "../components/main_layout/index"
import SEO from "../components/seo/index"
import Link from "gatsby-link"
import { graphql } from 'gatsby'
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const BlogPage = ({ data }) => {
  const Title = styled.h1`
    text-align: center;
  `
  const PostContainer = styled.div`
    display: grid;
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
    grid-template-columns: repeat(auto-fill, 45%);
    @media (max-width: 800px) {
      grid-template-columns: repeat(auto-fill, 100%);
    }
  `
  const card_props = props =>
    css`
      background: ${props.bg};
      color: ${props.txt};
    `
  const Card = styled.div`
    ${card_props};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    font-size: 1rem;
    height: 100%;
    width: 100%;
    border-radius: 36px;
    transition: all 500ms;
    overflow: hidden;
  `
  const underline = css({
    textDecoration: "underline"
  })
  const reg_title = css({
    '&:hover,&:focus': underline,
    textDecoration: "none",
    color: "#191919"
  })
  const feature_title = css({
    '&:hover,&:focus': underline,
    textDecoration: "none",
    color: "#ccc"
  })
  return (
    <Main_Layout>
      <SEO title="Blog" />
      <Title>Latest Posts</Title>
      <PostContainer>
        {data.allMarkdownRemark.edges
          .filter(
            post =>
              post.node.frontmatter.category === "blog"
          )
          .map(post => (
            <Card key={post.node.id} 
              bg="linear-gradient(145deg,rgb(184, 184, 184, 0.9),rgb(218, 218, 218, 0.81));"
              txt="#191919;"
            >
              <Link css={reg_title} to={post.node.frontmatter.path}>
                <h2>{post.node.frontmatter.title}</h2>
              </Link>
              <p>
                Posted by {post.node.frontmatter.author} on{" "}
                {post.node.frontmatter.published}
              </p>
            </Card>
          ))}
      </PostContainer>
    </Main_Layout>
  )
}
export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___published], order: [DESC] }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            category
            title
            published
            author
          }
        }
      }
    }
  }
`

export default BlogPage
