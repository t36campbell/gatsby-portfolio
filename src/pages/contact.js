import React from "react"
import Layout from "../components/layout/index"
import SEO from "../components/seo/index"
import Container from "../components/container/index"
import { css } from "@emotion/core"

const ContactPage = () => {
  const flex_form = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    width: "80%",
  })
  const full_width = css({
    flexGrow: ".6",
  })
  return (
    <Layout>
      <SEO title="Contact" />
      <Container>
        <h1>Contact Me</h1>
        <form css={flex_form} name='contact' method='POST' action='https://getform.io/f/779f19d9-dcb1-4a14-82ee-7004061fc1a2' netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="bot-field" />
          <label for="firstName" css={full_width}>
            <h3>First Name</h3>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            css={full_width}
            placeholder="Enter your First Name"
          ></input>
          <label for="lastName">
            <h3>Last Name</h3>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            css={full_width}
            placeholder="Enter your Last Name"
          ></input>
          <label for="email">
            <h3>Email</h3>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            css={full_width}
            placeholder="Enter your Email"
          ></input>
          <label for="phone">
            <h3>Phone</h3>
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            css={full_width}
            placeholder="Enter your Phone #"
          ></input>
          <label for="message">
            <h3>Reason</h3>
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            css={full_width}
            placeholder="Enter a brief description of the reason for your corespondence"
          ></textarea>
          <br></br>
          <button type="submit" value="submit" css={full_width}>
            Submit
          </button>
        </form>
      </Container>
    </Layout>
  )
}
export default ContactPage
