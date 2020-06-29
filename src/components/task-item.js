import React from "react"

const TaskItem = props => (
  <>
    <div className="checklist-container">
      <div className="item-container">
        <span>{props.time}</span>
        <label htmlFor="item_0" className="checklist-item">
          {props.description}
          <input type="checkbox" name="item_0" id="item_0" />
          <span className="checkmark"></span>
        </label>
        <hr />
      </div>
    </div>
  </>
)

export default TaskItem
