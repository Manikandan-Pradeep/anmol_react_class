import React, { useReducer } from 'react'
import './mainpage.css'
import { useDispatch } from 'react-redux'

const initialState = {
    clothNo: 0,
    foodNo: 0,
    clothName: '',
    foodName: ''
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE_CLOTH_NAME':
            return {
                ...state,
                clothName: action.data.clothName
            }
        case 'CHANGE_CLOTH_NO':
            return {
                ...state,
                clothNo: action.data.clothNo
            }
        case 'CHANGE_FOOD_NAME':
            return {
                ...state,
                foodName: action.data.foodName
            }
        case 'CHANGE_FOOD_NO':
            return {
                ...state,
                foodNo: action.data.foodNo
            }
        default:
            return state
    }
}

const MainPageFunction = (props) => {

    // const [clothName, setClothName] = useState('')
    // const [foodName, setfoodName] = useState('')
    // const [clothNo, setclothNo] = useState(0)
    // const [foodNo, setfoodNo] = useState(0)

    const [state, internalDispatch] = useReducer(reducer, initialState)

    const { clothName, foodName, clothNo, foodNo } = state

    const reduxDispatch = useDispatch()

    const addCloth = (qty, name) => {
        reduxDispatch({
            type: 'ADD_CLOTH',
            payload: {
                qty: qty,
                clothName: name
            }
        })
    }

    return (
        <div className="page">
            <div className="box cloth">
                <img alt="cloth" src="https://images.pexels.com/photos/10397680/pexels-photo-10397680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                <input value={clothName} onChange={(e) => internalDispatch({
                    type: 'CHANGE_CLOTH_NAME',
                    data: {
                        clothName: e.target.value
                    }
                })}></input>
                <input type="number" value={clothNo} onChange={(e) => internalDispatch({
                    type: 'CHANGE_CLOTH_NO',
                    data: {
                        clothNo: parseInt(e.target.value)
                    }
                })}></input>
                <button onClick={() => {
                    if(clothName === '') {
                        reduxDispatch({
                            type: 'CHANGE_CLOTH_QTY',
                            payload: {
                                qty: clothNo
                            }   
                        })
                    } else {
                        addCloth(clothNo, clothName)
                    }
                }}>Add to Cart Function</button>
            </div>

            <div className="box food">
                <img alt="food" src="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                <input value={foodName} onChange={(e) => internalDispatch({
                    type: 'CHANGE_FOOD_NAME',
                    data: {
                        foodName: e.target.value
                    }
                })}></input>
                <input type="number" value={foodNo} onChange={(e) => internalDispatch({
                    type: 'CHANGE_FOOD_NO',
                    data: {
                        foodNo: parseInt(e.target.value)
                    }
                })}></input>
                <button onClick={() => {
                    if(foodName === '') {
                        reduxDispatch({
                            type: 'CHANGE_FOOD_QTY',
                            payload: {
                                qty: foodNo
                            }
                        })
                    } else {
                        reduxDispatch({
                            type: 'ADD_FOOD',
                            payload: {
                                qty: foodNo,
                                foodName: foodName
                            }
                        })
                    }
                }}>Add to Cart</button>
                <button onClick={() => reduxDispatch({
            type: "CHANGE_FOOD_DUMMY"
        })}>Change Dummy</button>
            </div>
        </div>
    )

}

export default MainPageFunction