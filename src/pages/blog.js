import React from "react"
import { graphql } from "gatsby"
import Main_Layout from "../components/main_layout/index"
import SEO from "../components/seo/index"
import Link from "gatsby-link"
import styled from "@emotion/styled"
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
    transition: all 500ms;
    overflow: hidden;
  `
  return (
    <Main_Layout>
      <SEO title="Posts" />
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
                <h2>{post.node.frontmatter.title}</h2>
                <p>
                  Posted by {post.node.frontmatter.author} on{" "}
                  {post.node.frontmatter.published}
                </p>
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
