import React from "react";
import {View,Text, FlatList} from 'react-native'
import {styles} from './styles'
import { orders } from "../../constants/data";
import OrderItem from "../../components/order-item";

const Orders = ({navigation}) => {
    const renderItem = ({item}) => <OrderItem item={item}/>

    return ( <View style={styles.container}>
            <View style={styles.containerList}>
                <FlatList
                    data={orders}
                    renderItem={renderItem}
                    style={styles.containerList}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    )
}

export default Orders