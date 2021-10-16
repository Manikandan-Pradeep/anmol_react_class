import React, { Component } from 'react'

class Application extends Component {
    
    constructor() {
        super()
        this.state = {
            name: 'React course',
            age: 15,
            visible: true
        }
    }

    clickHandler = () => {
        this.setState({
            name: 'Anmol',
            age: 25,
            visible: !this.state.visible
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.visible ? 
                    (
                        <>
                            <p>{this.state.name}</p>
                            <p>{this.state.age}</p>
                        </>
                    )
                    :
                    null
                }
                <button onClick={this.clickHandler}>Click here</button>
            </div>
        )
    }
}

export default Application