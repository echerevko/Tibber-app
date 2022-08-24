import {useState, Fragment} from 'react'
import DesktopChart from './components/DesktopChart'
import MobileChart from './components/MobileChart'
import Button from './components/Button'
import UnitIndicator from './components/UnitIndicator'
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
    time:
      typeof entry.time === 'string' ? entry.time.substr(11, 2) : entry.time,
    temperature: Math.round(entry.temperature),
  }))

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) return `Error! ${error.message}`

  //handle submission to F
  const showFahrenheit = () => {
    setUnit('fahrenheit')
    toFahrenheit()
  }

  function toFahrenheit() {
    const fahrenheits = arr.map((entry) => ({
      ...entry,
      temperature: Math.round((entry.temperature * 9) / 5 + 32), //to fahrenheit
    }))
    return fahrenheits
  }

  //handle submission to C
  const showCelsius = () => {
    setUnit('celsius')
  }

  return (
    <div className="ChartBar-main">
      <section className="ChartBar">
        {width >= TABLET_WIDTH_SIZE ? (
          <DesktopChart
            arr={unit === 'celsius' ? arr : toFahrenheit()}
            unit={unit}
          />
        ) : (
          <Fragment>
            <UnitIndicator unit={unit} />
            <MobileChart
              arr={unit === 'celsius' ? arr : toFahrenheit()}
              unit={unit}
            />
          </Fragment>
        )}
      </section>
      <section className="Btns">
        <Button transformUnit={showFahrenheit} unit={'fahrenheit'} />
        <Button transformUnit={showCelsius} unit={'celsius'} />
      </section>
    </div>
  )
}

export default ChartBar
