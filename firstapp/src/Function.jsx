import React, { useState } from 'react'

function Function() {
    const [username, setUsername] = useState("")
    const [usernameError, setUsernameError] = useState("*")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("*")
    function handelUsername(event) {
        let value = event.target.value
        if (value.length < 4) {
            setUsernameError("username is too short")
        } else {
            setUsernameError("")
        }
        setUsername(value)
    }
    function handelPassword(event) {
        const value = event.target.value
        if (value.length < 8) {
            setPasswordError("invalid password")
        } else {
            setPasswordError("")
        }
        setPassword(event.target.value)
    }
    function formSubmit(event) {
        event.preventDefault()
        if (usernameError || passwordError) {
            alert("Correct your inputs before submit")
        } else {
            console.log(username, password);
            setUsername("")
            setPassword("")
        }
    }
    return (
        <>
            <h1>Controlled Function Component Form</h1>
            <form onSubmit={formSubmit}>
                <label htmlFor="username">Username :</label>
                <input type="text" id="username"
                    onChange={handelUsername} value={username}
                />
                <span style={{ color: "red" }}>{usernameError}</span>
                <br /> <br />
                <label htmlFor="password">Password :</label>
                <input type="password" id="password"
                    onChange={handelPassword} value={password}
                />
                <span style={{ color: "red" }}>{passwordError}</span>
                <br /> <br />
                <button>Login</button>
            </form>
            <h2>{username}</h2>
            <h3>{password}</h3>
        </>
    )
}

export default Function