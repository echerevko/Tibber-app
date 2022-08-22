const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')

const weather = {
  minTemperature: 21,
  maxTemperature: 22,
  entries: [
    {
      time: '2022-08-17T00:00:00.000+02:00',
      temperature: 23.2,
      type: 'sun',
    },
    {
      time: '2022-08-17T01:00:00.000+02:00',
      temperature: 22.9,
      type: 'sun',
    },
    {
      time: '2022-08-17T02:00:00.000+02:00',
      temperature: 22.4,
      type: 'cloud',
    },
    {
      time: '2022-08-17T03:00:00.000+02:00',
      temperature: 21.9,
      type: 'cloud',
    },
    {
      time: '2022-08-17T04:00:00.000+02:00',
      temperature: 21.5,
      type: 'cloud',
    },
    {
      time: '2022-08-17T05:00:00.000+02:00',
      temperature: 21.2,
      type: 'cloud',
    },
    {
      time: '2022-08-17T06:00:00.000+02:00',
      temperature: 21.1,
      type: 'cloud',
    },
    {
      time: '2022-08-17T07:00:00.000+02:00',
      temperature: 23.2,
      type: 'sun',
    },
    {
      time: '2022-08-17T08:00:00.000+02:00',
      temperature: 22.9,
      type: 'sun',
    },
    {
      time: '2022-08-17T09:00:00.000+02:00',
      temperature: 22.4,
      type: 'cloud',
    },
    {
      time: '2022-08-17T10:00:00.000+02:00',
      temperature: 21.9,
      type: 'cloud',
    },
    {
      time: '2022-08-17T11:00:00.000+02:00',
      temperature: 21.5,
      type: 'cloud',
    },
    {
      time: '2022-08-17T12:00:00.000+02:00',
      temperature: 21.2,
      type: 'cloud',
    },
    {
      time: '2022-08-17T13:00:00.000+02:00',
      temperature: 21.1,
      type: 'cloud',
    },
    {
      time: '2022-08-17T14:00:00.000+02:00',
      temperature: 23.2,
      type: 'sun',
    },
    {
      time: '2022-08-17T15:00:00.000+02:00',
      temperature: 22.9,
      type: 'sun',
    },
    {
      time: '2022-08-17T16:00:00.000+02:00',
      temperature: 22.4,
      type: 'cloud',
    },
    {
      time: '2022-08-17T17:00:00.000+02:00',
      temperature: 21.9,
      type: 'cloud',
    },
    {
      time: '2022-08-17T18:00:00.000+02:00',
      temperature: 21.5,
      type: 'cloud',
    },
    {
      time: '2022-08-17T19:00:00.000+02:00',
      temperature: 21.2,
      type: 'cloud',
    },
    {
      time: '2022-08-17T20:00:00.000+02:00',
      temperature: 21.1,
      type: 'cloud',
    },
  ],
}

const app = express()
app.use(cors())

const root = {
  getWeather: () => {
    return weather
  },
}

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  })
)
app.listen(5000, () => console.log('server started on port 5000'))
