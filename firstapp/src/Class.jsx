import React, { Component } from 'react'

class Class extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            usernameError: "*",
            passwordError: "*"
        }
    }
    handelUsername = (event) => {
        let value = event.target.value
        if (value.length < 4) {
            this.setState({ usernameError: "invalid username" })
        } else {
            this.setState({ usernameError: "" })
        }
        this.setState({ username: value })
    }
    handelPassword = (event) => {
        let value = event.target.value
        this.setState({ password: value })
    }
    formSubmit = (event) => {
        event.preventDefault()
        console.log(this.state);
    }
    render() {
        return (
            <>
                <h1>Controlled Class Component Form</h1>
                <form onSubmit={this.formSubmit}>
                    <label htmlFor="username">Username :</label>
                    <input type="text" id="username"
                        onChange={this.handelUsername}
                    />
                    <span style={{ color: "red" }}>
                        {this.state.usernameError}</span>
                    <br /> <br />
                    <label htmlFor="password">Password :</label>
                    <input type="password" id="password"
                        onChange={this.handelPassword}
                    />
                    <span style={{ color: "red" }}>
                        {this.state.passwordError}</span>
                    <br /> <br />
                    <button>Login</button>
                </form>
                <h2>{this.state.username}</h2>
                <h3>{this.state.password}</h3>
            </>
        )
    }
}

export default Class