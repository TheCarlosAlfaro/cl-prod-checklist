import React, { useState } from "react"

import { audioData } from "./src/data/audio-data"
export const myContext = React.createContext()

const Provider = props => {
  // const [isCheck, setCheck] = useState(false)
  const [state, setState] = useState({
    audioData,
  })

  return (
    <myContext.Provider
      value={{
        state,
        handleCheck: e => {
          const item = parseInt(e.target.id.split("").slice(-1))
          let key = item
          console.log(key)
          setState(prevState => ({
            audioData: prevState.audioData.map(el =>
              el.taskNumber === key
                ? { ...el, isChecked: e.target.checked }
                : el
            ),
          }))
          console.log(state.audioData[item])
        },
      }}
    >
      {props.children}
    </myContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
