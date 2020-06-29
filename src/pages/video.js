import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const VideoPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>VIDEO</h1>
    <p>Coming soon...</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default VideoPage
