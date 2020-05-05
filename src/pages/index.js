import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/index"
import SEO from "../components/seo/index"
import Container from "../components/container/index"
import Signature from "../components/signature/index"
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
    width: 100%;
    overflow: hidden;
  `
  const full_width = css({
    width: "100%",
    textAlign: "center",
  })
  const intro = css({
    width: "90%",
    marginTop: "-.5rem"
  })
  const button_width = css({
    width: "25%",
    minWidth: "125px",
    backgroundColor: "#000",
    color: "#ccc"
  })
  const link_styles = css({
    textDecoration: "none",
    color: "#ccc"
  })
  const chart = css({
    width: "100%",
    height: "auto",
    maxWidth: "900px"
  })
  
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <IntroContainer>
          <Signature></Signature>
          <h3>A Little About Me</h3>
          <p css={intro}>
            I'm an aspiring web developer with a background in IT and Avionics. I served 4 years in the U.S. 
            Air Force, after which I enrolled full-time as a student at Capella University, where I am currently 
            pursing a Bachelor of Science degree in Information Technology with a specialization in Web 
            Application Development. I have been programming as a hobby for roughly 6 years and have a passion for 
            all things IT, especially building & fixing computers, not to mention programming.
          </p>
          <button css={button_width}><a css={link_styles} href={'/Tyler Campbell Resume.pdf'} download>View Resume</a></button>
          <h3>Checkout What I've Been Working on</h3>
            <div css={full_width}>
              <Link to="/projects">
                <button css={button_width}>Latest Projects</button>
              </Link>
              <Link to="/blog">
                <button css={button_width}>Latest Posts</button>
              </Link>
            </div>
          <a href="https://wakatime.com" css={full_width}>
            <img css={chart} src="https://wakatime.com/share/@738aac7f-8868-4bc3-a1df-4c36703ee4b6/46acd07a-cacf-4ae7-aeb2-5abf1dcf7d14.png" />
          </a>
          <br></br>
          
        </IntroContainer>
      </Container>
    </Layout>
  )
}
export default IndexPage
