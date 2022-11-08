import React, { useState, useEffect } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import * as styles from './timer.module.scss'

const milliSecToHHMMSS = (mil) => {
  return new Date(mil).toISOString().slice(11, -1)
}

const TimerPage = () => {
  const [startTime, setStartTime] = useState(Date.now())
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  const toggle = () => {
    setStartTime(Date.now() - time)
    setIsRunning((ir) => !ir)
  }

  const reset = () => {
    setStartTime(Date.now())
    setTime(0)
    setIsRunning(false)
  }

  useEffect(() => {
    let timer = null
    if (isRunning) {
      timer = setInterval(() => {
        const elapsedTime = Date.now() - startTime
        setTime(elapsedTime)
      }, 1)
    }
    return () => clearInterval(timer)
  }, [startTime, time, isRunning])

  return (
    <Layout>
      <SEO title="~/timer" />
      <h1>~/timer</h1>
      <div className={styles.timer}>
        <div className={styles.time}>
          <span>{milliSecToHHMMSS(time).slice(0, 9)}</span>
          <span style={{ fontSize: '1.25rem' }}>
            {milliSecToHHMMSS(time).substr(-3)}
          </span>
        </div>
        <div className={styles.controls}>
          <button onClick={toggle}>{isRunning ? 'Pause' : 'Start'}</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </Layout>
  )
}

export default TimerPage
