import React from 'react'
import './mainpage.css'
import { connect } from 'react-redux'

class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clothName: '',
            foodName: '',
            clothNo: 0,
            foodNo: 0
        }
    }

    render() {
        console.log('Main Page renders')
        return (
            <div className="page">
                <div className="box cloth">
                    <img alt="cloth" src="https://images.pexels.com/photos/10397680/pexels-photo-10397680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <input value={this.state.clothName} onChange={(e) => this.setState({
                        clothName: e.target.value
                    })}></input>
                    <input type="number" value={this.state.clothNo} onChange={(e) => this.setState({
                        clothNo: parseInt(e.target.value)
                    })}></input>
                    <button onClick={() => {
                        if(this.state.clothName === '') {
                            this.props.changeClothNo(this.state.clothNo)
                        } else {
                            this.props.addCloth(this.state.clothNo, this.state.clothName)
                        }
                    }}>Add to Cart</button>
                </div>

                <div className="box food">
                    <img alt="food" src="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <input value={this.state.foodName} onChange={(e) => this.setState({
                        foodName: e.target.value
                    })}></input>
                    <input type="number" value={this.state.foodNo} onChange={(e) => this.setState({
                        foodNo: parseInt(e.target.value)
                    })}></input>
                    <button onClick={() => {
                        if(this.state.foodName === '') {
                            this.props.changeFoodNo(this.state.foodNo)
                        } else {
                            this.props.addFood(this.state.foodNo, this.state.foodName)
                        }
                    }}>Add to Cart</button>
                    <button onClick={() => this.props.changeDummy()}>Change Dummy</button>
                </div>
            </div>
        )
    }

}

const takeStateAndPassAsProps = (state) => {
    return {}
}


const getDispatchAndPassAsProps = (dispatch) => {
    return {
        addCloth: (qty, name) => dispatch({
            type: 'ADD_CLOTH',
            payload: {
                qty: qty,
                clothName: name
            }
        }),
        addFood: (qty, name) => dispatch({
            type: 'ADD_FOOD',
            payload: {
                qty: qty,
                foodName: name
            }
        }),
        changeClothNo: (qty) => dispatch({
            type: 'CHANGE_CLOTH_QTY',
            payload: {
                qty: qty
            }
        }),
        changeFoodNo: (qty) => dispatch({
            type: 'CHANGE_FOOD_QTY',
            payload: {
                qty: qty
            }
        }),
        changeDummy: () => dispatch({
            type: "CHANGE_FOOD_DUMMY"
        })
    }
}

const ConnectedPage = connect(takeStateAndPassAsProps, getDispatchAndPassAsProps)(MainPage)

export default ConnectedPage