import React from 'react'
import WithIncrement from './WithIncrement'

export class ChildClick extends React.Component {
    // render() {
    //     return (
    //         <div className="child" onClick={this.incrementCount}>
    //             Child Click: Count - {this.state.count}
    //         </div>
    //     )
    // }
    render() {
        return (
            <div className="child" onClick={this.props.increment}>
                Child Click: Count - {this.props.counterValue}
            </div>
        )
    }
}

export const WithIncrementChildClick = WithIncrement(ChildClick)