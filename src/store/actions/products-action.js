import { productsType } from "../types";

const { SELECTED_PRODUCT,FILTERED_PRODUCTS} = productsType;

export const selectedProduct = ( id ) => ({
            type:SELECTED_PRODUCT, 
            productId:id,
});

export const filteredProducts = (id ) => ({
    type:FILTERED_PRODUCTS,
    categoryId:id
})