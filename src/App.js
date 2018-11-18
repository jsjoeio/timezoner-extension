import React, { Component } from 'react'
import { css } from 'emotion'
import DateTime, { moment } from 'react-datetime'
import Button from './components/Button'
import Header from './components/Header'
import { AppWithHooks } from './components/AppWithHooks'
import 'react-datetime/css/react-datetime.css'
import {
  appStyles,
  formStyles,
  linkContainerStyles,
  linkStyles
} from './App.styles'
import {
  generateQueryString,
  wakeUpServer,
  getBitlink
} from './utils/functions'

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
    const params = {
      day,
      time,
      timezone
    }
    const queryString = generateQueryString(params)
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
      link: ''
    })
  }

  handleSelectText = () => {
    window
      .getSelection()
      .selectAllChildren(document.querySelector('[data-testid="event-link"]'))
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
        <Header timezone={timezone} />
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
        <div>
          <AppWithHooks />
        </div>
        <footer>
          {loading && <p>Loading...</p>}
          {link !== '' && !loading && (
            <div className={linkContainerStyles}>
              <label>️⬇️ Click link to select ⬇️</label>
              <h4 onClick={this.handleSelectText} data-testid="event-link">
                {link}
              </h4>
            </div>
          )}
        </footer>
      </div>
    )
  }
}

export default App
