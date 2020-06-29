import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TaskItem from "../components/task-item"

import { videoData } from "../data/video-data"

const VideoPage = () => (
  <Layout>
    <SEO title="VIDEO" />
    <h1>VIDEO</h1>
    <Link to="/">Go back to the homepage</Link>
    <div className="checklist-container">
      {videoData.map((task, index) => {
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

export default VideoPage
