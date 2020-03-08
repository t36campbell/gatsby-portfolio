import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import Footer from "./footer"

const Sidenav = () => {

  const text_color = "#a6a6a6";
  const font_family = "Playfair Display";
  const font_size = "1.25rem";
  const NavContainer = styled.div`
    margin-bottom: 2rem;
    height: 100%;
    width: 3%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #232323;
    overflow-x: hidden;
  `
  const NavLinks = styled.div`
    margin: 0 auto;
    max-width: 960;
    padding: 4rem 2rem;
    height: 100%;
    width: 12%;
    position: fixed;
    z-index: 1;
    left: 3%;
    background-color: #232323;
    opacity: .81;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `
  return (
    <NavContainer>
      <NavLinks>
        <h2>
          <Link to="/" style={{
            textDecoration: `none`,
            color: text_color,
            fontFamily: font_family,
            fontSize: font_size
            }}
          >Home
          </Link>  
        </h2>
        <h2>
          <Link to="/" style={{
            textDecoration: `none`,
            color: text_color,
            fontFamily: font_family,
            fontSize: font_size
            }}
          >Projects
          </Link>  
        </h2>
        <h2>
          <Link to="/" style={{
            textDecoration: `none`,
            color: text_color,
            fontFamily: font_family,
            fontSize: font_size
            }}
          >Blog
          </Link>  
        </h2>
        <h2>
          <Link to="/" style={{
            textDecoration: `none`,
            color: text_color,
            fontFamily: font_family,
            fontSize: font_size
            }}
          >About
          </Link>  
        </h2>
        <Footer/>
      </NavLinks>
    </NavContainer>  
  ) 
}

export default Sidenav

