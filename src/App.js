import React, { Component } from 'react'
import { css } from 'emotion'
import DateTime from 'react-datetime'
import Button from './components/Button'
import 'react-datetime/css/react-datetime.css'
import { appStyles, headerStyles, formStyles } from './App.styles'
import { CLIENT_RENEG_LIMIT } from 'tls'
class App extends Component {
  state = {
    link: '',
    date: new Date(),
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

  generateLink = () => {
    const { day, time, timezone } = this.state
    const params = {
      day,
      time,
      timezone
    }

    const queryString = Object.keys(params)
      .map(key => {
        return `?${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      })
      .join('&')

    this.setState({
      link: `https://timezoner.surge.sh/${queryString}`
    })
  }

  handleChange = date => {
    this.setState({
      date
    })
  }

  setDateAndTime = date => {
    this.setState({
      day: date.format('YYYY-MM-DD'),
      time: date.format('h:mm a')
    })
  }

  render() {
    const { link, date, timezone } = this.state

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
          <Button text="Generate Link" onClick={this.generateLink}/>
        </main>
        {link !== '' && (
          <footer>
            <div
              className={css`
                margin: 0 25px;
              `}
            >
              <a
                href={link}
                target="_blank"
                className={css`
                  word-wrap: break-word;
                `}
              >
                <h4>{link}</h4>
              </a>
            </div>
          </footer>
        )}
      </div>
    )
  }
}

export default App
