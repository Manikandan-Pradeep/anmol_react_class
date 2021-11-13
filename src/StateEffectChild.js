import React, { useState, useEffect } from 'react';

// Rules for using hooks
// 1. hooks can only be used in functional components
// 2. hooks name will always start with 'use'
// 3. all the hooks that we call inside a functional component must be of the same order

const StateEffectChild = (props) => {
    
    // this.state = {
    //     visible: false,
    //     name: '',
    // }
    // this.state.visible = value of the visible state
    // this.setState({
    //  visible: 0
    // }) -- setter

    const [visible, setVisible] = useState('SOMETHING')
    const [name, setName] = useState(visible)

    const [isVisibleChanged, setVisibleChanged] = useState(false)
    const [isNameChanged, setNameChanged] = useState(false)

    const handleClick = () => {
        setVisible('SOMETHING ELSE CHANGED')
    }

    const handleClickName = () => {
        setName('SOMETHING ELSE CHANGED')
    }

    const handleBoth = () => {
        setVisible('CHANGED')
        setName('CHANGED')
    }

    // [] - dependency array
    // useEffect takes in a callback function and a dependency array
    // whenever items in the dep array changes, call the entire functional component
    useEffect(() => {
        if(visible === 'SOMETHING') {
            setVisibleChanged(false)
        } else {
            setVisibleChanged(true)
        }
    }, [visible])

    useEffect(() => {
        if(visible === 'SOMETHING') {
            setNameChanged(false)
        } else {
            setNameChanged(true)
        }
    }, [name])

    useEffect(() => {
        if(isNameChanged && isVisibleChanged) {
            console.log('Both of them changed')
        }
    }, [isVisibleChanged, isNameChanged])


    useEffect(() => {
        console.log('Mount 2')
        return () => {
            // code that you write here would be considered as componentWillUnmount()
            console.log('Unmount 2')
        }
    }, [])

    return (
        <div className="child">
            <div>{name} - {visible}</div>
            <button onClick={handleClick}>Child Button - Change Visibility</button>
            <button onClick={handleClickName}>Child Button - Change Name</button>
            <button onClick={handleBoth}>Change Both State</button>
        </div>
    )
}

export default StateEffectChild;