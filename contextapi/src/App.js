import React from 'react'
import CountcontextAPI from './context/Countcontext'
import Child from './components/Child'

function App() {
  return (
    <CountcontextAPI>
      <Child></Child>
    </CountcontextAPI>
  )
}

export default App