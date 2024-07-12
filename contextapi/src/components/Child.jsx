import React from 'react'
import Child2 from './Child2'
import { useCount } from '../context/Countcontext'

function Child() {
    const { count, setCount } = useCount()
    return (
        <>
            <h1>Child component</h1>
            <h2>{count}</h2>
            <button
                onClick={() => setCount(count + 1)}
            >+</button>
            <Child2 />
        </>
    )
}

export default Child