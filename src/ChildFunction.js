import React, { memo } from 'react'

const ChildFunction = (props) => {
    return (
        <div className="child">
            This is a child Function - {props.childName}
        </div>
    )
}

const MemoizedChildFunction = memo(ChildFunction)

export default MemoizedChildFunction