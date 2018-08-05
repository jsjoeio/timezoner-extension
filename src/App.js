import React, { Component } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import './App.css'
import { appStyles, headerStyles } from './App.styles'

class App extends Component {
  state = { toggle: true }
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
          <Input />
          <Input />
          <Button />
        </main>
      </div>
    )
  }
}

export default App
