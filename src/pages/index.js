import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../sections/intro"
import Skills from "../sections/skills"
import Experience from "../sections/experience"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Skills />
    <Experience />
  </Layout>
)

export default IndexPage
