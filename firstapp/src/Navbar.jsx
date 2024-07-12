import { Component } from "react";
class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            color: "red"
        }
    }
    Increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    Decrement = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 })
        }
    }
    changeColor = () => {
        this.setState({ color: "green" })
    }
    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.Increment}>+</button>
                <button onClick={this.Decrement}>-</button>
                <div style={{
                    height: "300px",
                    width: "500px", backgroundColor: this.state.color
                }}></div>
                <button onClick={this.changeColor}>Change Color</button>

            </>
        )
    }
}
export default Navbar;