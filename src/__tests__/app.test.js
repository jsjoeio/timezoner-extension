import React from 'react'
import { render, cleanup, getByText, fireEvent, waitForElement, getByTestId } from 'react-testing-library'
import App from '../App'

afterEach(cleanup)

test('<App/> renders correctly', async () => {
  const { container } = render(<App />)

  const localizedTimezone = getByTestId(container, 'localized-timezone')
  expect(localizedTimezone).not.toBe('')

  const theDate = getByText(container, /^(January|February|March|April|May|June|July|August|September|October|November|December) ((19|20)\d{2})/)
  const Button = getByText(container, 'Generate Link')
  expect(localizedTimezone).toBeTruthy()
  expect(theDate).toBeTruthy()
  expect(Button).toBeTruthy()
})