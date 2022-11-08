import React, { useState, useEffect } from 'react'

const Blinker = () => {
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const interval = setInterval(
      () => setShowCursor((showCursor) => !showCursor),
      500
    )
    return () => clearInterval(interval)
  }, [])

  return <span>{showCursor ? '_' : ' '}</span>
}

export default Blinker
