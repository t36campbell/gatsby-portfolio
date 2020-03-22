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
    margin: 1rem;
    padding: 1rem;
    font-size: 1rem;
    color: #191919;
    height: 100%;
    width:  100%;
    border-radius: 36px;
    background: linear-gradient(145deg, #b8b8b8, #dadada);
    box-shadow:  6px 6px 12px #838383, 
             -6px -6px 12px #ffffff;
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
