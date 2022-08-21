import {useState, useCallback} from 'react'
import {BarChart, Bar, Cell, ResponsiveContainer} from 'recharts'

const DesktopChart = (props) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const arr = props.props

  const handleClick = useCallback(
    (_, index) => {
      setActiveIndex(index)
    },
    [setActiveIndex]
  )
  const activeItem = arr[activeIndex]

  //Average temperature inside
  const avg = (
    arr.reduce((r, t) => r + t.temperature, 0) / (arr.length || 1)
  ).toFixed(2)

  return (
    <div className="ChartBar-main">
      <section className="Chart-cont">
        <p className="content">Average {avg}°</p>
        <ResponsiveContainer width="99%" height="77%">
          <BarChart
            data={arr}
            margin={{
              top: 60,
              right: 15,
              bottom: 0,
              left: 20,
            }}
          >
            <Bar dataKey="temperature" onClick={handleClick}>
              {arr.map((entry, index) => (
                <Cell
                  cursor="pointer"
                  fill={index === activeIndex ? '#6fceda' : '#F3EDDF'}
                  key={`cell-${index}`}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="content">{`${
          activeItem.time
        }:00 - ${activeItem.temperature.toFixed(2)}°`}</p>
      </section>
    </div>
  )
}

export default DesktopChart
