import React from 'react'
import { formStyles } from '../App.styles'
import DateTime from 'react-datetime'
import { Moment } from 'moment'

type Props = {
  handleChange: (date: string | Moment) => void
  date: Moment
}

const Form: React.FC<Props> = ({ handleChange, date }) => (
  <form className={formStyles}>
    <div>
      <DateTime
        onChange={handleChange}
        // @ts-ignore
        onBlur={handleChange}
        value={date}
        timeFormat="h:mm a"
      />
    </div>
  </form>
)

export default Form
