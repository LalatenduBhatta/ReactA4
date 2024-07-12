import React, { Component } from 'react'

class CreateRef extends Component {
    constructor() {
        super()
        this.usernameRef = React.createRef(null)
        this.passwordRef = React.createRef(null)
        this.usernameErrorRef = React.createRef(null)
        this.passwordErrorRef = React.createRef(null)
    }
    submitHandeler = (event) => {
        event.preventDefault()
        const username = this.usernameRef.current.value
        const password = this.passwordRef.current.value
        //validation
        if (!username || username.length < 4) {
            this.usernameErrorRef.current.innerHTML = "enter valid username"
        } else {
            this.usernameErrorRef.current.innerHTML = ""
        }
        if (!password || password.length < 8) {
            this.passwordErrorRef.current.innerHTML = "enter valid password"
        } else {
            this.passwordErrorRef.current.innerHTML = ""
        }
    }
    render() {
        return (
            <>
                <h1>Uncontrolled form</h1>
                <form onSubmit={this.submitHandeler}>
                    <label htmlFor="username">Username :</label>
                    <input type="text" id="username" ref={this.usernameRef} />
                    <span id="username-error" ref={this.usernameErrorRef}></span>
                    <br /> <br />
                    <label htmlFor="password">Password :</label>
                    <input type="text" id="password" ref={this.passwordRef} />
                    <span id="password-error" ref={this.passwordErrorRef}></span>
                    <br /> <br />
                    <button>Login</button>
                </form>
                <h1>{this.usernameRef.current?.value}</h1>
            </>
        )
    }
}

export default CreateRef