import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import MomentLocaleUtils, {
  formatDate,
  parseDate
} from 'react-day-picker/moment'
import 'react-day-picker/lib/style.css'
import { inputBoxStyles } from './Input.styles'

export default class Example extends React.Component {
  constructor(props) {
    super(props)
    this.handleDayChange = this.handleDayChange.bind(this)
    this.state = {
      selectedDay: undefined,
      isDisabled: false
    }
  }
  handleDayChange(selectedDay, modifiers) {
    this.setState({
      selectedDay
    })
  }
  render() {
    const { selectedDay, isDisabled } = this.state
    return (
      <div className={inputBoxStyles}>
        <DayPickerInput
          value={selectedDay}
          formatDate={formatDate}
          parseDate={parseDate}
          placeholder={`${formatDate(new Date())}`}
          onDayChange={this.handleDayChange}
          dayPickerProps={{
            selectedDays: selectedDay
          }}
        />
        <label>Date</label>
      </div>
    )
  }
}
