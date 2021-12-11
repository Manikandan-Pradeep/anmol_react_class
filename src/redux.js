const redux = require('redux')
const combineReducer = redux.combineReducers
const logger = require('redux-logger').default
const applyMiddleWare = redux.applyMiddleware

// Store - Is a storage which keeps all the state of your application

// store = {
//     noOfItems: 0    
// }


// Reducer - It is a function which accepts an action, and based on the action, changes the store
// Logic to handle ADD_TO_CART action, and update the store


// Action - Is an object which tells the reducer that something has happened inside the application
// {
//     type: 'ADD_TO_CART',
//     payload: {
//         qty: 0
//     }
// }

// Middlewares - They sit right between your reducer and your store


const clothingCartInitialState = {
    noOfItems: 0,
    itemName: ''
}

const clothingCartItemReducer = (state = clothingCartInitialState, action) => {
    // if(action.type === 'ADD_CLOTH_TO_CART') {
        // return {
        //     ...state,
        //     noOfItems: action.payload.qty,
        //     itemName: action.payload.itemName
        // }
    // } else if(action.type === 'INCREASE_CLOTH_QTY'){
        // return {
        //     ...state,
        //     noOfItems: state.noOfItems + action.payload.qty
        // }
    // } else {
    //     return state
    // }

    switch(action.type){
        case 'ADD_CLOTH_TO_CART':
            return {
                ...state,
                noOfItems: action.payload.qty,
                itemName: action.payload.itemName
            }
        case 'INCREASE_CLOTH_QTY':
            return {
                ...state,
                noOfItems: state.noOfItems + action.payload.qty
            }
        default:
            return state
    }

}

const foodCartInitialState = {
    noOfItems: 0,
    itemName: ''
}

const foodCartItemReducer = (state = foodCartInitialState, action) => {
    if(action.type === 'ADD_FOOD_TO_CART') {
        return {
            noOfItems: action.payload.qty,
            itemName: action.payload.itemName
        }
    } else if(action.type === 'INCREASE_FOOD_QTY'){
        if(state.itemName !== '') {
            return {
                ...state,
                noOfItems: state.noOfItems + action.payload.qty
            }
        }
        return state
    } else {
        return state
    }
}


// const addSingleItemToCartAction = {
//     type: 'ADD_TO_CART',
//     payload: {
//         qty: 1
//     }
// }

const addItemToCartAction = (qty, itemName, type) => {
    return {
        type: type,
        payload: {
            qty: qty,
            itemName: itemName
        }
    }
}

const increaseQtyAction = (qty, type) => {
    return {
        type: type,
        payload: {
            qty: qty
        }
    }
}

const finalReducer = combineReducer({
    clothing: clothingCartItemReducer, 
    food: foodCartItemReducer
})

const store = redux.createStore(finalReducer)

// store.getState() -- Current State of the store
// store.subscribe() -- Let you know if something has changed in the store
// store.dispatch() -- Lets the reducer know if something has happened in the application


console.log(store.getState())

console.log('Adding 10 Raymonds Tux')

// store.dispatch(addSingleItemToCartAction) // This tells the reducer that this action has occured
store.dispatch(addItemToCartAction(10, 'Raymonds Tux', 'ADD_CLOTH_TO_CART'))
console.log(store.getState())

console.log('Increasing cloth by 5')
store.dispatch(increaseQtyAction(5, 'INCREASE_CLOTH_QTY'))
console.log(store.getState())

console.log('Increasing food by 5')
store.dispatch(increaseQtyAction(5, 'INCREASE_FOOD_QTY'))
console.log(store.getState())