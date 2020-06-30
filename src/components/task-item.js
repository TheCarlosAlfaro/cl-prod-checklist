import React from "react"

const TaskItem = props => (
  <>
    <div className="item-container">
      <span>{props.time}</span>
      <label htmlFor={props.number} className="checklist-item">
        {props.description}
        <input type="checkbox" name={props.number} id={props.number} />
        <span className="checkmark"></span>
      </label>
      {props.steps.length > 0 &&
        props.steps.map((step, index) => {
          return (
            <li style={{ paddingLeft: "6%" }} key={index}>
              {step}
            </li>
          )
        })}
      <hr />
    </div>
  </>
)

export default TaskItem
