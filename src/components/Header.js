import React, { useState } from 'react'
import { headerStyles } from '../App.styles'

const Header = ({ timezone }) => (
  <header className={headerStyles}>
    <p>Your current timezone is</p>
    <h2 data-testid="localized-timezone">{timezone}</h2>
  </header>
)

export default Header
