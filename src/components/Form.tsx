import React from 'react'
import { formStyles } from '../App.styles'
import DateTime from 'react-datetime'
import { Moment } from 'moment'

type Props = {
  handleChange: () => void,
  date: Moment
}

const Form = ({ handleChange, date }) => (
  <form className={formStyles}>
    <div>
      <DateTime
        onChange={handleChange}
        onBlur={handleChange}
        value={date}
        timeFormat="h:mm a"
      />
    </div>
  </form>
)

export default Form
