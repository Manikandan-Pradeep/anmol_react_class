import React, { Component } from 'react'
import './App.css'

// class Section extends Component {

//     render() {
//         let name = `${this.props.owner}'s`
//         return (
//             <div className="section">
//                 <div>This section belongs to {name}</div>
//                 {
//                     this.props.children
//                 }
//             </div>
//         )
//     }
// }

const Section = (props) => {
    const { owner, children, name } = props

    return (
        <div className="section">
            <div>This section belongs to {owner}</div>
            {
                children
            }
            {
                name ? <div>Name of this section is {name}</div> : null
            }
        </div>
    )
}

export default Section