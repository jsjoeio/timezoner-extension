import React, { Component } from 'react'
import { css } from 'emotion'
import Button from './components/Button'
import Input from './components/Input'
import './App.css'

const appStyles = css`
  width: 350px;
  min-height: 350px;
  background-color: #fff;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 24px 24px;
`
class App extends Component {
  state = { toggle: true }
  toggleToggle = () => this.setState({ toggle: !this.state.toggle })
  render() {
    const { toggle } = this.state
    const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    return (
      <div className={appStyles}>
        <header>
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
