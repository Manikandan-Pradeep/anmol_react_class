import React, { Component } from 'react';

class Child extends Component {

    shouldComponentUpdate(prop) {
        if(prop.childName === this.props.childName) {
            return false
        } else {
            return true
        }
    }

    render = () => {
        console.log('Child Rendered')
        return (
            <div className='child'>
                Normal Child - {this.props.childName}
            </div>
        )
    }
}

export default Child;