import React from "react"
import Main_Layout from "../components/main_layout/index"
import SEO from "../components/seo/index"
import Link from "gatsby-link"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Card } from 'antd';

const ProjectPage = ({ data }) => {
  const Title = styled.h1`
    text-align: center;
  `
  const ProjectContainer = styled.div`
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
      <SEO title="Projects" />
      <Title>Featured Projects</Title>
      <ProjectContainer>
        {data.allMarkdownRemark.edges
          .filter(
            post =>
              post.node.frontmatter.category === "project" &&
              post.node.frontmatter.featured === "true"
          )
          .map(post => (
            <Styled_Card
              hoverable
              theme="dark" 
              key={post.node.id}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Link to={post.node.frontmatter.path}>
                <h2>{post.node.frontmatter.title}</h2>
              </Link>
              <p>
                Posted by {post.node.frontmatter.author} on{" "}
                {post.node.frontmatter.published}
              </p>
            </Styled_Card>
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
            <Styled_Card
              hoverable
              theme="dark" 
              key={post.node.id}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Link to={post.node.frontmatter.path}>
                <h2>{post.node.frontmatter.title}</h2>
              </Link>
              <p>
                Posted by {post.node.frontmatter.author} on{" "}
                {post.node.frontmatter.published}
              </p>
              </Styled_Card>
          ))}
      </ProjectContainer>
    </Main_Layout>
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
