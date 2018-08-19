import React, { Component } from 'react'
import { buttonStyles } from './Button.styles'
class Button extends Component {
  render () {
    return <button onClick={this.props.onClick}className={buttonStyles}>{this.props.text}</button>
  }
}

export default Button
