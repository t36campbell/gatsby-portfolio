import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Footer from "../components/footer"

const Header = () => {

  const text_color = "#a6a6a6";

  return (
    <header
    style={{
      background: `transparent`,
      marginBottom: `1.45rem`,
      height: `100%`,
      width: `12.5%`,
      position: `fixed`,
      zIndex: `1`,
      top: `0`,
      left: `0`,
      backgroundColor: `#232323`,
      overflowX: `hidden`,
      paddingTop: `20px`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        flexDirection: "column",
        justifyContent: `space-evenly`,
      }}
    >
      <h2>
        <Link to="/" style={{
          color: text_color,
          textDecoration: `none`,
          fontFamily: 'Souce Code Pro',
          }}
        >Home
        </Link>  
      </h2>
      <h2>
        <Link to="/" style={{
          color: text_color,
          textDecoration: `none`,
          fontFamily: 'Souce Code Pro',
          }}
        >Projects
        </Link>  
      </h2>
      <h2>
        <Link to="/" style={{
          color: text_color,
          textDecoration: `none`,
          fontFamily: 'Souce Code Pro',
          }}
        >Blog
        </Link>  
      </h2>
      <h2>
        <Link to="/" style={{
          color: text_color,
          textDecoration: `none`,
          fontFamily: 'Souce Code Pro',
          }}
        >About
        </Link>  
      </h2>
    </div>
    <Footer></Footer>
  </header>  
  ) 
}

export default Header
