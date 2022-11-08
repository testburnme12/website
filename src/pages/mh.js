import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const doors = ['A', 'B', 'C']
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)]

const Door = ({ name, isOpen, giftDoor, showGift, ...props }) => {
  return (
    <div
      style={{
        height: '80px',
        width: '50px',
        cursor: 'pointer',
        textAlign: 'center',
        userSelect: 'none',
        border: isOpen ? '1px dashed' : '1px solid',
      }}
      {...props}
    >
      {name} {isOpen && '💩'} {showGift && name === giftDoor && '🍫'}
    </div>
  )
}

const MontyHallPage = () => {
  const [state, setState] = useState({
    giftDoor: getRandomItem(doors),
    selectedDoor: null,
    switch: null,
    isGameFinished: false,
  })

  const openedDoor =
    state.selectedDoor &&
    doors.find((door) => door !== state.selectedDoor && door !== state.giftDoor)

  const remainingDoor =
    openedDoor &&
    getRandomItem(
      doors.filter((door) => door !== state.selectedDoor && door !== openedDoor)
    )

  let result = null
  if (state.isGameFinished) {
    result =
      state.switch === true
        ? remainingDoor === state.giftDoor
          ? 'won'
          : 'lost'
        : state.selectedDoor === state.giftDoor
        ? 'won'
        : 'lost'
  }

  return (
    <Layout>
      <SEO title="~/mh" />
      <h1>~/mh</h1>
      <div style={{ marginBottom: '10rem' }}>
        <p>
          This tool simulates the{' '}
          <a href="https://en.wikipedia.org/wiki/Monty_Hall_problem">
            Monty Hall brain teaser
          </a>
          .
        </p>
        <p>
          There is a gift behind one of the doors and bad things in the others.
          Pick one.
        </p>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {doors.map((door) => (
            <div key={door}>
              <Door
                name={door}
                isOpen={door === openedDoor}
                giftDoor={state.giftDoor}
                showGift={state.isGameFinished}
                onClick={() =>
                  setState({
                    ...state,
                    selectedDoor: state.selectedDoor
                      ? state.selectedDoor
                      : door,
                  })
                }
              />
            </div>
          ))}
        </div>
        {state.selectedDoor && (
          <>
            <br />
            You picked door {state.selectedDoor}.<br />
            Let me open one of the doors ({openedDoor}) with bad things behind
            it.
            <br />
            {state.switch === null && (
              <>
                Would you like to switch your choice to {remainingDoor}?{' '}
                <button
                  onClick={() =>
                    setState({
                      ...state,
                      switch: true,
                      isGameFinished: true,
                    })
                  }
                >
                  Yes
                </button>{' '}
                <button
                  onClick={() =>
                    setState({
                      ...state,
                      switch: false,
                      isGameFinished: true,
                    })
                  }
                >
                  No
                </button>
              </>
            )}
          </>
        )}
        {state.switch ? (
          <>
            You switched to door {remainingDoor}.<br />
          </>
        ) : state.switch === false ? (
          <>
            You did not switch to door {remainingDoor}.<br />
          </>
        ) : null}
        {state.isGameFinished && (
          <>
            You {result} {result === 'won' ? ' :)' : ' :('}.
            {result === 'lost' && <> The gift was in door {state.giftDoor}.</>}
            <br />
          </>
        )}
        {state.isGameFinished && (
          <button
            onClick={() =>
              setState({
                giftDoor: getRandomItem(doors),
                selectedDoor: null,
                switch: null,
                isGameFinished: false,
              })
            }
          >
            Play again
          </button>
        )}
      </div>
    </Layout>
  )
}

export default MontyHallPage
