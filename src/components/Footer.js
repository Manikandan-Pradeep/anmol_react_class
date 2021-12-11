import React from 'react'
import './footer.css'

import { connect } from 'react-redux'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('Footer renders')
        return (
            <div className='footer'>
                <div className="footerlogo">Logo</div>
                <div className="footernames">
                    <div>FoodName: {this.props.foodsName}</div>
                    <div>ClothName: {this.props.clothsName}</div>
                </div>
            </div>
        )
    }

}

const takeStateAndPassAsProps = (state) => {
    return {
        foodsName: state.food.foodName,
        clothsName: state.cloth.clothName
    }
}


const getDispatchAndPassAsProps = (dispatch) => {
    return {}
}

const ConnectedFooter = connect(takeStateAndPassAsProps, getDispatchAndPassAsProps)(Footer)

export default ConnectedFooter