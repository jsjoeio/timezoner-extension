import React from 'react'
import { linkContainerStyles } from '../App.styles'
import Spinner from './Spinner'

type Props = {
  handleSelectText: () => void
  loading: boolean
  link: string
  copied: boolean
}

const Footer: React.FC<Props> = ({
  handleSelectText,
  loading,
  link,
  copied
}) => (
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
