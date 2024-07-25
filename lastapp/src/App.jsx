import React from 'react'
import UseMemo from './UseMemo'
import UseCallback from './UseCallback'
import NewComponent from './Child'

function App() {
  return (
    <>
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      <NewComponent name="Vicky" />
      <NewComponent name="Rocky" />
    </>
  )
}

export default App