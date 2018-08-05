import React, { Component } from 'react'
import { buttonStyles } from './Button.styles'
class Button extends Component {
  render () {
    return <button className={buttonStyles}>{this.props.text}</button>
  }
}

export default Button
