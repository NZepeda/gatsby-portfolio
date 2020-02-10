import React from "react"
import { css } from "@emotion/core"

const skillsList = ["Javascript", "React", "CSS3", "HTML", "NodeJS", "SQL"]

const sectionCSS = css`
  font-family: "Muli";
  font-weight: 600;
  color: #9b9b9b;
  font-size: 0.9em;
  display: flex;
  justify-content: space-between;
  margin-top: 25;
`

const headerFont = css`
  font-family: "Muli";
  font-weight: 900;
`

const bulletStyle = css`
  color: #4c8d8d;
  font-size: 1.2em;
  margin-right: 10px;
`

const skillsGrid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  align-self: center;
`

const SkillsList = () => {
  return (
    <div css={skillsGrid}>
      {skillsList.map(skill => {
        return (
          <div>
            <span css={bulletStyle}>○</span>
            <span css={{ fontFamily: "Muli", fontWeight: "700" }}>{skill}</span>
          </div>
        )
      })}
    </div>
  )
}

const Section = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <h2 css={headerFont}>My Skills</h2>
      <div css={sectionCSS}>
        <p>
          While in my current position I have worked mostly with front-end
          technologies, I have worked with many backend technologies in my past
          position such as C#, .Net, Python and Amazon Web Services. I am very
          curious about new and upcoming technologies so I do my best to stay
          current and take online courses whenever I can.
        </p>
      </div>
      <SkillsList />
    </div>
  )
}

export default Section
