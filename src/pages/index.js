import React from "react"
import { Link } from "gatsby"
import Main_Layout from "../components/main_layout/index"
import SEO from "../components/seo/index"
import Signature from "../components/signature/index"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Card } from 'antd';

const IndexPage = () => {
  const Signature_Container = styled.div`
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fill, 94%);
    @media (max-width: 992px) {
      grid-template-columns: repeat(auto-fill, 90%);
    }
  `
  const Info_Container = styled.div`
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
    transition: all 1000ms;
    overflow: hidden;
    border-color: #212121;
    @media (max-width: 992px) {
      font-size: .81rem;
    }
  `
  const full_width = css({
    width: "100%",
    textAlign: "center",
  })
  const intro = css({
    margin: "16px",
    textAlign: "justified"
  })
  const underline = css({
    textDecoration: "underline",
    color: "#ccc",
    background: "#242424",
  })
  const cta = css({
    textDecoration: "underline",
    background: "#8a4baf", 
  })
  const button_styles = css({
    ":hover": underline,
    textDecoration: "none",
    width: "30%",
    backgroundColor: "#191919",
    color: "#ccc",
    transition: "all 1000ms",
  })
  const post_styles = css({
    ":hover": underline,
    textDecoration: "none",
    width: "30%",
    backgroundColor: "#191919",
    textDecoration: "none",
    color: "#ccc",
    transition: "all 1000ms",
  })
  const project_styles = css({
    ":hover": cta,
    textDecoration: "none",
    width: "30%",
    background: "#663399",
    boxShadow:  "0 18px 36px rgba(0, 0, 0, 075)",
    textDecoration: "none",
    color: "#191919",
    transition: "all 1000ms",
  })
  const resume_styles = css({
    ":hover": underline,
    textDecoration: "none",
    color: "#ccc",
    transition: "all 1000ms",
  })
  const chart = css({
    width: "100%",
    height: "auto",
    maxWidth: "900px",
    margin: "16px",
    marginTop: "0"
  })
  const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;
  `
  return (
    <Main_Layout>
      <SEO title="Home" />
        <Signature_Container>
          <Styled_Card
            hoverable
            theme="dark"
          >
            <Signature></Signature>
            <div css={full_width}>
              <a css={resume_styles} href={'/Tyler Campbell Resume (2020).pdf'} target="_blank">
                <button css={button_styles}>Resume</button>
              </a>
              <Link to="/projects">
                <button css={project_styles}>Projects</button>
              </Link>
              <Link to="/blog">
                <button css={post_styles}>Posts</button>
              </Link>
            </div>
          </Styled_Card>
        </Signature_Container>
        <br></br>
        <Info_Container>
          <Styled_Card
            hoverable
            theme="dark"
          >
            <Title>A Little About Me</Title>
            <p css={intro}>
              I'm an aspiring web developer with a background in IT and Avionics. I served 4 years in the U.S. 
              Air Force, after which I enrolled full-time as a student at Capella University, where I am currently 
              pursing a Bachelor of Science degree in Information Technology with a specialization in Web 
              Application Development. I have been programming as a hobby for roughly 6 years and have a passion for 
              all things IT, especially building & fixing computers, not to mention programming.
            </p>   
          </Styled_Card>
          <Styled_Card
            hoverable
            theme="dark"
          >
            <Title>What I've Been Working on</Title>
            <a href="https://wakatime.com" css={full_width}>
              <img 
              css={chart} 
              alt="wakatime chart"
              src="https://wakatime.com/share/@738aac7f-8868-4bc3-a1df-4c36703ee4b6/54fa2a91-72bb-446a-a124-cb2c4aa8c1ee.png"/>
            </a>     
          </Styled_Card>
        </Info_Container>
    </Main_Layout>
  )
}
export default IndexPage
