import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Signature from "../components/signature"
import Container from "../components/container"

const IndexPage = () => {
  return(
  <Layout>
    <SEO title="Home" />
    <Container>
      <Signature></Signature>
    </Container>  
  </Layout>
  )
}
export default IndexPage
