import React, { Component } from 'react'
import OwnerSection from './Section'
import SetStateExplained from './StateExplanation'

class Application extends Component {
    
    constructor() {
        super()
        this.state = {
            name: 'Manikandan',
            age: 15,
            visible: true
        }
    }

    clickHandler = () => {
        this.setState({
            name: 'Anmol',
            age: 25,
            visible: !this.state.visible
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.visible ? 
                    (
                        <>
                            <p>{this.state.name}</p>
                            <p>{this.state.age}</p>
                        </>
                    )
                    :
                    null
                }

                <OwnerSection owner="Landlord1" name="Anmol"/>

                <OwnerSection owner="Landlord1">
                    <div>
                        Children Of Landlord1
                    </div>
                </OwnerSection>

                <OwnerSection owner="Landlord2">
                    <div>
                        Children Of Landlord2
                    </div>
                </OwnerSection>

                <OwnerSection owner="Landlord3">
                    <div>
                        Children Of Landlord3
                    </div>
                </OwnerSection>

                <SetStateExplained name={this.state.name}/>

                <button onClick={this.clickHandler}>Click here</button>
            </div>
        )
    }
}

export default Application