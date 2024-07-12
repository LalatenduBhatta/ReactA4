import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Product from './components/Product'
import ErrorPage from './components/ErrorPage'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Website from './components/Website'
import Subscription from './components/Subscription'
import Services from './components/Services'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'about'} element={<About />}>
          <Route path='web' element={<Website />}></Route>
          <Route path='sub' element={<Subscription />}></Route>
          <Route path='services' element={<Services />}></Route>
        </Route>
        <Route path={'/contact'} element={<Contact />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App