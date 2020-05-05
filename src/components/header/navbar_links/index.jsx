import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { Wrapper } from "./styles"
import Footer from "../../footer"

const NavbarLinks = ({ desktop }) => {
  const underline = css({
    textDecoration: "underline",
  })
  const link_styles = css({
    ":hover": underline,
    textDecoration: "none",
    color: "#ccc",
    fontFamily: "Playfair Display",
    fontSize: "2rem",
  })
  return (
    <Wrapper desktop={ desktop } >
      <Link
        to="/"
        activeStyle={{ textDecoration: "underline" }}
        css={link_styles}
      >
        Home
      </Link>
      <Link
        to="/projects/"
        activeStyle={{ textDecoration: "underline" }}
        css={link_styles}
      >
        Projects
      </Link>
      <Link
        to="/blog/"
        activeStyle={{ textDecoration: "underline" }}
        css={link_styles}
      >
        Blog
      </Link>
      <Link
        to="/contact/"
        activeStyle={{ textDecoration: "underline" }}
        css={link_styles}
      >
        Contact
      </Link>
      <Footer />
    </Wrapper>
  )
}
export default NavbarLinks
