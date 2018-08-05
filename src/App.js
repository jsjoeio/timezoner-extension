import React, { Component } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = { toggle: true }
  toggleToggle = () => this.setState({ toggle: !this.state.toggle })
  render() {
    const { toggle } = this.state
    const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    return (
      <div className="App">
        <header className="App-header">
          <p>Your current timezone is</p>
          <h2>{currentTimezone}</h2>
          <img
            src={logo}
            onClick={this.toggleToggle}
            className={'App-logo ' + (toggle && 'Logo-spin')}
            alt="logo"
          />
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
