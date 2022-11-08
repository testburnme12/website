import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc.js'
import timezone from 'dayjs/plugin/timezone.js'
import dayOfYear from 'dayjs/plugin/dayOfYear.js'
import weekOfYear from 'dayjs/plugin/weekOfYear.js'
import isLeapYear from 'dayjs/plugin/isLeapYear.js'
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear.js'
import advancedFormat from 'dayjs/plugin/advancedFormat.js'

import Layout from '../components/layout'
import SEO from '../components/seo'

import * as styles from './tz.module.scss'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(dayOfYear)
dayjs.extend(weekOfYear)
dayjs.extend(isLeapYear)
dayjs.extend(isoWeeksInYear)
dayjs.extend(advancedFormat)

const userTimeZone = dayjs.tz.guess()
const getUserTime = () => dayjs().tz(userTimeZone)
const cities = [
  {
    city: 'New York, NY, USA',
    timezone: 'America/New_York',
    link: 'https://en.wikipedia.org/wiki/New_York',
  },
  {
    city: 'Los Angeles, CA, USA',
    timezone: 'America/Los_Angeles',
    link: 'https://en.wikipedia.org/wiki/Los_Angeles',
  },
  {
    city: 'London, UK',
    timezone: 'Europe/London',
    link: 'https://en.wikipedia.org/wiki/London',
  },
  {
    city: 'Tokyo, Japan',
    timezone: 'Asia/Tokyo',
    link: 'https://en.wikipedia.org/wiki/Tokyo',
  },
  {
    city: 'Sydney, Australia',
    timezone: 'Australia/Sydney',
    link: 'https://en.wikipedia.org/wiki/Sydney',
  },
  {
    city: 'Shanghai, China',
    timezone: 'Asia/Shanghai',
    link: 'https://en.wikipedia.org/wiki/Shanghai',
  },
  {
    city: 'New Delhi, India',
    timezone: 'Asia/Kolkata',
    link: 'https://en.wikipedia.org/wiki/New_Delhi',
  },
  {
    city: 'Paris, France',
    timezone: 'Europe/Paris',
    link: 'https://en.wikipedia.org/wiki/Paris',
  },
  {
    city: 'Moscow, Russia',
    timezone: 'Europe/Moscow',
    link: 'https://en.wikipedia.org/wiki/Moscow',
  },
  {
    city: 'Abu Dhabi, UAE',
    timezone: 'Asia/Dubai',
    link: 'https://en.wikipedia.org/wiki/Abu_Dhabi',
  },
]

const TzPage = () => {
  const [is24HourFormat, setIs24HourFormat] = useState(true)
  const [userTime, setUserTime] = useState(getUserTime())

  useEffect(() => {
    const timer = setInterval(() => setUserTime(getUserTime), 1000)
    return () => clearInterval(timer)
  }, [])

  const format = is24HourFormat
    ? 'ddd, MMM D, YYYY, HH:mm:ss (ZZ)'
    : 'ddd, MMM D, YYYY, hh:mm:ss A (ZZ)'

  return (
    <Layout>
      <SEO title="~/tz" />
      <h1>~/tz</h1>
      <form style={{ marginBottom: '0' }}>
        <input
          type="checkbox"
          id="format"
          name="format"
          autoComplete="off"
          onChange={() => setIs24HourFormat((is24hf) => !is24hf)}
        />{' '}
        <label htmlFor="format">12-hour clock</label>
      </form>
      <div className={styles.container}>
        <div className={`${styles.info} shadow`}>
          <a href="https://en.wikipedia.org/wiki/Year_2038_problem">
            Unix time
          </a>
          : <strong>{dayjs().unix()}</strong>
          <br />
          <a href="https://en.wikipedia.org/wiki/Coordinated_Universal_Time">
            UTC
          </a>
          : <strong>{dayjs().utc().format(format)}</strong>
          <br />
          <br />
          Your estimated timezone: <strong>{userTimeZone}</strong>
          <br />
          Your estimated local time: <strong>{userTime.format(format)}</strong>
          <br />
          <br />
          Day of the month:{' '}
          <strong>
            {userTime.format('D')}/{dayjs().daysInMonth()}
          </strong>
          <br />
          Week of the year:{' '}
          <strong>
            {userTime.format('w')}/{dayjs().isoWeeksInYear()}
          </strong>
          <br />
          Day of the year:{' '}
          <strong>
            {dayjs(userTime).dayOfYear()}/{dayjs().isLeapYear() ? '366' : '365'}
          </strong>
        </div>
        <div className={styles.cities}>
          <table>
            <tr>
              <td>
                <strong>City</strong>
              </td>
              <td>
                <strong>Local time (± UTC offset)</strong>
              </td>
            </tr>
            {cities.map((city) => (
              <tr key={city}>
                <td>
                  <a
                    href={city.link}
                    style={{
                      borderBottom:
                        userTimeZone === city.timezone ? '1px solid' : 'none',
                    }}
                  >
                    {city.city}
                  </a>
                </td>
                <td>{dayjs().tz(city.timezone).format(format)}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default TzPage
