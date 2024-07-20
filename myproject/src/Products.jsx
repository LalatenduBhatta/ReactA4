import React from 'react'
import { useProducts } from './context/ProductContext'
function Products() {
    const { products } = useProducts()
    return (
        <>
            <h1>Products</h1>
            <div style={{ display: 'flex', flexWrap: "wrap" }}>
                {
                    products.map(product => {
                        return (
                            <div>
                                <img src={product?.images[0]} alt="" height={"200px"} width={"200px"} />
                                <h1>{product.brand}</h1>
                                <h3>{product.title}</h3>
                                <h5>Price:{product.price}</h5>
                                <div>
                                    <button>ADD TO CART</button>
                                    <button>BUY NOW</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products