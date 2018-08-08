import React, { Component } from 'react'
import { inputBoxStyles } from './Input.styles'
class Input extends Component {
  render() {
    return (
      <div className={inputBoxStyles}>
        <input type={this.props.type} />
        <label>{this.props.label}</label>
      </div>
    )
  }
}

export default Input
