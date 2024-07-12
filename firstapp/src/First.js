import React, { useState } from 'react'

function First() {
    let [num, setNum] = useState(0)

    return (
        <>
            <h1>{num}</h1>
            <button onClick={() => setNum(num + 1)}>+</button>
            <button onClick={() => setNum(num - 1)}>-</button>
            {
                (num != 0) && (num > 0 ?
                    <h1>{num} is positive</h1> :
                    <h1>{num} is negative</h1>)
            }
            {
                (num > 0) && (num % 2 == 0 ?
                    <h1>{num} is even</h1> :
                    <h1>{num} is odd</h1>)
            }
        </>
    )

}

export default First