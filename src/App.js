import React, { Component } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import moment from 'moment'
import { css } from 'emotion'
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
    link: '',
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
    const { selectedDay, time, timezone } = this.state
    const day = formatDate(selectedDay, 'YYYY-MM-DD')

    const params = {
      day,
      time,
      timezone
    }

    const queryString = Object.keys(params)
      .map(key => {
        return `?${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      })
      .join('&')

    this.setState({
      link: `https://timezoner.surge.sh/${queryString}`
    })
  }
  handleChange = selectedDay => {
    this.setState({
      selectedDay
    })
  }

  handleTimeChange = time => {
    this.setState({
      time: time.format('h:mm a')
    })
  }

  render() {
    const { link, selectedDay, time, timezone, toggle } = this.state
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
                // parseDate={parseDate}
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
          <Button text="Generate Link" onClick={this.generateLink} />
        </main>
        {link !== '' && (
          <footer>
            <div
              className={css`
                margin: 0 25px;
              `}
            >
              <a
                href={link}
                target="_blank"
                className={css`
                  word-wrap: break-word;
                `}
              >
                <h4>{link}</h4>
              </a>
            </div>
          </footer>
        )}
      </div>
    )
  }
}

export default App
