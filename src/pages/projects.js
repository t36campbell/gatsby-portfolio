import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import FeatureCard from "../components/feature_card"
import Link from "gatsby-link"
import styled from "@emotion/styled"

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
  return (
    <Layout>
      <SEO title="Projects" />
      <Title>Featured Project</Title>
      <ProjectContainer>
        {data.allMarkdownRemark.edges
          .filter(post => post.node.frontmatter.category === "project" && 
          post.node.frontmatter.featured === "true")
          .map(post => (
            <FeatureCard key={post.node.id}>
              <h1>{post.node.frontmatter.title}</h1>
              <p>
                Posted by {post.node.frontmatter.author} on{" "}
                {post.node.frontmatter.date}
              </p>
              <Link to={post.node.frontmatter.path}>Read More</Link>
            </FeatureCard>
          ))}
      </ProjectContainer>
      <br></br>
      <br></br>
      <br></br>
      <Title>Latest Projects</Title>
      <ProjectContainer>
        {data.allMarkdownRemark.edges
          .filter(post => post.node.frontmatter.category === "project")
          .map(post => (
            <Card key={post.node.id}>
              <h1>{post.node.frontmatter.title}</h1>
              <p>
                Posted by {post.node.frontmatter.author} on{" "}
                {post.node.frontmatter.date}
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
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            category
            featured
            title
            date
            author
          }
        }
      }
    }
  }
`

export default ProjectPage
