import React, { useState }  from "react"
import Layout from "../components/layout/index"
import SEO from "../components/seo/index"
import Card from "../components/card/index"
import CardBody from "../components/card_body/index"
import CardImg from "../components/card_img/index"
import FeatureCard from "../components/feature_card/index"
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

  const underline = css({
    textDecoration: "underline"
  })
  const featureTitle = css({
    ":hover": underline,
    textDecoration: "none",
    color: "#ccc"
  })
  const postTitle = css({
    ":hover": underline,
    textDecoration: "none",
    color: "#191919"
  })

  const [hover, setHover] = useState(false)

  return (
    <Layout>
      <SEO title="Blog" />
      <Title>Featured Posts</Title>
      <PostContainer>
        {data.allMarkdownRemark.edges
          .filter(
            post =>
              post.node.frontmatter.category === "blog" &&
              post.node.frontmatter.featured === "true"
          )
          .map(post => (
            <FeatureCard 
              key={post.node.id}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <CardImg hover={hover}></CardImg>
              <CardBody hover={hover}>
                <Link 
                  css={featureTitle} 
                  activeStyle={{ textDecoration: "underline" }}
                  to={post.node.frontmatter.path}
                > 
                  <h1>{post.node.frontmatter.title}</h1>
                </Link>
                <p>
                  Posted by {post.node.frontmatter.author} on{" "}
                  {post.node.frontmatter.published}
                </p>
              </CardBody>
            </FeatureCard>
          ))}
      </PostContainer>
      <br></br>
      <br></br>
      <br></br>
      <Title>Latest Posts</Title>
      <PostContainer>
        {data.allMarkdownRemark.edges
          .filter(
            post =>
              post.node.frontmatter.category === "blog" &&
              post.node.frontmatter.featured === "false"
          )
          .map(post => (
            <Card 
            key={post.node.id}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            >
              <CardImg hover={hover}></CardImg>
              <CardBody hover={hover}>
                <Link 
                  css={postTitle} 
                  activeStyle={{ textDecoration: "underline" }}
                  to={post.node.frontmatter.path}
                > 
                  <h1>{post.node.frontmatter.title}</h1>
                </Link>
                <p>
                  Posted by {post.node.frontmatter.author} on{" "}
                  {post.node.frontmatter.published}
                </p>
              </CardBody>
            </Card>
          ))}
      </PostContainer>
    </Layout>
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
            featured
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
