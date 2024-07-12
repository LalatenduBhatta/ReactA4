import React, { Component } from 'react'

class ErrorBounding extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError() {
        //used to set the state value if any error occured in app
        console.log("getDerivedStateFromError Method");
        return { hasError: true }
    }
    componentDidCatch(err, info) {
        //used to catch the error and the information of the error
        console.log("componentDidCatch method");
        console.log(err, info);
    }
    render() {
        return (
            <>
                {this.state.hasError ?
                    <h1>Some Error in components</h1> :
                    <div>{this.props.children}</div>
                }
            </>
        )
    }
}

export default ErrorBounding