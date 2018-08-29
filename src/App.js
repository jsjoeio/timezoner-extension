import React, { Component } from 'react'
import { css } from 'emotion'
import DateTime, { moment } from 'react-datetime'

import Button from './components/Button'
import 'react-datetime/css/react-datetime.css'
import { appStyles, headerStyles, formStyles, linkContainerStyles, linkStyles } from './App.styles'
import { generateQueryString, getBitlink } from './utils/functions'

class App extends Component {
  state = {
    link: '',
    loading: false,
    date: moment(),
    day: '',
    time: '',
    timezone: ''
  }

  componentWillMount() {
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
    const params = {
      day,
      time,
      timezone
    }
    const queryString = generateQueryString(params)
    const url = `https://timezoner.surge.sh/${queryString}`
    const options = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      timeout: 11000
    }
    const bitlink = await getBitlink(url, options)
    console.log(bitlink)
    this.setState({
      link: bitlink,
      loading: false
    })
  }

  handleChange = date => {
    this.setState({
      date,
      link: ''
    })
  }

  setDateAndTime = date => {
    this.setState({
      day: date.format('YYYY-MM-DD'),
      time: date.format('h:mm a')
    })
  }

  render() {
    const { link, loading, date, timezone } = this.state

    return (
      <div className={appStyles}>
        <header className={headerStyles}>
          <p>Your current timezone is</p>
          <h2>{timezone}</h2>
        </header>
        <main>
          <form className={formStyles}>
            <div>
              <DateTime
                onChange={this.handleChange}
                onBlur={this.setDateAndTime}
                value={date}
                timeFormat="h:mm a"
              />
            </div>
          </form>
          <Button text="Generate Link" onClick={this.generateLink} />
        </main>
          <footer>
            {loading && (
              <p>Loading...</p>
            )}
            {link !== '' && !loading && (
              <div className={linkContainerStyles}>
                <a href={link} target="_blank" className={linkStyles}>
                  <h4>{link}</h4>
                </a>
              </div>
            )}
        </footer>
      </div>
    )
  }
}

export default App
