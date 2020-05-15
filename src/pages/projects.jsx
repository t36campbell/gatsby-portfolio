import React, { Component } from "react"
import Layout from "../components/layout/index"
import SEO from "../components/seo/index"
import FeatureCard from "../components/feature_card/index"
import Link from "gatsby-link"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

class ProjectPage extends Component{
  constructor(props) {
    super(props);
    this.toggleHover = this.toggleHover.bind(this);
    this.state = {
      hover: false
    }
  }
  
  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  render() {
    const { data } = this.props;

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
    const Card = styled.div`
      display: flex;
      flex-direction: column;
      margin: 1rem;
      padding: 1rem;
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
    const CardBody = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin: -1rem;
      padding: 1rem;
      font-size: 1rem;
      width: 100%;
      background: transparent;
      z-index: 100;
      overflow: hidden;
      @keyframes animateBody {
        0% {
          height:50%
        }
        100% {
          height: 100%
        }
      }
      ${({ hover }) =>
        hover 
        ? `
        animation: animateBody 500ms ease-in forwards normal;
      `
        : `
        animation: animateBody 500ms ease-out forwards reverse;
      `}
    `
    const CardImg = styled.div`
      margin: -1rem;
      padding: 1rem;
      width: 100%;
      background: purple;
      overflow: hidden;
      @keyframes animateImg {
        0% {
          height:100%
        }
        100% {
          height: 0%
        }
      }
      ${({ hover }) =>
        hover 
        ? `
        animation: animateImg 500ms ease-in forwards normal;
      `
        : `
        animation: animateImg 500ms ease-out forwards reverse;
      `}
    `
    const underline = css({
      textDecoration: "underline"
    })
    const featureTitle = css({
      '&:hover,&:focus': underline,
      textDecoration: "none",
      color: "#ccc"
    })
    const postTitle = css({
      '&:hover,&:focus': underline,
      textDecoration: "none",
      color: "#191919"
    })
    
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
              <FeatureCard 
                key={post.node.id}
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}
              >
                <CardImg hover={this.state.hover}></CardImg>
                <CardBody hover={this.state.hover}>
                  <Link 
                    css={featureTitle}
                    to={post.node.frontmatter.path}
                  > 
                    <h3>{post.node.frontmatter.title}</h3>
                  </Link>
                  <p>
                    Posted by {post.node.frontmatter.author} on{" "}
                    {post.node.frontmatter.published}
                  </p>
                </CardBody>
              </FeatureCard>
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
              <Card 
              key={post.node.id}
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}
              >
                <CardImg hover={this.state.hover}></CardImg>
                <CardBody hover={this.state.hover}>
                  <Link 
                    css={postTitle}
                    to={post.node.frontmatter.path}
                  > 
                    <h3>{post.node.frontmatter.title}</h3>
                  </Link>
                  <p>
                    Posted by {post.node.frontmatter.author} on{" "}
                    {post.node.frontmatter.published}
                  </p>
                </CardBody>
              </Card>
            ))}
        </ProjectContainer>
      </Layout>
    )
  }
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
