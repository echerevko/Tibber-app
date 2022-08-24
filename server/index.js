const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')
const fetch = require('node-fetch')
const dotenv = require('dotenv')

// load .env variables
const envConfigurationResult = dotenv.config()
if (envConfigurationResult.error) throw envConfigurationResult.error

const {TOKEN_URL, DATA_URL, EMAIL, PASSWORD, HOME_ID} = process.env

//Authorization function
async function getToken() {
  //TODO: Get permanent token to replace credentials
  const credentials = JSON.stringify({
    email: EMAIL,
    password: PASSWORD,
  })

  //description of the request
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: credentials,
  }

  //getting a token
  const response = await fetch(TOKEN_URL, options)
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`
    throw new Error(message)
  }

  const token = await response.json()

  return token
}

//Description of requested query data
async function makeRequest(token) {
  const query = JSON.stringify({
    query: `{
      me {
        home(id: "${HOME_ID}") {
          weather {
            minTemperature
            maxTemperature
            entries {
              time
              temperature
              type
            }
          }
        }
      }
    }`,
  })

  //description of the data request
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
      'User-Agent': 'Node',
    },
    body: query,
  }

  //Data response processing
  const response = await fetch(DATA_URL, params)
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`
    throw new Error(message)
  }

  const weather = await response.json()

  return weather
}

const app = express()
app.use(cors())

const root = {
  getWeather: async () => {
    let weather = ''
    let token = ''

    //getToken
    await getToken().then((response) => {
      token = response.token
    })

    //getData
    await makeRequest(token).then((response) => {
      weather = response.data.me.home.weather
    })

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
