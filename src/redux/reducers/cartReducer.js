import { ADD_TO_CART, CLEAR_ALL_CART } from '../actions/cartAction'

const initState = {
    cartlist : [],
    total : 0
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return{
                ...state,
                cartlist: action.payload.cartlist,
                total: action.payload.total
            }
        case CLEAR_ALL_CART:
            return{
                ...state,
                cartlist: action.payload.cartlist,
                total: action.payload.total
            }
        default:
            return state
    }
}

export default cartReducer