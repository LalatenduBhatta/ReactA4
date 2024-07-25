import React, { useMemo, useState } from 'react'

function UseMemo() {
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
    // function setNumber() {
    //     for (let i = 0; i <= 999999999; i++) { }
    //     console.log("hi");
    //     return count * 100
    // }
    // const getNumber = setNumber()
    const getNumber = useMemo(() => {
        for (let i = 0; i <= 999999999; i++) { }
        console.log("hi");
        return count * 100
    }, [count])
    return (
        <>
            <h1>useMemo hook</h1>
            <div style={{
                height: "200px", width: "400px",
                display: "flex", alignItems: "center",
                justifyContent: "center", background: color
            }}>
                <button onClick={changeColor}>Change Color</button>
            </div>
            <h1>{count}</h1>
            <button onClick={changeCount}>Chnage Count</button>
            <h1>{getNumber}</h1>
        </>
    )
}

export default UseMemo