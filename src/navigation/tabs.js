import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import CartNavigator from './cart'
import ShopNavigator from './shop'
import OrdersNavigator from './orders'
import { colors } from '../constants/themes'

const BottomTap = createBottomTabNavigator();


const TabsNavigator = () => {
    return (
        <BottomTap.Navigator
            initialRouteName='ShopTab'
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily:'Lato-Bold',
                    color:colors.primary
                }
            }}
        >
            <BottomTap.Screen
                name='ShopTab'
                component={ShopNavigator}
                options={{
                    title:'Shop',
                    tabBarIcon:({focused}) => (
                        <Ionicons 
                        name={focused ? 'home' : "home-outline" }
                        size={24} 
                        color={colors.primary}/>
                    )
                }}
            />
            <BottomTap.Screen
                name='OrdersTab'
                component={OrdersNavigator}
                options={{
                    title:'Orders',
                    tabBarIcon:({focused}) => (
                        <Ionicons 
                            name={focused ? 'file-tray-full' : 'file-tray-full-outline'}
                            size={22}
                            color={colors.primary}/>
                        )
                }}
            />
            <BottomTap.Screen
                name='CartTab'
                component={CartNavigator}
                options={{
                    title:'Cart',
                    tabBarIcon:({focused}) => (
                        <Ionicons 
                            name={focused ? 'cart' : 'cart-outline'}
                            size={22}
                            color={colors.primary}/>
                        )
                    }}
            />
        </BottomTap.Navigator>
    )
}

export default TabsNavigator;