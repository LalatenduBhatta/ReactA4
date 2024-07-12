import React, { useRef } from 'react'

function UseRef() {
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const usernameErrorRef = useRef(null)
    const passwordWErrorRef = useRef(null)
    function submitHandeler(event) {
        event.preventDefault()
        const username = usernameRef.current.value
        const password = passwordRef.current.value
        console.log(username, password);
        //validation
        if (!username || username.length < 4) {
            usernameErrorRef.current.innerHTML = "enter valid username"
        } else {
            usernameErrorRef.current.innerHTML = ""
        }
    }
    return (
        <>
            <h1>Uncontrolled form</h1>
            <form onSubmit={submitHandeler}>
                <label htmlFor="username">Username :</label>
                <input type="text" id="username" ref={usernameRef} />
                <span id="username-error" ref={usernameErrorRef}></span>
                <br /> <br />
                <label htmlFor="password">Password :</label>
                <input type="text" id="password" ref={passwordRef} />
                <span id="password-error" ref={passwordWErrorRef}></span>
                <br /> <br />
                <button>Login</button>
            </form>
            <h1>{usernameRef.current?.value}</h1>
        </>
    )
}

export default UseRef