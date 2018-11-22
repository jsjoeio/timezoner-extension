import React from 'react'
import { formStyles } from '../App.styles'
import DateTime from 'react-datetime'

const Form = ({ handleChange, setDateAndTime, date }) => (
  <form className={formStyles}>
    <div>
      <DateTime
        onChange={handleChange}
        onBlur={setDateAndTime}
        value={date}
        timeFormat="h:mm a"
      />
    </div>
  </form>
)

export default Form
