import { Link } from "gatsby"
import React from "react"
import Footer from "../components/footer"

const Header = () => {

  const text_color = "#a6a6a6";
  const font_family = "Playfair Display";
  const font_size = "1.25rem";

  return (
    <header
    style={{
      background: `transparent`,
      marginBottom: `2rem`,
      height: `100%`,
      width: `3%`,
      position: `fixed`,
      zIndex: `1`,
      top: `0`,
      left: `0`,
      backgroundColor: `#232323`,
      overflowX: `hidden`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `4rem 2rem`,
        height: `100%`,
        width: `12%`,
        position: `fixed`,
        zIndex: `1`,
        left: `3%`,
        backgroundColor: `#232323`,
        opacity: `.81`,
        overflowX: `hidden`,
        display: `flex`,
        flexDirection: "column",
        justifyContent: `flex-start`,
      }}
    >
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
      <Footer></Footer>
    </div>
  </header>  
  ) 
}

export default Header
