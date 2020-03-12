import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import Footer from "./footer"

const Sidenav = () => {

  const text_color = "#c6c6c6";
  const font_family = "Playfair Display";
  const font_size = "2rem";
  const NavContainer = styled.div`
    margin-bottom: 2rem;
    height: 100%;
    width: 3%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #000;
    overflow-x: hidden;
  `
  const NavLinks = styled.div`
    margin: 0 auto;
    max-width: 960;
    padding: 5rem 1.25rem;
    height: 100%;
    width: 12%;
    position: fixed;
    z-index: 1;
    left: 3%;
    background-color: #000;
    opacity: .81;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `
  return (
    <NavContainer>
      <NavLinks>
          <Link to="/" style={{
            textDecoration: `none`,
            color: text_color,
            fontFamily: font_family,
            fontSize: font_size
            }}
          >Home
          </Link>
          <Link to="/" style={{
            textDecoration: `none`,
            color: text_color,
            fontFamily: font_family,
            fontSize: font_size
            }}
          >Projects
          </Link>
          <Link to="/" style={{
            textDecoration: `none`,
            color: text_color,
            fontFamily: font_family,
            fontSize: font_size
            }}
          >Blog
          </Link>
          <Link to="/" style={{
            textDecoration: `none`,
            color: text_color,
            fontFamily: font_family,
            fontSize: font_size
            }}
          >About
          </Link>
        <Footer/>
      </NavLinks>
    </NavContainer>  
  ) 
}

export default Sidenav

