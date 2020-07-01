import React from "react"

// import { myContext } from "../../provider"

const TaskItem = props => {
  return (
    // <myContext.Consumer>
    //   {context => (
    <>
      <div className="item-container">
        <span>{props.time}</span>
        <label htmlFor={`item_${props.number}`} className="checklist-item">
          {props.description}

          <input
            type="checkbox"
            name={`item_${props.number}`}
            id={`item_${props.number}`}
            // onChange={e => context.handleCheck(e)}
            // checked={context.state.isChecked}
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
    // )}
    // </myContext.Consumer>
  )
}

export default TaskItem
