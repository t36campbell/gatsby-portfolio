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
          <label css={full_width}>
            Name
            <input type="text" name="name" />
          </label>
          <label css={full_width}>
            Email
            <input type="email" name="email" />
          </label>
          <label css={full_width}>
            Message
            <input type="text" name="message" />
          </label>
          <button type="submit">Send</button>
        </form>
      </Container>
    </Layout>
  )
}
export default ContactPage
