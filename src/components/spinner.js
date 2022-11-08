import React, { useContext } from 'react'

import ThemeContext from '../context/theme-context'

import grid from '../assets/grid.svg'

const Spinner = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div>
      <img
        src={grid}
        style={{
          width: '35px',
          margin: 'auto',
          display: 'block',
          filter: theme === 'light' ? 'invert(1)' : null,
        }}
        alt="Loading..."
      />
    </div>
  )
}

export default Spinner
