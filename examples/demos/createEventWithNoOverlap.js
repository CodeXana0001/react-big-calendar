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
      unavailableTime: [],
    }
  }

  componentDidMount() {
    this.getAvailableTime()
  }

  addMins = (time, mins) => {
    return new Date(time.getTime() + mins * 60 * 1000)
  }

  minusMins = (time, mins) => {
    return new Date(time.getTime() - mins * 60 * 1000)
  }

  getAvailableTime = () => {
    const numDevice = 2
    const events = _.cloneDeep(this.state.events).filter(
      e => e.end > Date.now()
    )
    let occupiedTime = []
    if (events.length) {
      const countOccupiedTime = {}
      events.forEach(e => {
        for (
          let time = this.addMins(e.start, 15);
          time < e.end;
          time = this.addMins(time, 15)
        ) {
          if (countOccupiedTime[time]) {
            countOccupiedTime[time] = countOccupiedTime[time] + 1
          } else {
            countOccupiedTime[time] = 1
          }
        }
      })
      Object.keys(countOccupiedTime).forEach(key => {
        if (countOccupiedTime[key] >= numDevice) {
          occupiedTime.push(new Date(key))
        }
      })
      occupiedTime.sort((a, b) => a - b)
      if (occupiedTime.length) {
        let unavailableTime = []
        let start = this.minusMins(occupiedTime[0], 15)
        for (let i = 0; i < occupiedTime.length; i++) {
          if (
            i === 0 ||
            occupiedTime[i - 1] < this.minusMins(occupiedTime[i], 30)
          ) {
            start = this.minusMins(occupiedTime[i], 15)
          } else if (
            i === occupiedTime.length ||
            occupiedTime[i + 1] > this.addMins(occupiedTime[i], 30)
          ) {
            const end = this.addMins(occupiedTime[i], 15)
            unavailableTime.push([new Date(start), new Date(end)])
          }
        }
        this.setState({ unavailableTime })
      }
    }
  }

  isSlotAvailable = (start, end) => {
    const { unavailableTime } = this.state
    if (start <= Date.now()) {
      return false
    }
    return !unavailableTime.filter(e => e[0] <= start && e[1] >= end).length
  }

  handleSelect = ({ start, end }) => {
    const isAvailable = this.isSlotAvailable(start, end)
    if (isAvailable) {
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
  }

  slotStyleGetter = start => {
    const end = this.addMins(start, 15)
    const isAvailable = this.isSlotAvailable(start, end)
    if (!isAvailable)
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
          timeslots={4}
        />
      </>
    )
  }
}

CreateEventWithNoOverlap.propTypes = propTypes

export default CreateEventWithNoOverlap
