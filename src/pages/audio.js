import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TaskItem from "../components/task-item"

import { audioData } from "../data/audio-data"

const AudioPage = props => {
  if (typeof window !== `undefined`) {
    let checkboxValues =
      JSON.parse(localStorage.getItem("checkboxValues_audio")) || audioData

    let isChecked = false
    const handleChange = e => {
      const checkboxID = parseInt(e.target.id.split("_").slice(-1))
      isChecked = !checkboxValues[checkboxID].isChecked
      checkboxValues[checkboxID].isChecked = isChecked
      localStorage.setItem(
        "checkboxValues_audio",
        JSON.stringify(checkboxValues)
      )
      checkboxValues = JSON.parse(localStorage.getItem("checkboxValues_audio"))
    }

    const handleClick = () => {
      checkboxValues.forEach(task => {
        task.isChecked = false
      })
      localStorage.setItem(
        "checkboxValues_audio",
        JSON.stringify(checkboxValues)
      )

      window.location.reload()
    }

    return (
      <Layout>
        <SEO title="AUDIO" />
        <h1>AUDIO</h1>
        <div className="menu">
          <Link to="/">Go back to the homepage</Link>
          <button className="uncheck-button" onClick={handleClick}>
            RESET
          </button>
        </div>
        <div className="checklist-container">
          {checkboxValues.map((task, index) => {
            return (
              <TaskItem
                key={index}
                number={task.taskNumber}
                value={task.taskNumber}
                time={task.taskTime}
                description={task.taskDescription}
                steps={task.taskSteps}
                change={handleChange}
                check={task.isChecked}
              />
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default AudioPage
