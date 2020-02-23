import React from 'react'
import { buttonStyles } from './Button.styles'

type Props = {
  onClick: () => void
  text: string
}

const Button: React.FC<Props> = ({ onClick, text }) => (
  <button onClick={onClick} className={buttonStyles}>
    {text}
  </button>
)

export default Button
