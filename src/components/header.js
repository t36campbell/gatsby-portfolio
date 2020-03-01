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
            color: `black`,
            textDecoration: `none`,
          }}
        > Home
        </Link>
      </h1>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{
            color: `black`,
            textDecoration: `none`,
          }}
        > About
        </Link>
      </h1>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{
            color: `black`,
            textDecoration: `none`,
          }}
        > Projects
        </Link>
      </h1>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{
            color: `black`,
            textDecoration: `none`,
          }}
        > Contact
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
