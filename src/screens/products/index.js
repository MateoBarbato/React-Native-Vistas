import React from "react";
import {FlatList} from "react-native";
import {products} from '../../constants/data'
import { ProductItem } from "../../components";
import { useSelector } from "react-redux";

const Products = ({navigation}) => {
const selectdCategory = useSelector((state) => state.category.selected);
const { categoryId } = selectdCategory.id
const productsFiltered = products.filter(product => product.categoryId == categoryId)



const onSelected = (item)=>{
    navigation.navigate('Product', {name:item.title, productId:item.id})
}
const renderItem = ({item}) => <ProductItem item={item} onSelected={onSelected}/>

return (
    <FlatList
        data={productsFiltered}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
    />
)

}

export default Products