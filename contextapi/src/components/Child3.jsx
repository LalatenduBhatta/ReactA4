import React from 'react'
import { useCount } from '../context/Countcontext'

function Child3() {
    const { count, setCount } = useCount()
    return (
        <>
            <h1>Child 3 component</h1>
            <h2>{count}</h2>
        </>
    )
}

export default Child3