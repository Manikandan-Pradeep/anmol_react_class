import React, { useState } from 'react'
import './mainpage.css'
import { useDispatch, useSelector } from 'react-redux'


const MainPageFunction = (props) => {
    const [clothName, setClothName] = useState('')
    const [foodName, setfoodName] = useState('')
    const [clothNo, setclothNo] = useState(0)
    const [foodNo, setfoodNo] = useState(0)

    // mapStateToProps -> useSelector
    // mapDispatchToProps -> useDispatch

    // const foodName = useSelector((state) => {
    //     return state.food.foodName
    // })

    const dispatch = useDispatch()

    const addCloth = (qty, name) => {
        dispatch({
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
                <input value={clothName} onChange={(e) => setClothName(e.target.value)}></input>
                <input type="number" value={clothNo} onChange={(e) => setclothNo(parseInt(e.target.value))}></input>
                <button onClick={() => {
                    if(clothName === '') {
                        dispatch({
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
                <input value={foodName} onChange={(e) => setfoodName(e.target.value)}></input>
                <input type="number" value={foodNo} onChange={(e) => setfoodNo(parseInt(e.target.value))}></input>
                <button onClick={() => {
                    if(foodName === '') {
                        dispatch({
                            type: 'CHANGE_FOOD_QTY',
                            payload: {
                                qty: foodNo
                            }
                        })
                    } else {
                        dispatch({
                            type: 'ADD_FOOD',
                            payload: {
                                qty: foodNo,
                                foodName: foodName
                            }
                        })
                    }
                }}>Add to Cart</button>
                <button onClick={() => dispatch({
            type: "CHANGE_FOOD_DUMMY"
        })}>Change Dummy</button>
            </div>
        </div>
    )

}

export default MainPageFunction