import React from 'react'
import Navbar from './Navbar'
import InputField from './InputField'
import TaskDisplay from './TaskDisplay'
import { Provider } from "react-redux"
import store from './redux/Store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <InputField />
        <TaskDisplay />
      </Provider>
    </>
  )
}

export default App