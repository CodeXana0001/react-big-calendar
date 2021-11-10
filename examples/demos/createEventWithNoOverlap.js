import React from 'react'
import { Calendar, Views } from 'react-big-calendar'
import events from '../events'
import _ from 'lodash'

const propTypes = {}

class CreateEventWithNoOverlap extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = {
      events: _.cloneDeep(events),
      dayLayoutAlgorithm: 'no-overlap',
    }
  }

  handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name')
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
  }

  slotStyleGetter = date => {
    const hours = new Date(date).getHours()
    if (hours > 18 || hours < 6)
      return {
        style: {
          backgroundColor: 'grey',
        },
      }
  }

  eventStyleGetter = event => {
    if (event.id % 3 === 0)
      return {
        style: {
          backgroundColor: 'green',
        },
      }
    if (event.id % 3 === 1)
      return {
        style: {
          backgroundColor: 'orange',
        },
      }
  }

  render() {
    const { localizer } = this.props
    console.log(this.state.events[0])
    return (
      <>
        <Calendar
          selectable
          localizer={localizer}
          events={this.state.events}
          defaultView={Views.MONTH}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date()}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect}
          dayLayoutAlgorithm={this.state.dayLayoutAlgorithm}
          slotPropGetter={this.slotStyleGetter}
          eventPropGetter={this.eventStyleGetter}
          step={15}
          timeslots={1}
        />
      </>
    )
  }
}

CreateEventWithNoOverlap.propTypes = propTypes

export default CreateEventWithNoOverlap
