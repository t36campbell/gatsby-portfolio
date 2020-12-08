import React from "react"
import { graphql } from "gatsby"
import Main_Layout from "../components/main_layout/index"
import SEO from "../components/seo/index"
import Link from "gatsby-link"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Card } from 'antd';

const BlogPage = ({ data }) => {
  const BlogContainer = styled.div`
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fill, 45%);
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
  const Title = styled.h1`
    font-size: 1.2rem;
    @media (max-width: 992px) {
      font-size: 1rem;
    }
  `
  const Date = styled.p`
    text-align: right;
  `
  const full_width = css({
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  })
  const flex_col = css({
    width: "49%",
  })
  return (
    <Main_Layout>
      <SEO title="Posts" description="Blog posts written by Tyler Campbell"/>
      <BlogContainer>
        {data.allMarkdownRemark.edges
          .filter(
            post =>
              post.node.frontmatter.category === "blog"
          )
          .map(post => (
            <Link to={post.node.frontmatter.path}>
              <Styled_Card
                hoverable
                theme="dark" 
                key={post.node.id}
                cover={<img alt={post.node.frontmatter.image} src={post.node.frontmatter.image} />}
              >
                <div css={full_width}>
                  <div css={flex_col}>
                    <Title>{post.node.frontmatter.title}</Title>
                  </div>
                  <div css={flex_col}>
                    <Date>{post.node.frontmatter.published}</Date>
                  </div>  
                </div>
              </Styled_Card>
            </Link>
          ))}
      </BlogContainer>
    </Main_Layout>
  )
}
export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: [DESC] }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            category
            title
            date
            published
            author
            image
          }
        }
      }
    }
  }
`

export default BlogPage
