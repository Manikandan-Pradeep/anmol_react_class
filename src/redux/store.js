import { createStore } from 'redux'
import Reducer from './reducers'

const store = createStore(Reducer)

export default store

// {
//     cloth: {
//         noOfCloths: 0,
//         clothName: ''
//     },
//     food: {
//         noOfFoods: 0,
//         foodName: '
//     }
// }