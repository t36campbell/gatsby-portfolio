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
  })
  const button_width = css({
    width: "25%",
    minWidth: "125px",
    backgroundColor: "#000",
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            aliquam id diam maecenas ultricies mi eget. Dui vivamus arcu felis
            bibendum ut. Sem viverra aliquet eget sit amet tellus. Pharetra
            magna ac placerat vestibulum lectus mauris ultrices eros in. Amet
            est placerat in egestas. Potenti nullam ac tortor vitae purus
            faucibus ornare suspendisse sed. Aliquet nec ullamcorper sit amet
            risus nullam eget felis. Tincidunt vitae semper quis lectus nulla at
            volutpat. Eget nulla facilisi etiam dignissim diam. Consectetur
            libero id faucibus nisl. Justo nec ultrices dui sapien. Donec massa
            sapien faucibus et molestie ac. Est ante in nibh mauris cursus
            mattis.
          </p>
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
