const now = new Date()

const num = 200

let randomEventData = []
let i = 0
while (i < num) {
  const day = Math.floor(Math.random() * 30)
  const id = Math.floor(Math.random() * 100)
  randomEventData.push({
    id: id,
    title: `Test ${id}`,
    start: new Date(
      2021,
      10,
      day,
      Math.floor(Math.random() * 23),
      Math.floor(Math.random() * 59),
      0
    ),
    end: new Date(
      2021,
      10,
      day,
      Math.floor(Math.random() * 23),
      Math.floor(Math.random() * 59),
      0
    ),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  })
  i++
}

export default randomEventData
  .concat([
    {
      id: 0,
      title: 'Meeting',
      allDay: true,
      start: new Date(2021, 10, 0),
      end: new Date(2021, 10, 1),
    },
    {
      id: 2,
      title: 'QTX STARTS',
      start: new Date(2021, 10, 13, 0, 0, 0),
      end: new Date(2021, 10, 20, 0, 0, 0),
    },

    {
      id: 3,
      title: 'TEST',
      start: new Date(2021, 10, 6, 0, 0, 0),
      end: new Date(2021, 10, 13, 0, 0, 0),
    },
    {
      id: 6,
      title: 'Meeting',
      start: new Date(2021, 10, 12, 10, 30, 0, 0),
      end: new Date(2021, 10, 12, 12, 30, 0, 0),
      desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
      id: 7,
      title: 'Operation',
      start: new Date(2021, 10, 12, 12, 0, 0, 0),
      end: new Date(2021, 10, 12, 13, 0, 0, 0),
      desc: 'Power lunch',
    },
    {
      id: 8,
      title: 'Meeting',
      start: new Date(2021, 10, 12, 14, 0, 0, 0),
      end: new Date(2021, 10, 12, 15, 0, 0, 0),
    },
    {
      id: 9,
      title: 'Vaccination',
      start: new Date(2021, 10, 12, 17, 0, 0, 0),
      end: new Date(2021, 10, 12, 17, 30, 0, 0),
      desc: 'Most important meal of the day',
    },
    {
      id: 11,
      title: 'Meeting',
      start: new Date(2021, 10, 13, 8, 0, 0),
      end: new Date(2021, 10, 13, 10, 30, 0),
    },
    {
      id: 11.1,
      title: 'Inconvenient Conference Call',
      start: new Date(2021, 10, 13, 9, 30, 0),
      end: new Date(2021, 10, 13, 12, 0, 0),
    },
    {
      id: 11.2,
      title: "Project Kickoff - Lou's Shoes",
      start: new Date(2021, 10, 13, 11, 30, 0),
      end: new Date(2021, 10, 13, 14, 0, 0),
    },
    {
      id: 11.3,
      title: 'Quote Follow-up - Tea by Tina',
      start: new Date(2021, 10, 13, 15, 30, 0),
      end: new Date(2021, 10, 13, 16, 0, 0),
    },
    {
      id: 13,
      title: 'Multi-day Event',
      start: new Date(2021, 10, 20, 19, 30, 0),
      end: new Date(2021, 10, 22, 2, 0, 0),
    },
    {
      id: 14,
      title: 'Today',
      start: new Date(new Date().setHours(new Date().getHours() - 3)),
      end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
    {
      id: 15,
      title: 'Point in Time Event',
      start: now,
      end: now,
    },
    {
      id: 16,
      title: 'Video Record',
      start: new Date(2021, 10, 14, 15, 30, 0),
      end: new Date(2021, 10, 14, 19, 0, 0),
    },
    {
      id: 17,
      title: 'Dutch Song Producing',
      start: new Date(2021, 10, 14, 16, 30, 0),
      end: new Date(2021, 10, 14, 20, 0, 0),
    },
    {
      id: 18,
      title: 'Itaewon Halloween Meeting',
      start: new Date(2021, 10, 14, 16, 30, 0),
      end: new Date(2021, 10, 14, 17, 30, 0),
    },
    {
      id: 19,
      title: 'Online Coding Test',
      start: new Date(2021, 10, 14, 17, 30, 0),
      end: new Date(2021, 10, 14, 20, 30, 0),
    },
    {
      id: 20,
      title: 'An overlapped Event',
      start: new Date(2021, 10, 14, 17, 0, 0),
      end: new Date(2021, 10, 14, 18, 30, 0),
    },
    {
      id: 21,
      title: 'Phone Interview',
      start: new Date(2021, 10, 14, 17, 0, 0),
      end: new Date(2021, 10, 14, 18, 30, 0),
    },
    {
      id: 22,
      title: 'Cooking Class',
      start: new Date(2021, 10, 14, 17, 30, 0),
      end: new Date(2021, 10, 14, 19, 0, 0),
    },
    {
      id: 23,
      title: 'Go to the gym',
      start: new Date(2021, 10, 14, 18, 30, 0),
      end: new Date(2021, 10, 14, 20, 0, 0),
    },
  ])
  .filter(
    e =>
      e.start.getHours() >= 6 &&
      e.end.getHours() <= 18 &&
      e.start.getHours() < e.end.getHours() &&
      e.end.getDate() === e.start.getDate()
  )
