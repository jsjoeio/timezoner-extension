import React, { Component } from 'react'
import { buttonStyles } from './Button.styles'

const Button = ({ onClick, children }) => (
  <button onClick={onClick} className={buttonStyles}>
    {children}
  </button>
)

export default Button
