import React from "react";
import { View, Text, Button } from "react-native";
import {styles} from './styles'

const Product = ({navigation}) => {

return (
    <View style={styles.container}>
    <Text style={styles.title}>Product</Text>
    <Button
        title="Go to Categories"
        onPress={()=>navigation.navigate('Categories')}
    />
</View>
)

}

export default Product
