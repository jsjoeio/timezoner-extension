import React, { Component } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import DateInput from './components/DateInput'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

import MomentLocaleUtils, {
  formatDate,
  parseDate
} from 'react-day-picker/moment'

import { appStyles, headerStyles, formStyles } from './App.styles'
class App extends Component {
  state = {
    selectedDay: undefined,
    toggle: true
  }

  handleChange = selectedDay => {
    console.log(selectedDay)
    this.setState({
      selectedDay
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
            <div style={{ marginRight: '175px' }}>
              <DayPickerInput
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder={`${formatDate(new Date())}`}
                value={selectedDay}
                onDayChange={this.handleChange}
                dayPickerProps={{ selectedDays: selectedDay }}
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
