import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from 'gatsby-link'

const ProjectPage = ({ data }) => (
  <Layout>
    <SEO title="Projects" />
    <h1>Latest Projects</h1>
    {data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.category === "project").map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          Posted by {post.node.frontmatter.author} on{' '}
          {post.node.frontmatter.date}
        </small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query ProjectIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            category
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
