import React, { Component } from 'react';

class ChildShouldUpdate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(currentProp, currentState) {
        // this.state always has the old state
        // this.props always has the old props
        if(currentState.count % 5 === 0) {
            return true
        } else {
            return false
        }
    }
    
    render = () => {
        return (
            <>
                <div>
                    Counter - {this.state.count}
                </div>
                <button onClick={(e) => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Increment</button>
            </>
        )
    }
}

export default ChildShouldUpdate;