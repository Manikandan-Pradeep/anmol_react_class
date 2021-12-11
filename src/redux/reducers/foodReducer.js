const initialState = {
    noOfFoods: 0,
    foodName: "",
    dummy: ''
}

const foodReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_FOOD":
            return {
                ...state,
                noOfFoods: action.payload.qty,
                foodName: action.payload.foodName
            }

        case "CHANGE_FOOD_DUMMY":
            return {
                ...state,
                dummy: 'Dummy text'
            }

        case "CHANGE_FOOD_QTY": 
            if(state.foodName !== "") {
                return {
                    ...state,
                    noOfFoods: state.noOfFoods + action.payload.qty,
                }
            }
            return state

        default:
            return state
    }
}

export default foodReducer