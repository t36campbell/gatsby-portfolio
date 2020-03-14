import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Footer from "./footer"

const Sidenav = () => {
  const NavContainer = styled.div`
    height: 100%;
    width: 15%;
    overflow-x: hidden;
  `
  const Sidebar = styled.div`
    margin-bottom: 2rem;
    height: 100%;
    width: 3%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #000;
  `
  const NavLinks = styled.div`
    padding: 5rem 1.25rem;
    height: 100%;
    width: 12%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 3%;
    background-color: #000;
    opacity: 0.81;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `
  const link_styles = css({
    textDecoration: "none",
    color: "#c6c6c6",
    fontFamily: "Playfair Display",
    fontSize: "2rem",
  })
  return (
    <NavContainer>
      <Sidebar />
      <NavLinks>
        <Link to="/" css={link_styles}>
          Home
        </Link>
        <Link to="/projects/" css={link_styles}>
          Projects
        </Link>
        <Link to="/blog/" css={link_styles}>
          Blog
        </Link>
        <Link to="/about/" css={link_styles}>
          About
        </Link>
        <Link to="/contact/" css={link_styles}>
          Contact
        </Link>
        <Footer />
      </NavLinks>
    </NavContainer>
  )
}

export default Sidenav
