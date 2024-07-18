import React, { useEffect, useState } from 'react'
import axios from "axios"

function Task6() {
    const [data, setData] = useState([])
    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((response) => response.json()).then(data => setData(data))
        //     .catch(err => console.log(err))
        // axios.get("https://jsonplaceholder.typicode.com/users")
        //     .then(data => setData(data.data)).catch(err => console.log(err))
        fetchData()
    }, [])
    const fetchData = async () => {
        let data = await axios.get("https://jsonplaceholder.typicode.com/users")
        setData(data.data)
    }
    return (
        <>
            <h1>DATA FETCHING</h1>
            <table border={"1"} style={{ borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(user => {
                            return <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Task6