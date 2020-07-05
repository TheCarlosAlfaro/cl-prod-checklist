import React from "react"
import { audioData } from "../data/audio-data"

const defaultState = {
  data: audioData,
  toggleCheckmark: () => {},
}

const ChecklistContext = React.createContext(defaultState)

class ChecklistProvider extends React.Component {
  state = {
    data: audioData,
  }

  toggleDCheckmark = () => {
    let isChecked = !this.state.dark
    localStorage.setItem("dark", JSON.stringify(dark))
    this.setState({ dark })
  }

  componentDidMount() {
    // Getting dark mode value from localStorage!
    const lsDark = JSON.parse(localStorage.getItem("dark"))
    if (lsDark) {
      this.setState({ dark: lsDark })
    } else if (supportsDarkMode()) {
      this.setState({ dark: true })
    }
  }

  render() {
    const { children } = this.props
    const { dark } = this.state
    return (
      <ChecklistContext.Provider
        value={{
          dark,
          toggleCheckmark: this.toggleCheckmark,
        }}
      >
        {children}
      </ChecklistContext.Provider>
    )
  }
}

export default ChecklistContext

export { ChecklistProvider }
