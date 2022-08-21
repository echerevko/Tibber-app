import {gql} from '@apollo/client'

export const GET_ALL_CONDITIONS = gql`
  query {
    getWeather {
      minTemperature
      maxTemperature
      entries {
        time
        temperature
      }
    }
  }
`
