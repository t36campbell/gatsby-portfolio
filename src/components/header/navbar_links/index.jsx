import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { Wrapper } from "./styles"
import Footer from "../../footer"

const NavbarLinks = () => {
  const underline = css({
    textDecoration: "underline",
  })
  const link_styles = css({
    '&:hover,&:focus': underline,
    textDecoration: "none",
    color: "#ccc",
    fontFamily: "Playfair Display",
    fontSize: "2rem",
  })
  return (
    <Wrapper>
      <Link
        to="/"
        css={link_styles}
      >
        Home
      </Link>
      <Link
        to="/projects/"
        css={link_styles}
      >
        Projects
      </Link>
      <Link
        to="/blog/"
        css={link_styles}
      >
        Blog
      </Link>
      <Link
        to="/contact/"
        css={link_styles}
      >
        Contact
      </Link>
      <Footer />
    </Wrapper>
  )
}
export default NavbarLinks
