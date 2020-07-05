import React from "react"

const TaskItem = props => {
  return (
    <>
      <div className="item-container">
        <span>{props.time}</span>
        <label htmlFor={`item_${props.number}`} className="checklist-item">
          {props.description}

          <input
            type="checkbox"
            name={`item_${props.number}`}
            id={`item_${props.number}`}
            value={props.value}
            onChange={e => props.change(e)}
            defaultChecked={props.check}
          />
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
}

export default TaskItem
