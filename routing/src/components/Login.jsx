import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let user = {
        username: "Rocky",
        password: "1234"
    }
    const submitHandler = (event) => {
        event.preventDefault()
        if (username === user.username && password === user.password) {
            setUsername("")
            setPassword("")
            navigate("/")
        } else {
            alert("Username and password are not matching")
        }
    }
    return (
        <>
            <h1>LOGIN FORM</h1>
            <form onSubmit={submitHandler}>
                <table>
                    <tr>
                        <td><label>Username :</label></td>
                        <td><input type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        /></td>
                    </tr>
                    <tr>
                        <td><label>Password :</label></td>
                        <td><input type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        /></td>
                    </tr>
                    <tr>
                        <td>
                            <button>Login</button>
                        </td>
                    </tr>
                </table>
            </form>
        </>
    )
}

export default Login