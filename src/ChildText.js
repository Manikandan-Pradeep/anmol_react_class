import React, { Component } from 'react';
import axios from 'axios'

class Child extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    componentDidUpdate() {
        console.log('Hit Update API', this.state.value)
    }

    render = () => {
        console.log('Rerendering....')
        return (
            <>
                <div className="item">
                    <input value={this.state.value} onChange={(e) => {
                        this.setState({
                            value: e.target.value
                        })  
                    }}></input>
                </div>
            </>
        )
    }
}

export default Child;