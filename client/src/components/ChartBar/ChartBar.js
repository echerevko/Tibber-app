import {useState} from 'react'
import DesktopChart from './components/DesktopChart'
import MobileChart from './components/MobileChart'
import {useWindowResize, useThrottledCallback} from 'beautiful-react-hooks'
import {TABLET_WIDTH_SIZE} from '../../assets/shared/constants'
import {useQuery} from '@apollo/client'
import {GET_ALL_CONDITIONS} from '../../query/conditions'

const ChartBar = () => {
  const {data, loading, error} = useQuery(GET_ALL_CONDITIONS)
  const [unit, setUnit] = useState('celsius')
  const [width, setWidth] = useState(window.innerWidth)
  const onWindowResize = useWindowResize()

  //determine screen size
  onWindowResize(
    useThrottledCallback((event) => {
      setWidth(window.innerWidth)
    })
  )

  //server data processing
  const arr = data?.getWeather?.entries.map((entry) => ({
    ...entry,
    time:
      typeof entry.time === 'string' ? entry.time.substr(11, 2) : entry.time,
  }))
  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) return `Error! ${error.message}`

  //handle the submission to F
  const showFahrenheit = (e) => {
    e.preventDefault()
    setUnit('fahrenheit')
    toFahrenheit()
  }

  function toFahrenheit() {
    const fahrenheits = arr.map((entry) => ({
      ...entry,
      temperature: (entry.temperature * 9) / 5 + 32,
    }))
    return fahrenheits
  }

  //handle the submission to C
  const showCelsius = (e) => {
    e.preventDefault()
    setUnit('celsius')
  }

  return (
    <div className="ChartBar-main">
      <section className="ChartBar">
        <p id="Unit">{unit === 'celsius' ? `°C` : `°F`}</p>
        {width >= TABLET_WIDTH_SIZE ? (
          <DesktopChart props={unit === 'celsius' ? arr : toFahrenheit()} />
        ) : (
          <MobileChart props={unit === 'celsius' ? arr : toFahrenheit()} />
        )}
      </section>
      <section className="btns">
        <button className="btn-1" onClick={(e) => showFahrenheit(e)}>
          show ℉
        </button>
        <button className="btn-2" onClick={(e) => showCelsius(e)}>
          ReSET
        </button>
      </section>
    </div>
  )
}

export default ChartBar
