const initialState = {
    noOfCloths: 0,
    clothName: "",
    dummy: ''
}

const clothReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_CLOTH":
            return {
                ...state,
                noOfCloths: action.payload.qty,
                clothName: action.payload.clothName
            }
        
        case "CHANGE_CLOTH_DUMMY":
            return {
                ...state,
                dummy: 'Dummy text'
            }


        case "CHANGE_CLOTH_QTY": 
            if(state.clothName !== "") {
                return {
                    ...state,
                    noOfCloths: state.noOfCloths + action.payload.qty,
                }
            }
            return state

        default:
            return state
    }
}

export default clothReducer