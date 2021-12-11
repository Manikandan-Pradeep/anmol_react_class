import React from 'react'
import './header.css'
import { connect } from 'react-redux'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('Header renders')
        return (
            <div className='header'>
                <div className="headerlogo">Logo</div>
                <div className="headercarts">
                    <div>FoodCart: {this.props.foodNo}</div>
                    <div>ClothCart: {this.props.clothNo}</div>
                </div>
            </div>
        )
    }

}

const takeStateAndPassAsProps = (state) => {
    return {
        foodNo: state.food.noOfFoods,
        clothNo: state.cloth.noOfCloths,
        sampleText: state.food.dummy
    }
}


const getDispatchAndPassAsProps = (dispatch) => {
    return {}
}

const ConnectedHeader = connect(takeStateAndPassAsProps, getDispatchAndPassAsProps)(Header)

export default ConnectedHeader