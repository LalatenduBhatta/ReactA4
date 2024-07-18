import React, { useReducer, useState } from 'react'
import { reducer } from './countReducer'

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, 0)
    const [number, setNumber] = useState("")
    return (
        <>
            <h1>{state}</h1>
            <div>
                <button
                    onClick={() => dispatch({ type: "+1" })}>+1</button>
                <button
                    onClick={() => dispatch({ type: "-1" })}>-1</button>
                <button
                    onClick={() => dispatch({ type: "+10" })}>+10</button>
                <button
                    onClick={() => dispatch({ type: "-10" })}>-10</button>
                <button
                    onClick={() => dispatch({ type: "+20" })}>+20</button>
                <button
                    onClick={() => dispatch({ type: "-20" })}>-20</button>
                <br />
                <input type="number" name="" id=""
                    onChange={(e) => setNumber(e.target.value)} value={number} />
                <button
                    onClick={() => dispatch({ type: "input", payload: number })}
                >Change Count</button>
            </div>
        </>
    )
}

export default UseReducer