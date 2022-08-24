import {useState, useCallback} from 'react'
import {BarChart, Bar, Cell, ResponsiveContainer} from 'recharts'

const DesktopChart = ({arr, unit}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const setUnit = unit === 'celsius' ? `°C` : `°F`

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
  ).toFixed(0)

  return (
    <div className="ChartBar-main">
      <h5 className="Avarage-temp">Average temperature</h5>
      <section className="Chart-cont">
        <h2 className="Content">
          {avg}
          {setUnit}
        </h2>
        <ResponsiveContainer width="99%" height="72%">
          <BarChart
            data={arr}
            margin={{
              top: 30,
              right: 15,
              bottom: 20,
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
        <p className="Content">{`${
          activeItem.time
        }:00 - ${activeItem.temperature.toFixed(0)}${setUnit}`}</p>
      </section>
    </div>
  )
}

export default DesktopChart
