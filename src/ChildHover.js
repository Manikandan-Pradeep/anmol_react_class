import React from 'react'
import WithIncrement from './WithIncrement'
import WithPrint from './WithPrint'


export class ChildHover extends React.Component {

    render() {
        // return (
        //     <div className="child" onMouseOver={this.incrementCount}>
        //         Child Hover: Count - {this.state.count}
        //     </div>
        // )
        return (
            <div className="child" onMouseOver={this.props.increment}>
                Child Hover: Count - {this.props.counterValue}
                Child Hover: Age - {this.props.age}
                Child Hover: Company - {this.props.company}
            </div>
        )
    }
}

export const WithIncrementChildHover = WithIncrement(ChildHover)

export const WithIncrementPrintChildHover = WithPrint(WithIncrement(ChildHover))

