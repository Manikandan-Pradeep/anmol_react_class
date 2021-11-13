import React, { useState, useEffect, useCallback, useRef } from 'react';

const UseCallbackChild = ({ name: propName }) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState(5)

    // React.memo - memoizes the result of a function
    // useCallback - memoizes the memory value of a function

    const triggerThis = useCallback(() => {
        console.log('Triggering', age)
    }, [])

    // const triggerThis = () => {
    //     console.log('Triggering', age)
    //     setAge(age + 1)
    // }

    useEffect(() => {
        triggerThis()
    }, [name])

    const changeName = () => {
        if(name === 'Ram') {
            setName('Shyam')
        } else {
            setName('Ram')
        }
    }

    const changeAge = () => {
        setAge(age + 1)
    }

    return (
        <div className="child">
            {name} - {age}
            <button onClick={changeName}>Change Name</button>
            <button onClick={changeAge}>Change Age</button>
        </div>
    )
}

export default UseCallbackChild;