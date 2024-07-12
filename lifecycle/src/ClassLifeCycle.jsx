import React, { Component } from 'react'

class ClassLifeCycle extends Component {
    constructor() {//1st method of mounting phase used for variable or state initialization
        super()
        this.name = "Rohit"
        this.state = {
            count: 0,
            color: "red"
        }
    }
    static getDerivedStateFromProps(props, state) {
        //this is the 2nd method of mounting phase which used to modify the state object 
        //according to props value
        //1st method of updating which overwrites the cahnged sate value with props value
        // console.log(props, state);
        console.log("getDerivedStateFromProps method");
        return { color: props.color }
    }
    componentDidMount() {
        //this method executes only for once after the initial render
        //last method of mounting phase
        //it used for sideEffects after component mounting
        console.log("componentDidMount method");
    }
    shouldComponentUpdate() {
        //this is the 2nd method of updating phase which defines the component will re-render or not
        // it returns boolean
        console.log("shouldComponentUpdate method");
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        //used to catch the previous state and props values
        console.log(prevProps, prevState);
        console.log("getSnapshotBeforeUpdate method");
        return { count: prevState.count }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        //the last method of updating phase
        //it receives the previous state ,props and the snapshot value from getSnapshotBeforeUpdate method
        //it used to work with the sideEffects after re-renders
        console.log("componentDidUpdate method");
        console.log(snapshot);
    }
    componentWillUnmount() {
        //this is the method of unmounting phase
        //it executes when the component is going to remove from the DOM
        console.log("Component removed");
    }
    render() {
        console.log("render method");
        return (
            <>
                <div>
                    <h1>Class Based Component LifeCycle methods</h1>
                    <h2>{this.name}</h2>
                    <h1 style={{
                        height: "200px",
                        backgroundColor: this.state.color
                    }}>{this.state.count}</h1>
                    <button
                        onClick={() => this.setState({ count: this.state.count + 1 })}
                    >Increment Count</button>
                    <button onClick={() => this.setState({ color: "blue" })}>Change Color</button>
                    <h1>{this.props.color}</h1>
                </div >
            </>
        )
    }
}

export default ClassLifeCycle