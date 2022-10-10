import { categoryTypes } from "../types"

const {SELECET_CATEGORY} = categoryTypes;

export const selectCategory = ( id ) => ({
    type:SELECET_CATEGORY,
    categoryId: id
})