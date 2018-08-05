import React, { Component } from 'react'
import { css } from 'emotion'

const buttonStyles = css`
  background: linear-gradient(
    0deg,
    #7fd6ff 27.3%,
    rgba(127, 229, 255, 0) 173.47%
  );
  border-radius: 32px;
  color: #fff;
  width: 157px;
  height: 49px;
`
class Button extends Component {
  render (props) {
    return <button className={buttonStyles}>{props.text}</button>
  }
}

export default Button
