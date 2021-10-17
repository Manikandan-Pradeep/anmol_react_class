import React, { Component } from 'react'

class StateExplanation extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            name: 'Manikandan'
        }
    }

    increment = () => {
        // --- Batching of setStates
        // this.setState({
        //     count: 1
        // })
        // this.setState({
        //     name: 'Anmol',
        //     count: 2
        // })
        // this.setState({
        //     count: 2,
        //     name: 'Anmol'
        // })

        // --- One way of calling setState with the object
        // this.setState({
        //     count: this.state.count + 1
        // })
        // console.log(this.state.count)

        // --- Second way is through calling it with an object and also with a callback function
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log(this.state.count)
        // })

        // ---- Synchronous/Asynchronous Explanation
        // console.log('Print this console log1')
        // console.log('Print this console log2')
        // setTimeout(() => {
        //     console.log('Print this after sometime')
        // }, 1000)
        // console.log('Print this console log3')
        // setTimeout(() => {
        //     console.log('Print this after sometime 2')
        // }, 0)
        // console.log('Print this console log4')

        //main thread - 4 consolelogs
        //side thread - {
            // setTimeout(() => {
            //     console.log('Print this after sometime')
            // }, 1000)
            // setTimeout(() => {
            //     console.log('Print this after sometime 2')
            // }, 0)
        // }
    }

    render() {
        return (
            <div className="counterContainer">
                <div className="counter">{this.state.count}</div>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default StateExplanation