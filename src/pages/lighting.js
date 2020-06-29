import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TaskItem from "../components/task-item"

import { lightingData } from "../data/lighting-data"

const LightingPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Lighting</h1>
    <Link to="/">Go back to the homepage</Link>
    <div className="checklist-container">
      {lightingData.map((task, index) => {
        return (
          <TaskItem
            key={index}
            number={task.taskNumber}
            time={task.taskTime}
            description={task.taskDescription}
          />
        )
      })}
    </div>
  </Layout>
)

export default LightingPage
