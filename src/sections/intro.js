import React from "react"
import Image from "../components/image"

const fontStyle = {
  fontFamily: "Muli",
  fontWeight: "900",
  fontSize: "3em",
  lineHeight: "1.2em",
}

const IntroBlurb = () => (
  <div>
    <span style={fontStyle}>Hi there, I'm Nestor.</span>
    <br />
    <span style={{ ...fontStyle, color: "#4C8D8D" }}>Software Engineer,</span>
    <br />
    <span style={fontStyle}>Coffee Enthusiast</span>
    <br />
  </div>
)

const Intro = () => {
  return (
    <div style={{ display: "flex" }}>
      <IntroBlurb />
      <Image />
    </div>
  )
}

export default Intro
