import React, { useEffect, useState } from 'react'
// @ts-ignore
import { moment } from 'react-datetime'
import Header from './components/Header'
import Form from './components/Form'
import Button from './components/Button'
import Footer from './components/Footer'
import 'react-datetime/css/react-datetime.css'
import { appStyles } from './App.styles'
import {
  generateQueryString,
  wakeUpServer,
  getBitlink
} from './utils/functions'

const App = () => {
  const currentMoment = moment()

  /* STATE VALUES */
  const [timezone, setTimezone] = useState('America/Phoenix')
  const [date, setDate] = useState(currentMoment)
  const [link, setLink] = useState('')
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    wakeUpServer()
    const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    setTimezone(currentTimezone)
  }, [])

  const generateLink = async () => {
    const day = date.format('YYYY-MM-DD')
    const time = date.format('h:mm a')
    setLoading(true)

    // Pass params as an object to generateQueryString
    const queryString = generateQueryString({ day, time, timezone })
    const url = `https://timezoner.surge.sh/events/${queryString}`
    const bitlink = await getBitlink(url)
    setLink(bitlink)
    setLoading(false)
  }

  const handleChange = date => {
    setDate(date)
    setLink('')
    setCopied(false)
  }

  const handleSelectText = () => {
    const eventLink = document.querySelector('[data-testid="event-link"]')
    // Check that event link exists first
    if (eventLink !== null) {
      window?.getSelection()?.selectAllChildren(eventLink)
      document.execCommand('copy')
      setCopied(true)
    }
  }

  return (
    <div className={appStyles}>
      <Header timezone={timezone} />
      <main>
        <Form handleChange={handleChange} date={date} />
        <Button text="Generate Link" onClick={generateLink} />
      </main>
      <Footer
        handleSelectText={handleSelectText}
        loading={loading}
        link={link}
        copied={copied}
      />
    </div>
  )
}

export default App
