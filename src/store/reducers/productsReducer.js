import { products} from '../../constants/data/products'

const InitialState = {
    products:products,
    selected: null,
    filteredProducts: [],
}


const productReducer = (state= initialState,action) => {
    return state;
}

export default productReducer;