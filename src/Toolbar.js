import PropTypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'
import { navigate } from './utils/constants'

class Toolbar extends React.Component {
  render() {
    let {
      localizer: { messages },
      label,
    } = this.props

    console.log(label)

    return (
      <div className="rbc-toolbar">
        <span style={{ width: '33%' }} />
        <div
          style={{ width: '34%', display: 'flex', justifyContent: 'center' }}
        >
          <span
            className="rbc-btn-group"
            style={{ display: 'flex', margin: 'auto' }}
          >
            <button
              type="button"
              onClick={this.navigate.bind(null, navigate.PREVIOUS)}
            >
              {messages.previous}
            </button>
            <span className="rbc-toolbar-label">{label}</span>
            <button
              type="button"
              onClick={this.navigate.bind(null, navigate.NEXT)}
            >
              {messages.next}
            </button>
          </span>
        </div>
        <div style={{ width: '33%', display: 'flex', justifyContent: 'right' }}>
          <span className="rbc-btn-group" style={{ margin: 'right' }}>
            {this.viewNamesGroup(messages)}
          </span>
        </div>
      </div>
    )
  }

  navigate = action => {
    this.props.onNavigate(action)
  }

  view = view => {
    this.props.onView(view)
  }

  viewNamesGroup(messages) {
    let viewNames = this.props.views
    const view = this.props.view

    if (viewNames.length > 1) {
      return viewNames.map(name => (
        <button
          type="button"
          key={name}
          className={clsx({ 'rbc-active': view === name })}
          onClick={this.view.bind(null, name)}
        >
          {messages[name]}
        </button>
      ))
    }
  }
}

Toolbar.propTypes = {
  view: PropTypes.string.isRequired,
  views: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.node.isRequired,
  localizer: PropTypes.object,
  onNavigate: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
}

export default Toolbar
