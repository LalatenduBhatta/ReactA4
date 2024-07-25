import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Child() {
    let count = useSelector((store) => store.countReducer)
    let dispatch = useDispatch()
    return (
        <>
            <h1>{count}</h1>
            <button
                onClick={() => dispatch({ type: "inc" })}
            >Increment</button>
            <button
                onClick={() => dispatch({ type: "dec" })}
            >Decrement</button>
        </>
    )
}

export default Child