import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from 'gatsby-link'
import styled from "@emotion/styled"

export default function Template({ data }) {
  const post = data.markdownRemark
  const PostCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000;
    opacity: 0.81;
    margin: 1rem;
    padding: 1rem;
    font-size: 1rem;
    color: #c6c6c6;
    height: 100%;
    width:  100%;
    border-radius: 4px;
    transition: all 500ms;
    overflow: hidden;
  `
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
        <PostCard>
        <h1>{post.frontmatter.title}</h1>
        <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link to="/blog/">Go Back</Link>
        </PostCard>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
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
