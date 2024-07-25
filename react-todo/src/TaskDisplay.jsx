import React, { useState } from 'react'
import "./TaskDisplay.css"
import { useDispatch, useSelector } from 'react-redux'
import EditModal from './EditModal'

function TaskDisplay() {
    const tasks = useSelector((store) => store.taskReducer)
    const [openModal, setOpenModal] = useState(false)
    const [editData, setEditData] = useState({})
    const dispatch = useDispatch()
    const handelDelete = (id) => {
        dispatch({ type: "del", payload: id })
    }
    const handelEdit = (editData) => {
        setOpenModal(true)
        setEditData(editData)
    }
    return (
        <>
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
                                    <button onClick={() => handelEdit(ele)}>EDIT</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                {openModal && <EditModal editData={editData} setOpenModal={setOpenModal} />}
            </div>
        </>
    )
}

export default TaskDisplay