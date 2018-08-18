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
    selectedDay: undefined,
    time: moment()
      .hour(0)
      .minute(0),
    timezone: '',
    toggle: true
  }

  componentWillMount() {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    this.setState({
      timezone
    })
  }

  generateLink = () => {
    const { selectedDay, time } = this.state
    const parsedDay = parseDay(selectedDay)
    const parsedTime = parseTime(time)
    const timezone = console.log(
      `this is the link https://timezoner.com/?day=${parsedDay}&?time=${parsedTime}&?timezone=${timezone}`
    )
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
    const { selectedDay, time, timezone, toggle } = this.state
    const format = 'h:mm a'
    return (
      <div className={appStyles}>
        <header className={headerStyles}>
          <p>Your current timezone is</p>
          <h2>{timezone}</h2>
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
                defaultValue={time}
                onChange={this.handleTimeChange}
                className="xxx"
                placeholder={time}
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
