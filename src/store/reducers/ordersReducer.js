import {ordersTypes} from '../types'

const {DELETE_ORDER,GET_ORDERS} = ordersTypes

const initialState ={
    list:[]
}

const ordersReducer = (state=initialState,action) => {

    switch(action.type){
        case GET_ORDERS:
            return{
                ...state,
                list:action.orders
            }
        default:
            return state
        
    }
        
}

export default ordersReducer