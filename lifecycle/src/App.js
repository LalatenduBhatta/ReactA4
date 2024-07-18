import React, { useState } from 'react'
import ClassLifeCycle from './ClassLifeCycle'
import ErrorBounding from './ErrorBounding'
import UseEffect from './UseEffect'
import Circle from './CircleCreating/Circle'
import Task2 from './Tasks/Task2'
import Task3 from './Tasks/Task3'
import Task4 from './Tasks/Task4'
import Task5 from './Tasks/Task5'
import Task6 from './Tasks/Task6'
import Task7 from './Tasks/Task7'

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
      {/* <Circle /> */}
      {/* <Task2 /> */}
      {/* <Task3 /> */}
      {/* <Task4 /> */}
      {/* <Task5 /> */}
      {/* <Task6 /> */}
      <Task7 />
    </>
  )
}

export default App