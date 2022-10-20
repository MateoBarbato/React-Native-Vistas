import React, { useCallback } from "react";
import {View,FlatList} from 'react-native'
import {styles} from './styles'
import { useSelector, useDispatch } from "react-redux";
import OrderItem from "../../components/order-item";
import { deleteOrder, getOrders } from "../../store/actions/orders-action";
import { useFocusEffect } from "@react-navigation/native";

const Orders = ({navigation}) => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.list)

    useFocusEffect(
        useCallback(() => {
            dispatch(getOrders());
        }, [dispatch])
    );

    const onCancel = (id) =>{
        dispatch(deleteOrder(id))
    }
    
    const renderItem = ({item}) => <OrderItem item={item} onCancel={onCancel}/>
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