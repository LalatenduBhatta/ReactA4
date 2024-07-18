import React, { useState, useEffect } from 'react'

function Task4() {
    const [value, setValue] = useState(0)
    const [start, setStart] = useState(false)
    function startStopwatch() {
        setStart(true)
    }
    useEffect(() => {
        let timer
        if (start) {
            timer = setInterval(() => {
                setValue((prev) => prev + 10)
                // console.log("hi");
            }, 10)
        } else {
            // console.log("bye");
            clearInterval(timer)
        }
        return () => {//clean-up function
            clearInterval(timer)
        }
    }, [start])
    return (
        <>
            <h1>StopWatch</h1>
            <div>
                <h1>milliseconds: {value % 1000}</h1>
                <h1>seconds: {Math.trunc(value / 1000) % 60}</h1>
                <h1>Minutes: {Math.trunc(value / (1000 * 60)) % 60} </h1>
            </div>

            <button onClick={startStopwatch}>Start</button>
            <button onClick={() => setStart(false)}>Stop</button>
        </>
    )
}

export default Task4

// https://vicky-todo-react-app.netlify.app/