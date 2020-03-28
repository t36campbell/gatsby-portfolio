import React from "react"
import Layout from "../components/layout/"
import SEO from "../components/seo/"
import Container from "../components/container/"
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
        <form css={flex_form}>
          <label for="firstName" css={full_width}>
            <h3>First Name</h3>
          </label>
          <input
            type="text"
            id="firstName"
            css={full_width}
            placeholder="Enter your First Name"
          ></input>
          <label for="lastName">
            <h3>Last Name</h3>
          </label>
          <input
            type="text"
            id="lastName"
            css={full_width}
            placeholder="Enter your Last Name"
          ></input>
          <label for="email">
            <h3>Email</h3>
          </label>
          <input
            type="email"
            id="email"
            css={full_width}
            placeholder="Enter your Email"
          ></input>
          <label for="emailVerify">
            <h3>Verify</h3>
          </label>
          <input
            type="email"
            id="emailVerify"
            css={full_width}
            placeholder="Verfiy your Email"
          ></input>
          <label for="phone">
            <h3>Phone</h3>
          </label>
          <input
            type="text"
            id="phone"
            css={full_width}
            placeholder="Enter your Phone #"
          ></input>
          <label for="company">
            <h3>Company</h3>
          </label>
          <input
            type="text"
            id="company"
            css={full_width}
            placeholder="Enter the Company you Represent"
          ></input>
          <label for="message">
            <h3>Reason</h3>
          </label>
          <textarea
            id="message"
            rows="5"
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
