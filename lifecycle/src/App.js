import React, { useState } from 'react'
import ClassLifeCycle from './ClassLifeCycle'
import ErrorBounding from './ErrorBounding'
import UseEffect from './UseEffect'
import Circle from './CircleCreating/Circle'

function App() {
  // const [flag, setFlag] = useState(true)
  return (
    <>
      {/* <button onClick={() => setFlag(false)}>Remove Component</button>
      {
        flag && <ClassLifeCycle color="green" />
      } */}

      {/* <ErrorBounding>
        <ClassLifeCycle color="green" />
      </ErrorBounding> */}
      {/* <UseEffect /> */}
      <Circle />
    </>
  )
}

export default App