import React from "react"
import PersonalImage from "../components/image"

const fontStyle = {
  fontFamily: "Muli",
  fontWeight: "900",
  fontSize: "3em",
  lineHeight: "1.2em",
}

const IntroBlurb = () => (
  <div style={{ marginBottom: 25 }}>
    <span style={fontStyle}>Hi there, I'm Nestor.</span>
    <br />
    <span style={{ ...fontStyle }}>
      <span style={{ color: "#4C8D8D" }}>Software Engineer</span>,
    </span>
    <br />
    <span style={fontStyle}>Coffee Enthusiast</span>
    <br />
  </div>
)

const Info = () => {
  return (
    <div
      style={{
        fontFamily: "Muli",
        fontWeight: "600",
        color: "#9B9B9B",
        fontSize: ".9em",
        display: "flex",
        justifyContent: "space-between",
        marginTop: 25,
      }}
    >
      <div style={{ maxWidth: "40%" }}>
        <p>I'm a 26 year old software engineer living in New York City</p>
        <p>
          I’m originally a California native and graduate from California State
          University, Monterey Bay.
        </p>
      </div>
      <div style={{ maxWidth: "40%" }}>
        <p>
          In the few years I’ve worked as a professional software engineer, I
          have had the opportunity to work in great teams and create awesome
          products. I hope to be able to do this for a long time.
        </p>
      </div>
    </div>
  )
}

const Intro = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <IntroBlurb />
      <PersonalImage />
      <Info />
    </div>
  )
}

export default Intro
