import React from 'react'
import { buttonStyles } from './Button.styles'

const Button = ({ onClick, text }) => (
  <button onClick={onClick} className={buttonStyles}>
    {text}
  </button>
)

export default Button
