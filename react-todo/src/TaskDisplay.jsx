import React from 'react'
import "./TaskDisplay.css"
import { useDispatch, useSelector } from 'react-redux'

function TaskDisplay() {
    const tasks = useSelector((store) => store.taskReducer)
    // console.log(tasks);
    const dispatch = useDispatch()
    const handelDelete = (id) => {
        dispatch({ type: "del", payload: id })
    }
    return (
        <div className="container">
            {
                tasks.map(ele => {
                    return (
                        <div className="card" key={ele.id}>
                            <div className="text">
                                <p>{ele.task}</p>
                            </div>
                            <div className="buttons">
                                <button onClick={() => handelDelete(ele.id)}>DEL</button>
                                <button onClick={() => handelEdit(ele.id)}>EDIT</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TaskDisplay