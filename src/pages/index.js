import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import logo from "../images/logo_black.png"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <img className="hero-logo" src={logo} alt="logo" />
      <div className="choose-category">
        <p style={{ textAlign: "center" }}>
          Welcome to The City Light Production Checklist.
        </p>
        <h1>Choose A Category</h1>
        <div id="categories-container">
          <Link to="/audio/">
            <div className="circle">A</div>
          </Link>
          <Link to="/video/">
            <div className="circle">V</div>
          </Link>
          <Link to="/lighting/">
            <div className="circle">L</div>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
