import React from "react"
import Main_Layout from "../components/main_layout/index"
import SEO from "../components/seo/index"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Card } from 'antd';

const ContactPage = () => {
  const full_width = css({
    width: "100%"
  })
  const button_width = css({
    width: "100%",
    minWidth: "125px",
    backgroundColor: "#191919",
    color: "#ccc"
  })
  const ContactContainer = styled.div`
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fill, 94%);
    @media (max-width: 992px) {
      grid-template-columns: repeat(auto-fill, 90%);
    }
  `
  const Styled_Card = styled(Card)`
    font-size: 1rem;
    transition: all 500ms;
    overflow: hidden;
  `
  return (
    <Main_Layout>
      <SEO title="Contact" />
      <ContactContainer>
        <Styled_Card
          hoverable
          theme="dark"
        >
          <h1>Contact Me</h1>
          <form name='contact' method='POST' netlify-honeypot="bot-field" data-netlify="true">
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
          </Styled_Card>
      </ContactContainer>
    </Main_Layout>
  )
}
export default ContactPage
