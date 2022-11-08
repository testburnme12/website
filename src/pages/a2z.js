import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const daysOfWeek = 'sunday monday tuesday wednesday thursday friday saturday'
const monthsOfYear =
  'january february march april may june july august september october november december'

const A2zPage = () => {
  const [state, setState] = useState({
    target: alphabet,
    input: '',
    startTime: null,
    endTime: null,
  })

  const getNextCharacter = () => {
    return state.target[state.input.length].replace(' ', 'Space') || null
  }

  const isValidInput = (str) => {
    if (str.length > state.target.length || str.length < state.input.length)
      return false

    let idx = str.length - 1
    return str[idx] === state.target[idx]
  }

  const onChangeTarget = (e) => {
    setState({
      target:
        e.target.value === 'alphabet'
          ? alphabet
          : e.target.value === 'daysOfWeek'
          ? daysOfWeek
          : monthsOfYear,
      input: '',
      startTime: null,
      endTime: null,
    })
  }

  const onChange = (e) => {
    e.preventDefault()

    setState({
      ...state,
      input: isValidInput(e.target.value.toLowerCase())
        ? e.target.value
        : state.input,
      startTime:
        e.target.value.toLowerCase() === state.target[0]
          ? Date.now()
          : state.startTime,
      endTime: e.target.value === state.target ? Date.now() : state.endTime,
    })
  }

  const onReset = (e) => {
    e.preventDefault()
    setState({
      target: state.target,
      input: '',
      startTime: null,
      endTime: null,
    })
  }

  return (
    <Layout>
      <SEO title="~/a2z" />
      <h1>~/a2z</h1>
      <div style={{ marginBottom: '5rem' }}>
        <form
          style={{
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
          onSubmit={onReset}
        >
          <p>
            How fast can you type the{' '}
            <label>
              <input
                type="radio"
                name="target"
                id="alphabet"
                value="alphabet"
                onChange={onChangeTarget}
                checked={state.target === alphabet}
              />
              alphabet
            </label>
            <label>
              {' '}
              <input
                type="radio"
                name="target"
                id="daysOfWeek"
                value="daysOfWeek"
                onChange={onChangeTarget}
                checked={state.target === daysOfWeek}
              />
              days of week
            </label>
            <label>
              {' '}
              <input
                type="radio"
                name="target"
                id="monthsOfYear"
                value="monthsOfYear"
                onChange={onChangeTarget}
                checked={state.target === monthsOfYear}
              />
              months of year
            </label>
            ?
          </p>
          <div>
            {state.input === state.target ? (
              <>
                Time:{' '}
                <strong>{(state.endTime - state.startTime) / 1000}s</strong>
                <br />
              </>
            ) : null}
            {state.input === state.target ? (
              <>
                <strong>Success!</strong>
                <br />
              </>
            ) : (
              <>
                Next character:{' '}
                <strong>{getNextCharacter().toUpperCase()}</strong>
                <br />
              </>
            )}
            {state.startTime && state.input !== state.target ? (
              <>
                Continue typing...
                <br />
              </>
            ) : null}
          </div>
          <div>
            <textarea
              style={{ width: '300px', height: '150px', resize: 'none' }}
              value={state.input.toLowerCase()}
              placeholder={`${state.target}`}
              onChange={onChange}
              onPaste={onChange}
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              autoFocus
            />
          </div>
          <button type="submit">Reset</button>
        </form>
      </div>
    </Layout>
  )
}

export default A2zPage
