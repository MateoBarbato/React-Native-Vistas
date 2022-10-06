import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View,Text,Flatlist,TouchableOpacity} from 'react-native'
import { colors } from '../../constants/themes'
import { styles } from './styles'


const OrderItem = ({item,onCancel}) => {

    const formDate = (time) => {
        const date = new Date(time);
        return date.toLocaleDateString();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.date}>
                    {formDate(item.date)}
                </Text>
            </View>    
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <Text style={styles.total}>{item.total}</Text>
                </View>
                <TouchableOpacity onPress={()=>{onCancel(item.id)}}>
                    <Ionicons name='close' size={24} color={colors.text}/>
                </TouchableOpacity>
            </View>        
        </View>
    )


}

export default OrderItem