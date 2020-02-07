import PropTypes from "prop-types"
import React from "react"

const navItemStyle = {
  marginRight: "25px",
  fontFamily: "Muli",
  fontWeight: "700",
}

const Header = () => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      marginTop: `1em`,
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <span style={navItemStyle}>About</span>
      <span style={navItemStyle}>Skills</span>
      <span style={navItemStyle}>Experience</span>
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
