import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>AUDIO</h1>
    <Link to="/">Go back to the homepage</Link>
    <div className="checklist-container">
      <div className="item-container">
        <span>4:00</span>
        <label htmlFor="item_0" className="checklist-item">
          Arrive! Power on all breakers and audio equipment.
          <input type="checkbox" name="item_0" id="item_0" />
          <span className="checkmark"></span>
        </label>
        <hr />
      </div>
      <div className="item-container">
        <span>4:15</span>
        <label htmlFor="item_1" className="checklist-item">
          Turn on house music, patch lines for band, lay out all mics and in ear
          packs on stage for VOX.
          <input type="checkbox" name="item_1" id="item_1" />
          <span className="checkmark"></span>
        </label>
        <hr />
      </div>
      <div className="item-container">
        <span>4:30</span>
        <label htmlFor="item_1" className="checklist-item">
          Quick line check.
          <input type="checkbox" name="item_1" id="item_1" />
          <span className="checkmark"></span>
        </label>
        <hr />
      </div>
    </div>
  </Layout>
)

export default SecondPage
