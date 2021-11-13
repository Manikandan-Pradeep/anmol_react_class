import React, { useState, useEffect, useCallback, useRef } from 'react';

const RefChild = (props) => {

    // constructor() {
    //     // this.childRef = createRef(null) - Class Components
    // }

    // This method will not work in functional components, since the below line of code will always be initialized to null for every render
    // let childRef = null
    
    const childRef = useRef(null)
    const countRef = useRef(0)
    const [child, setChild] = useState(null)

    useEffect(() => {
        if(childRef.current) {
            childRef.current.style.backgroundColor = 'red'
        }
    }, [])

    const changeCSS = () => {
        if(childRef.current) {
            if(childRef.current.style.backgroundColor === 'blue') {
                childRef.current.style.backgroundColor = 'red'
            } else {
                childRef.current.style.backgroundColor = 'blue'
            }
        }
        // countRef.current = countRef.current + 1
        countRef.current += 1
    }

    const changeState = () => {
        setChild('adnsakldna')
    }

    return (
        <div ref={childRef} className="child">
            {
                (countRef && countRef.current) ? <div>{countRef.current}</div> : null
            }
            <button onClick={changeCSS}>Increment Ref</button>
            <button onClick={changeState}>Change State</button>
        </div>
    )
}

export default RefChild;