import React, { Component } from 'react';

class ChildFuncProp extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentWillUnmount(){
        this.props.changeParentName('Changed From Child')
    }

    render = () => {
        return (
            <>
                <div>
                    Destroying me will change parent's state
                </div>
            </>
        )
    }
}

export default ChildFuncProp;