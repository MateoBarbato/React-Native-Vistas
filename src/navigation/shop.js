import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, Product} from '../screens'
import { isAndroid } from "../utils/functions";
import { colors } from "../constants/themes";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {

    return (
        <Stack.Navigator 
            initialRouteName="Categories"
            screenOptions={{
                headerStyle:{backgroundColor:isAndroid?colors.primary:colors.secondary},
                headerTintColor:colors.text,
                headerTitleStyle:{
                    fontFamily:'Lato-Bold',
                }
            }}>
            <Stack.Screen name='Categories' component={Categories}/>
            <Stack.Screen name='Products' component={Products}/>
            <Stack.Screen name='Product' component={Product}/>
        </Stack.Navigator>
    )
}


export default ShopNavigator