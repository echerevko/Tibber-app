const {buildSchema} = require('graphql')

const schema = buildSchema(`
    type Weather {
        minTemperature: Float
        maxTemperature: Float
        entries: [Entrie]
    }

    type Entrie {
        time: String
        temperature: Float
        type: String
    }

    type Query {
        getWeather: Weather
    }

`)

module.exports = schema
