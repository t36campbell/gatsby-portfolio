import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `transparent`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-evenly`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{
            color: `#232323`,
            textDecoration: `none`,
            fontFamily: 'Souce Code Pro',
          }}
        > Home
        </Link>
      </h1>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{
            color: `#232323`,
            textDecoration: `none`,
            fontFamily: 'Souce Code Pro',
          }}
        > Projects
        </Link>
      </h1>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{
            color: `#232323`,
            textDecoration: `none`,
            fontFamily: 'Souce Code Pro',
          }}
        > Blog
        </Link>
      </h1>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{
            color: `#232323`,
            textDecoration: `none`,
            fontFamily: 'Souce Code Pro',
          }}
        > About
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
