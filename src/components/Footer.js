import React, { useState } from 'react'
import { linkContainerStyles } from '../App.styles'

const Footer = ({ handleSelectText, loading, link }) => (
  <footer>
    {loading && <p>Loading...</p>}
    {link !== '' && !loading && (
      <div className={linkContainerStyles}>
        <label>️⬇️ Click link to select ⬇️</label>
        <h4 onClick={handleSelectText} data-testid="event-link">
          {link}
        </h4>
      </div>
    )}
  </footer>
)

export default Footer
