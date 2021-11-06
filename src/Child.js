import React, { Component } from 'react';
import axios from 'axios'

class Child extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            filteredUsers: [],
            searchedUser: {},
            value: ''
        }
    }

    async componentDidMount() {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.setState({
            users: resp.data
        })
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then((data) => data.json())
        // .then((res) => {
            // this.setState({
            //     users: res
            // })
        // })
    }

    // shouldComponentUpdate(currentProp, currentState) {
    //     if(currentProp.name !== this.props.somthing) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    render = () => {
        
        const listToRender = this.state.filteredUsers.length === 0 ? this.state.users : this.state.filteredUsers

        return (
            <>
                <div className="item">

                {
                    this.state.searchedUser.name ?
                    (
                        <div>
                            {this.state.searchedUser.name}
                        </div> 
                    )
                    :
                    listToRender.map((item) => {
                        return <div key={item.id}>{item.name} - {item.username}</div>
                    })
                }
            
                <input style={{
                    margin: '8px',
                    padding: '4px'
                }} value={this.state.value} onChange={async (e) => {
                    this.setState({
                        value: e.target.value
                    })
                    // const filteredArray = this.state.users.filter((item) => {
                    //     if(item.name.includes(e.target.value)){
                    //         return true
                    //     } else {
                    //         return false
                    //     }
                    // })
                    try {
                        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${e.target.value}`)
                        this.setState({
                            searchedUser: res.data
                        })
                    } catch(e) {
                        this.setState({
                            searchedUser: {}
                        })
                    }
                    // this.setState({
                    //     filteredUsers: filteredArray 
                    // })
                    
                }}></input>
                </div>
            </>
        )
    }
}

export default Child;