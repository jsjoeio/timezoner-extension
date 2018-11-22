import React, { useState } from 'react'
import { linkContainerStyles } from '../App.styles'
import Spinner from './Spinner'

const Footer = ({ handleSelectText, loading, link, copied }) => (
  <footer>
    {loading && <Spinner />}
    {link !== '' && !loading && (
      <div className={linkContainerStyles}>
        <label>️{copied ? 'Copied! ✅' : '⬇️ Click link to copy  ⬇️'}</label>
        <h4 onClick={handleSelectText} data-testid="event-link">
          {link}
        </h4>
      </div>
    )}
  </footer>
)

export default Footer
