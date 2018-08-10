import React, { Component } from 'react'
import { inputBoxStyles } from './Input.styles'
class Input extends Component {
  render() {
    return (
      <div className={inputBoxStyles}>
        <input name={this.props.name} type={this.props.type} value={this.props.value} onChange={this.props.onChange} />
        <label>{this.props.label}</label>
      </div>
    )
  }
}

export default Input
