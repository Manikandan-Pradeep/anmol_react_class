import React, { Component } from 'react'

class ParentComponent extends Component {
    constructor(props){
        super(props)
        // do not do state manipulation here based on props - if intention is to update the state everytime prop changes
        // let name = ''
        // if(props.age < 19 ) {
        //     name = `teen`
        // } else if(props.age >= 19 && props.age < 65) {
        //     name = `adult`
        // } else {
        //     name = `old`
        // }
        this.state = {
            name: '',
            age: props.age,
            difference: false
        }
        console.log('Mounting Start Parent')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Calling get Derived Parent')
        if(props.age < 19 ) {
            return {
                name: `teen`
            }
        } else if(props.age >= 19 && props.age < 65) {
            return {
                name: `adult`
            }
        } else {
            return {
                name: `old`
            }
        }
    }

    // shouldComponentUpdate(props, state) {
    //        this.props , this.state
    // }

    getSnapshotBeforeUpdate(prevProp, prevState) {
        return {
           random: prevProp.age 
        }
    }

    componentDidMount() {
        console.log('Mounting Parent Done')
        this.setState({
            name: 'Anmol'
        })
    }

    componentDidUpdate(prop, state, snapshot) {
        if(snapshot.random + 10 < this.props.age) {
            this.setState({
               difference: true 
            })
        }
    }
    
    render() {
        console.log('Render Parent')
        return (
            <div className="parentContainer">
                From Parent - {this.state.name} {this.props.age}
                {this.state.difference ? <div>OverDifference</div> : null}
            </div>
        )
    }
}

export default ParentComponent