import React, { Component } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import DateInput from './components/DateInput'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'
import { appStyles, headerStyles, formStyles } from './App.styles'
class App extends Component {
  state = {
    startDate: moment(),
    toggle: true
  }

  handleChange = date => {
    this.setState({
      startDate: date
    })
  }

  toggleToggle = () => this.setState({ toggle: !this.state.toggle })
  render() {
    const { startDate, toggle } = this.state
    const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    return (
      <div className={appStyles}>
        <header className={headerStyles}>
          <p>Your current timezone is</p>
          <h2>{currentTimezone}</h2>
        </header>
        <main>
          <form className={formStyles}>
            <div style={{marginRight: '175px'}}>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="LLL"
                timeCaption="time"
              />
            </div>
          </form>
          <Button text="Generate Link" />
        </main>
      </div>
    )
  }
}

export default App
