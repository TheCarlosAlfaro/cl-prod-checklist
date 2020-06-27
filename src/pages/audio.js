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
        <label htmlFor="item_2" className="checklist-item">
          Quick line check.
          <input type="checkbox" name="item_2" id="item_2" />
          <span className="checkmark"></span>
        </label>
        <hr />
      </div>
      <div className="item-container">
        <span>4:45</span>
        <label htmlFor="item_3" className="checklist-item">
          Band will be running transitions. Be on standby to make monitor
          adjustments.
          <input type="checkbox" name="item_3" id="item_3" />
          <span className="checkmark"></span>
        </label>
        <hr />
      </div>
      <div className="item-container">
        <span>5:00</span>
        <label htmlFor="item_4" className="checklist-item">
          Vocalists will arrive from warm ups. Full Rehearsal Start! Use this
          time to dial in mix.
          <input type="checkbox" name="item_4" id="item_4" />
          <span className="checkmark"></span>
        </label>
        <hr />
      </div>
      <div className="item-container">
        <span>5:15</span>
        <label htmlFor="item_5" className="checklist-item">
          Team Huddle. Attendance required, unless there is an emergency with
          audio that cant wait. If so communicate with Brandon.
          <input type="checkbox" name="item_5" id="item_5" />
          <span className="checkmark"></span>
        </label>
        <hr />
      </div>
      <div className="item-container">
        <span>5:30</span>
        <label htmlFor="item_6" className="checklist-item">
          Team Huddle. Attendance required, unless there is an emergency with
          audio that cant wait. If so communicate with Brandon.
          <input type="checkbox" name="item_6" id="item_6" />
          <span className="checkmark"></span>
        </label>
        <hr />
      </div>
      <div className="item-container">
        <span>5:45</span>
        <label htmlFor="item_7" className="checklist-item">
          Doors open. Turn on BGM in lobby and house.
          <input type="checkbox" name="item_7" id="item_7" />
          <span className="checkmark"></span>
        </label>
        <hr />
      </div>
      <div className="item-container">
        <span>6:00</span>
        <label htmlFor="item_8" className="checklist-item">
          Run Services.
          <input type="checkbox" name="item_8" id="item_8" />
          <span className="checkmark"></span>
        </label>
        <hr />
      </div>
    </div>
  </Layout>
)

export default SecondPage
