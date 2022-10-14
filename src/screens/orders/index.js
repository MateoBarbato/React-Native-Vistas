import React from "react";
import {View,Text, FlatList} from 'react-native'
import {styles} from './styles'
import { useSelector,useDispatch } from "react-redux";
import OrderItem from "../../components/order-item";
import { useEffect } from 'react';
import { getOrders } from "../../store/actions/orders-action";

const Orders = ({navigation}) => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.list)

    useEffect(() => {
        dispatch(getOrders());
    },[])
    
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