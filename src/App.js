import React, { Component } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import moment from 'moment'
import Button from './components/Button'
import TimePicker from 'rc-time-picker'
import 'react-day-picker/lib/style.css'
import 'rc-time-picker/assets/index.css'

import MomentLocaleUtils, {
  formatDate,
  parseDate
} from 'react-day-picker/moment'

import { appStyles, headerStyles, formStyles } from './App.styles'
class App extends Component {
  state = {
    time: moment()
      .hour(0)
      .minute(0),
    selectedDay: undefined,
    toggle: true
  }

  handleChange = selectedDay => {
    console.log(selectedDay)
    this.setState({
      selectedDay
    })
  }

  handleTimeChange = time => {
    console.log(time.format('h:mm a'))
    this.setState({
      time: time.format('h:mm a')
    })
  }

  toggleToggle = () => this.setState({ toggle: !this.state.toggle })
  render() {
    const { selectedDay, toggle } = this.state
    const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const format = 'h:mm a'
    const now = (moment().hour(0).minute(0)).format(format)
    return (
      <div className={appStyles}>
        <header className={headerStyles}>
          <p>Your current timezone is</p>
          <h2>{currentTimezone}</h2>
        </header>
        <main>
          <form className={formStyles}>
            <div>
              <DayPickerInput
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder={`${formatDate(new Date())}`}
                value={selectedDay}
                onDayChange={this.handleChange}
                dayPickerProps={{ selectedDays: selectedDay }}
              />
            </div>
            <div>
              <TimePicker
                showSecond={false}
                defaultValue={this.state.now}
                onChange={this.handleTimeChange}
                className="xxx"
                placeholder={now}
                format={format}
                use12Hours
                inputReadOnly
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
