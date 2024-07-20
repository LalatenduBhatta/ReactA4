import React from 'react'
import Products from './Products'
import ProductContextAPI from './context/ProductContext'

function App() {
  return (
    <ProductContextAPI>
      <Products />
    </ProductContextAPI>
  )
}

export default App