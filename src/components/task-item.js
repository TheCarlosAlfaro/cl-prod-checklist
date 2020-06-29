import React from "react"

const TaskItem = props => (
  <>
    <div className="item-container">
      <span>{props.time}</span>
      <label htmlFor={props.taskNumber} className="checklist-item">
        {props.description}
        <input type="checkbox" name={props.taskNumber} id={props.taskNumber} />
        <span className="checkmark"></span>
      </label>
      <hr />
    </div>
  </>
)

export default TaskItem
