import React from "react"
import { css } from "@emotion/core"
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react"

const Experience = () => {
  const fontFamily = {
    fontFamily: "Muli",
  }

  const listStyle = {
    marginTop: 10,
    fontFamily: "Muli",
    fontWeight: 600,
    color: "#9b9b9b",
    fontSize: "0.9em",
  }

  const dateTitleStyle = { ...fontFamily, fontWeight: 800 }
  const dateSubTitleStyle = { ...fontFamily, fontWeight: 700 }

  return (
    <div css={{ marginTop: 50 }}>
      <h2 css={{ ...fontFamily, fontWeight: 900 }}>Experience</h2>
      <Timeline lineColor={"#9B9B9B"} animate={true}>
        <TimelineItem
          key="001"
          dateText="07/2018 – Present"
          dateInnerStyle={dateSubTitleStyle}
        >
          <h3 css={dateTitleStyle}>ActiveViam</h3>
          <h4 css={dateSubTitleStyle}>Sofware Engineer</h4>
          <ul css={listStyle}>
            <li>
              Worked with the latest Javascript technologies including React,
              d3.js, Webpack and Babel.
            </li>
            <li>
              Worked on an SDK which provided an API and React components for
              creating and manipulating MDX queries and visualizing the query
              results.
            </li>
            <li>Migrated our codebase from Flow to Typescript.</li>
            <li>
              Lead developer on various key features which are used at major
              clients such as HSBC and Freddie Mac.
            </li>
          </ul>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="02/2017 – 03/2018"
          dateInnerStyle={{ background: "#61b8ff", ...dateSubTitleStyle }}
        >
          <h3 css={dateTitleStyle}>Monterey Bay Aquarium</h3>
          <h4 css={dateSubTitleStyle}>Web Developer</h4>
          <ul css={listStyle}>
            <li>
              Worked in an agile software development team to help maintain and
              develop various websites (​www.montereybayaquarium.org​ /
              www.seafoodwatch.org​) which use an ASP.NET MVC framework.
            </li>
            <li>
              Worked in creating .NET API endpoints which are used to feed data
              into AngularJS based web app.
            </li>
            <li>
              Worked with Amazon Web Services which is used to host both
              websites on separate EC2 instances.
            </li>
            <li>
              Lead developer on Platewatch which was a project for the
              Smithsonian Museum and the Monterey Bay Aquarium.
            </li>
          </ul>
        </TimelineItem>
        <TimelineItem key="003" dateText="05/2015 – 08/2015">
          <h3>PredPol</h3>
          <h4>Software Engineer Intern</h4>
          <ul css={listStyle}>
            <li>
              Worked in a development team to create and develop an iOS
              application for displaying crime data throughout various parts of
              the country.
            </li>
            <li>
              Integrated existing REST API into the application in order to
              query for data.
            </li>
            <li>Used CocoaPods as a dependency manager for the app.</li>
          </ul>
        </TimelineItem>
      </Timeline>
    </div>
  )
}

export default Experience
