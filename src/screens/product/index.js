import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { products } from "../../constants/data";

const Product = ({ navigation, route }) => {
    const { productId} = route.params
    const product = products.find(product => product.id === productId)
    return (
            <View style={styles.container}>
                <View style={styles.boxCard}>
                <Text>id: {product.id}</Text>
                <Text>{product.title}</Text>
                <Text>{product.description}</Text>
                <Text>${product.price}</Text>
                <Text>weight: {product.weight}</Text>
                </View>
            </View>
    )
};

export default Product;