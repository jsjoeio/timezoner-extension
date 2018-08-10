import React, { Component } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import DateInput from './components/DateInput'
import { appStyles, headerStyles, formStyles } from './App.styles'
class App extends Component {
  state = {
    time: '12:00PM',
    toggle: true
  }

  handleTimeChange(event) {
    const value = event.target.value

    this.setState({
      time: value
    })
  }

  toggleToggle = () => this.setState({ toggle: !this.state.toggle })
  render() {
    const { selectedDay, toggle } = this.state
    const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    return (
      <div className={appStyles}>
        <header className={headerStyles}>
          <p>Your current timezone is</p>
          <h2>{currentTimezone}</h2>
        </header>
        <main>
          <form className={formStyles}>
            <DateInput/>
            {/* <Input
              name="time"
              type="time"
              label="Time"
              value={this.state.time}
              onChange={this.handleTimeChange}
            /> */}
          </form>
          <Button text="Generate Link" />
        </main>
      </div>
    )
  }
}

export default App
