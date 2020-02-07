import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../sections/intro"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
  </Layout>
)

export default IndexPage
