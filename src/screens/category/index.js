import React from "react";
import { View, Text, Button,FlatList } from "react-native";
import { CategoryItem } from "../../components";
import { categories } from "../../constants/data/categories";
import {styles} from './styles'

const Categories = ({navigation}) => {
const onSelected = (item) => {
    navigation.navigate('Products', {name:item.title , categoryId:item.id})
}
const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected}/>
return ( <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.containerList}
        />
)

}
 
export default Categories
