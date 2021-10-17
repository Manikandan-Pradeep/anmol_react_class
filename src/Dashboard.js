import React, {Component} from 'react'
import generateRandomId from 'nano-id'

class Dashboard extends Component {

    constructor() {
        super()
        this.state = {
            list: [{
                id: 'akldnalsn',
                user: 'Anmol',
                age: 12
            },
            {
                id: 'aadaklnalda',
                user: 'Raji',
                age: 12
            },
            {
                id: '12hfoiaoklasd',
                user: 'Rama',
                age: 12
            }],
            userInput: ''
        }
    }

    

    addItem = () => {
        if(this.state.userInput) {
            const randomId = generateRandomId()
            console.log(randomId)
            this.setState({
                list: [...this.state.list, {
                    id: randomId,
                    user: this.state.userInput,
                    age: 245
                }]
            })
        }
    }

    handleInputChange = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    deleteItem = (toBeDeletedItem) => {
        const filteredArray = this.state.list.filter((item) => {
            return (toBeDeletedItem.id !== item.id)
        })
        this.setState({
            list: filteredArray
        })
    }

    render(){
        return (
            <div>
                {
                    this.state.list.map((item) => {
                        return (
                            <div key={item.id} className="itemContainer">
                                <div className="listItem">{item.user}</div>
                                <button className="btn itembtn" onClick={() => this.deleteItem(item)}>Remove</button>
                            </div>
                        )
                    })
                }
                <input className="input" onChange={this.handleInputChange}></input>
                <button className="btn" onClick={this.addItem}>Add Item</button>
            </div>
        )
    }
}

export default Dashboard