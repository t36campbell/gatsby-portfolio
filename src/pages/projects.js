import React from "react"
import Layout from "../components/layout/index"
import SEO from "../components/seo/index"
import Link from "gatsby-link"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const ProjectPage = ({ data }) => {
  const Title = styled.h1`
    text-align: center;
  `
  const ProjectContainer = styled.div`
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
  return (
    <Layout>
      <SEO title="Projects" />
      <Title>Featured Project</Title>
      <ProjectContainer>
        {data.allMarkdownRemark.edges
          .filter(
            post =>
              post.node.frontmatter.category === "project" &&
              post.node.frontmatter.featured === "true"
          )
          .map(post => (
            <Card key={post.node.id} 
              bg="linear-gradient(145deg, rgb(1, 1, 1, 0.9), rgb(1, 1, 1, 0.81));"
              txt="#ccc;"
            >
              <h3>{post.node.frontmatter.title}</h3>
              <p>
                Posted by {post.node.frontmatter.author} on{" "}
                {post.node.frontmatter.published}
              </p>
              <Link to={post.node.frontmatter.path}>Read More</Link>
            </Card>
          ))}
      </ProjectContainer>
      <br></br>
      <br></br>
      <br></br>
      <Title>Latest Projects</Title>
      <ProjectContainer>
        {data.allMarkdownRemark.edges
          .filter(
            post =>
              post.node.frontmatter.category === "project" &&
              post.node.frontmatter.featured === "false"
          )
          .map(post => (
            <Card key={post.node.id} 
              bg="linear-gradient(145deg,rgb(184, 184, 184, 0.9),rgb(218, 218, 218, 0.81));"
              txt="#191919;"
            >
              <h3>{post.node.frontmatter.title}</h3>
              <p>
                Posted by {post.node.frontmatter.author} on{" "}
                {post.node.frontmatter.published}
              </p>
              <Link to={post.node.frontmatter.path}>Read More</Link>
            </Card>
          ))}
      </ProjectContainer>
    </Layout>
  )
}
export const pageQuery = graphql`
  query ProjectIndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___published], order: [DESC] }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            category
            featured
            title
            published
            author
            image 
          }
        }
      }
    }
  }
`

export default ProjectPage
