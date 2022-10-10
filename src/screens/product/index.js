import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";


const Product = ({ navigation, route }) => {
    const product = useSelector((state) => state.products.selected)
    

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