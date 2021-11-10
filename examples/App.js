import React from 'react'
import { render } from 'react-dom'

import localizer from 'react-big-calendar/lib/localizers/globalize'
import globalize from 'globalize'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import 'react-big-calendar/lib/sass/styles.scss'
import './styles.scss'
import './prism.scss'
import CreateEventWithNoOverlap from './demos/createEventWithNoOverlap'

const globalizeLocalizer = localizer(globalize)

const DEFAULT_EXAMPLE = 'basic'

class Example extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = {
      selected: DEFAULT_EXAMPLE,
    }
  }

  select = selected => {
    this.setState({ selected })
  }

  componentDidMount() {
    const hash = (window.location.hash || '').slice(1)
    this.select(hash || DEFAULT_EXAMPLE)
  }

  render() {
    return (
      <div className="app">
        <div className="jumbotron">
          <div className="container">
            <h1>
              Calendar Mock Up <i className="fa fa-calendar" />
            </h1>
          </div>
        </div>
        <div className="examples">
          <div className="example">
            <CreateEventWithNoOverlap localizer={globalizeLocalizer} />
          </div>
        </div>
        <div className="docs" />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  render(<Example />, document.getElementById('app'))
})
