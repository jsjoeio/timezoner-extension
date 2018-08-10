import React, { Component } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import { appStyles, headerStyles, formStyles } from './App.styles'

class App extends Component {
  state = {
    date: '08-08-2018',
    time: '12:00PM',
    toggle: true
  }

  handleInputChange(event) {
    const value = event.target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  toggleToggle = () => this.setState({ toggle: !this.state.toggle })
  render() {
    const { toggle } = this.state
    const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    return (
      <div className={appStyles}>
        <header className={headerStyles}>
          <p>Your current timezone is</p>
          <h2>{currentTimezone}</h2>
        </header>
        <main>
          <form className={formStyles}>
            <Input
              name="date"
              type="date"
              label="Date"
              value={this.state.date}
              onChange={this.handleInputChange}
            />
            <Input
              name="time"
              type="time"
              label="Time"
              value={this.state.time}
              onChange={this.handleInputChange}
            />
          </form>
          <Button text="Generate Link" />
        </main>
      </div>
    )
  }
}

export default App
