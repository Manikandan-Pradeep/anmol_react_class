import React, { Component } from 'react';

class ChildGetDerived extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    // shouldComponentUpdate(currentProps, currentState){
    //     if(currentProps.childName !== this.props.childName) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    static getDerivedStateFromProps(prop) {
        return {
            count: prop.childName.length
        }   
    }

    render = () => {
        return (
            <>
                <div>
                    Counter - {this.state.count}
                </div>
                <div>
                    Name - {this.props.childName}
                </div>
            </>
        )
    }
}

export default ChildGetDerived;