import React from 'react'

export const Button = ({transformUnit, unit}) => {
  return (
    <>
      <button
        onClick={transformUnit}
        className={unit === 'celsius' ? 'Btn-2' : 'Btn-1'}
      >
        {unit === 'celsius' ? 'ReSET' : 'show ℉'}
      </button>
    </>
  )
}

export default Button
