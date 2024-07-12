import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(10)
    const [count3, setCount3] = useState(100)
    useEffect(() => {
        console.log("useEffect without 2nd argument");
        // setCount1(count1 + 1)
    })
    useEffect(() => {
        //this useEffect only executes once after initial render
        //this is similar to componentDidMount method
        console.log("useEffect with an empty array as second argument");
    }, [])
    useEffect(() => {
        console.log("useEffect with state or props dependencies array");
    }, [count1, count3])
    useEffect(() => {
        console.log("useEffect function");
        return () => {//clean-up function
            console.log("clean-up function");
        }
    })
    return (
        <>
            {console.warn("this is render method")}
            <h1>useEffect hook</h1>
            <div>
                <h2>{count1}</h2>
                <h2>{count2}</h2>
                <h2>{count3}</h2>
            </div>
            <div>
                <button onClick={() => setCount1(count1 + 1)}>Change Count1</button>
                <button onClick={() => setCount2(count2 + 1)}>Change Count2</button>
                <button onClick={() => setCount3(count3 + 1)}>Change Count3</button>
            </div>
        </>
    )
}

export default UseEffect