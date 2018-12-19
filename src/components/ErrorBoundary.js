import React, { Component } from 'react'
import * as Sentry from '@sentry/browser'
import Button from './Button'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error })
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key])
      })
      Sentry.captureException(error)
    })
  }

  render() {
    if (this.state.error) {
      //render fallback UI
      return (
        <Button onClick={() => Sentry.showReportDialog()}>
          Report feedback
        </Button>
      )
    } else {
      //when there's not an error, render children untouched
      return this.props.children
    }
  }
}

export default ErrorBoundary
