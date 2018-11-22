import React, { Component } from 'react'
import { moment } from 'react-datetime'
import Header from './components/Header'
import Form from './components/Form'
import Button from './components/Button'
import Footer from './components/Footer'
import 'react-datetime/css/react-datetime.css'
import { appStyles, formStyles } from './App.styles'
import {
  generateQueryString,
  wakeUpServer,
  getBitlink
} from './utils/functions'

class App extends Component {
  state = {
    copied: false,
    date: moment(),
    day: '',
    link: '',
    loading: false,
    time: '',
    timezone: ''
  }

  componentWillMount() {
    wakeUpServer()
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    this.setState({
      timezone
    })
  }

  componentDidMount() {
    this.setDateAndTime(this.state.date)
  }

  generateLink = async () => {
    this.setState({
      loading: true
    })

    const { day, time, timezone } = this.state

    // Pass params as an object to generateQueryString
    const queryString = generateQueryString({ day, time, timezone })
    const url = `https://timezoner.surge.sh/${queryString}`
    const bitlink = await getBitlink(url)
    this.setState({
      link: bitlink,
      loading: false
    })
  }

  handleChange = date => {
    this.setState({
      date,
      link: '',
      copied: false
    })
  }

  handleSelectText = () => {
    window
      .getSelection()
      .selectAllChildren(document.querySelector('[data-testid="event-link"]'))
    document.execCommand('copy')
    this.setState({
      copied: true
    })
  }

  setDateAndTime = date => {
    this.setState({
      day: date.format('YYYY-MM-DD'),
      time: date.format('h:mm a')
    })
  }

  render() {
    const { link, loading, date, timezone, copied } = this.state

    return (
      <div className={appStyles}>
        <Header timezone={timezone} />
        <main>
          <Form
            handleChange={this.handleChange}
            setDateAndTime={this.setDateAndTime}
            date={date}
          />
          <Button text="Generate Link" onClick={this.generateLink} />
        </main>
        <Footer
          handleSelectText={this.handleSelectText}
          loading={loading}
          link={link}
          copied={copied}
        />
      </div>
    )
  }
}

export default App
