import React from 'react'
import { headerStyles } from '../App.styles'

type Props = {
  timezone: string
}

const Header: React.FC<Props> = ({ timezone }) => (
  <header className={headerStyles}>
    <p>Your current timezone is</p>
    <h2 data-testid="localized-timezone">{timezone}</h2>
  </header>
)

export default Header
