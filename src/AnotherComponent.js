import React, { Component } from 'react'

class AnotherComponent extends Component {
    
    constructor() {
        super()
    }

    componentDidMount() {
        console.log('Another component Mounted')
    }

    componentWillUnmount() {
        throw new Error('Custom error thrown')
        // console.log('Another component Unmounted')
    }

    render () {
        return (
            <>
                <div>This is another component</div>
            </>
        )
    }
} 

export default AnotherComponent