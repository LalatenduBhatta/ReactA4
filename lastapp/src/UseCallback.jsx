import React, { useCallback, useEffect, useState } from 'react'

function UseCallback() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("blue")
    const changeCount = () => {
        setCount(count + 1)
    }
    const changeColor = () => {
        setColor(`rgb(${Math.trunc(Math.random() * 255)},
        ${Math.trunc(Math.random() * 255)},
        ${Math.trunc(Math.random() * 255)})`)
    }
    const setNumber = useCallback((num) => {
        return count * num
    }, [count])
    return (
        <>
            <h1>useCallback hook</h1>
            <div style={{
                height: "200px", width: "400px",
                display: "flex", alignItems: "center",
                justifyContent: "center", background: color
            }}>
                <button onClick={changeColor}>Change Color</button>
            </div>
            <h1>{count}</h1>
            <button onClick={changeCount}>Chnage Count</button>
            <ChildComponent setNumber={setNumber} />
        </>
    )
}

const ChildComponent = ({ setNumber }) => {
    useEffect(() => {
        console.log("Child reRenderd");
    }, [setNumber])
    let getNumber = setNumber(5)
    return (
        <>
            <h1>Child Component</h1>
            <h1>{getNumber}</h1>
        </>
    )
}

export default UseCallback