import React, {useCallback, useState, useMemo} from 'react'
import {PieChart, Pie, Sector} from 'recharts'

//Customized chart element for mobile version with dynamic data display
const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    temperature,
  } = props
  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {`${payload.time}:00 - ${temperature.toFixed(0)}°`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 5}
        outerRadius={outerRadius + 15}
        fill={fill}
      />
    </g>
  )
}

const MobileChart = ({arr, unit}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const avg = useMemo(() => {
    return (
      arr.reduce((r, t) => r + t.temperature, 0) / (arr.length || 1)
    ).toFixed(0) //Average temperature inside
  })
  const setUnit = unit === 'celsius' ? `°C` : `°F`

  //Click handling
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index)
    },
    [setActiveIndex]
  )

  return (
    <>
      <section className="Chart-cont">
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={arr}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={140}
            fill="#6fceda"
            dataKey="temperature"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </section>
      <p className="Content">
        Average{' '}
        <i>
          <b>t</b>
        </i>{' '}
        today: {avg}
        {setUnit}
      </p>
    </>
  )
}
export default MobileChart
