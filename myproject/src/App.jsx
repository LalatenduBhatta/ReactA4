import React from 'react'
import { Provider } from "react-redux"
import Child from './Child'
import store from './redux/Store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Child></Child>
      </Provider>
    </>
  )
}

export default App