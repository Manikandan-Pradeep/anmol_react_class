import React, { Component, forwardRef } from 'react'

// Ref forwarding is not allowed for class components - This will expose your fields
// class Child extends Component {

//     constructor(props) {
//         super(props)
//     }

    // name = 'Anmol'

    // printThis = (str) => {
    //     console.log('Printing ', str)
    // }

//     render() {
        // return (
        //     <div>
        //         <input></input>
        //     </div>
        // )
//     }
// }


// Ref forwarding can only be done on functional components - This will not expose your variables
const Child = forwardRef((props, forwardedRef) => {
    const something = null

    return (
        <div>
            <input value={props.name} ref={forwardedRef}></input>
            <input value={props.name} ref={forwardedRef}></input>
        </div>
    )
})

// Library Example
// class ManisInput extends Component {

//     constructor(props) {
//         super(props)
//     }

//     restrictCharacter = 'a'
//     restrictCharacter = 'a'
//     restrictCharacter = 'a'
//     restrictCharacter = 'a'
//     restrictCharacter = 'a'
//     restrictCharacter = 'a'

//     render() {
//         return (
//             <input onChange={(e) => {
//                 if(e.target.value.contains(this.restrictCharacter)){
//                     //then do not accept this value
//                 }
//             }}></input>
//         )
//     }
// }

export default Child