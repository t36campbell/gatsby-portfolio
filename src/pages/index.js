import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/"
import SEO from "../components/SEO/"
import Container from "../components/Container/"
import Signature from "../components/Signature/"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const IndexPage = () => {
  const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    font-size: 1rem;
    height: 100%;
    width:  100%;
    overflow: hidden;
  `
  const full_width = css({
    width: "100%",
    textAlign: "center"
  })
  const button_width = css({
    width: "25%"
  })
  return(
  <Layout>
    <SEO title="Home" />
    <Container>
      <Signature></Signature>
      <br></br>
      <IntroContainer>
        <h1 css={full_width}>Web Developer</h1>
        <div css={full_width}>
          <Link to="/projects"><button css={button_width}>Latest Projects</button></Link>
          <Link to="/blog"><button css={button_width}>Latest Posts</button></Link>
        </div>
      </IntroContainer>
    </Container>  
  </Layout>
  )
}
export default IndexPage
