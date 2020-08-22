import React from "react"
import Layout from "../components/layout/index"
import SEO from "../components/seo/index"
import Link from "gatsby-link"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Card } from 'antd';
import "antd/dist/antd.css";

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
  const Card_Template = styled(Card)`
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
    <Layout>
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
            <Card_Template
              hoverable
              key={post.node.id} 
              bg="linear-gradient(145deg, rgb(1, 1, 1, 0.9), rgb(1, 1, 1, 0.81));"
              txt="#ccc;"
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Link css={feature_title} to={post.node.frontmatter.path}>
                <h2>{post.node.frontmatter.title}</h2>
              </Link>
              <p>
                Posted by {post.node.frontmatter.author} on{" "}
                {post.node.frontmatter.published}
              </p>
            </Card_Template>
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
            <Card_Template
              hoverable
              key={post.node.id} 
              bg="linear-gradient(145deg,rgb(184, 184, 184, 0.9),rgb(218, 218, 218, 0.81));"
              txt="#191919;"
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Link css={reg_title} to={post.node.frontmatter.path}>
                <h2>{post.node.frontmatter.title}</h2>
              </Link>
              <p>
                Posted by {post.node.frontmatter.author} on{" "}
                {post.node.frontmatter.published}
              </p>
              </Card_Template>
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
