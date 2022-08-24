import React from 'react'

const UnitIndicator = ({unit}) => {
  return (
    <>
      <p>{unit === 'celsius' ? `°C` : `°F`}</p>
    </>
  )
}

export default UnitIndicator
