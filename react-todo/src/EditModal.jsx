import React, { useState } from 'react'
import "./EditModel.css"
import { useDispatch } from 'react-redux'

function EditModal({ editData, setOpenModal }) {
    const [editText, setEditText] = useState(editData.task)
    const dispatch = useDispatch()
    const handelUpdate = () => {
        dispatch({
            type: "edit", payload: {
                task: editText,
                id: editData.id
            }
        })
        setOpenModal(false)
    }
    return (
        <div className="modal">
            <div className="box">
                <textarea name="task" id="task" value={editText}
                    onChange={(e) => setEditText(e.target.value)}></textarea>
                <div className="buttons">
                    <button onClick={() => setOpenModal(false)}>Cancel</button>
                    <button onClick={handelUpdate}>Update</button>
                </div>
                <div className="cross">
                    <button onClick={() => setOpenModal(false)}>X</button>
                </div>
            </div>
        </div>
    )
}

export default EditModal