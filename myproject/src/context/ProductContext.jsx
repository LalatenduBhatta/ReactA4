import { createContext, useState, useEffect, useContext } from "react";

const productContext = createContext()

function ProductContextAPI({ children }) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        let response = await fetch('https://dummyjson.com/products')
        let data = await response.json()
        console.log(data);
        setProducts(data.products)
    }
    return (
        <productContext.Provider
            value={{ products, setProducts }}>
            {children}
        </productContext.Provider>
    )
}

export const useProducts = () => useContext(productContext)

export default ProductContextAPI