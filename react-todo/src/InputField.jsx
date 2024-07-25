import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function InputField() {
    const [task, setTask] = useState("")
    const dispatch = useDispatch()
    const handelTask = () => {
        dispatch({ type: "add", payload: task })
        setTask("")
    }
    return (
        <>
            <div className="input"
                style={{
                    display: "flex", alignItems: "center", height: "10vh",
                    justifyContent: 'space-between', gap: "20px",
                    background: "yellow", padding: "0 10px"
                }} >
                <input type="text"
                    style={{ flexGrow: "1", fontSize: "34px" }}
                    placeholder='write your task here.....'
                    onChange={(e) => setTask(e.target.value)} value={task}
                />
                <button style={{ fontSize: "34px" }}
                    onClick={handelTask}>AddTask</button>
            </div >
        </>
    )
}

export default InputField