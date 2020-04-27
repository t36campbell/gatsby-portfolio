import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout/index"
import SEO from "../components/seo/index"
import Container from "../components/container/index"

export default function Template({ data }) {
  const post = data.markdownRemark
  const styled_project = {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    width: "90%",
  }
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container>
        <h1>{post.frontmatter.title}</h1>
        <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
        <div
          style={styled_project}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Link to="/projects">Go Back</Link>
      </Container>
    </Layout>
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
        date
      }
    }
  }
`
