import React from "react"
import Layout from "../components/layout/index"
import SEO from "../components/seo/index"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const ContactPage = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    font-size: 1rem;
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
  const flex_form = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    width: "75%",
  })
  const full_width = css({
    flexGrow: ".6",
  })
  const button_width = css({
    alignSelf: "center",
    width: "25%",
    minWidth: "125px",
    backgroundColor: "#191919",
    color: "#ccc"
  })
  return (
    <Layout>
      <SEO title="Contact" />
      <Container>
        <h1>Contact Me</h1>
        <form css={flex_form} name='contact' method='POST' netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="bot-field" />
          <label for="firstName" css={full_width}>
            <h3>First Name:</h3>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            css={full_width}
            placeholder="Enter your First Name"
          ></input>
          <label for="lastName">
            <h3>Last Name:</h3>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            css={full_width}
            placeholder="Enter your Last Name"
          ></input>
          <label for="email">
            <h3>Email:</h3>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            css={full_width}
            placeholder="Enter your Email"
          ></input>
          <label for="phone">
            <h3>Phone:</h3>
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            css={full_width}
            placeholder="Enter your Phone #"
          ></input>
          <label for="message">
            <h3>Reason:</h3>
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            css={full_width}
            placeholder="Enter a brief description of the reason for your corespondence"
          ></textarea>
          <br></br>
          <button type="submit" value="submit" css={button_width}>
            Submit
          </button>
        </form>
      </Container>
    </Layout>
  )
}
export default ContactPage
