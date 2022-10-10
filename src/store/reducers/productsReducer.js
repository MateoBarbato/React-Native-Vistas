import { products} from '../../constants/data/products'
import { productsType } from '../types';
const {SELECTED_PRODUCT,FILTERED_PRODUCTS} = productsType

const InitialState = {
    products:products,
    selected: null,
    filteredProducts: [],
}


const productReducer = (state= initialState,action) => {
    switch(action.types){
        case SELECTED_PRODUCT:
            return {
                ...state,
                selected:state.products.find(
                    (product)=>product.id ==action.productId)
            }
        case FILTERED_PRODUCTS:
            return{ 
                ...state,
                filtered:state.products.find(
                    (product) => product.categoryId ==action.categoryId
                )
            }
        default : 
            return state;
    }
}

export default productReducer;