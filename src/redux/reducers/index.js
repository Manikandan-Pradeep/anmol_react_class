import ClothReducer from './clothReducer'
import FoodReducer from './foodReducer'
import { combineReducers } from 'redux'

const finalReducer = combineReducers({
    cloth: ClothReducer,
    food: FoodReducer
})

export default finalReducer