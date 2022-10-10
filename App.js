import React from 'react'
import { ActivityIndicator } from 'react-native'
import AppNavigator from './src/navigation/index'
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux'
import store from './src/store'

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf')
  })

  if(!loaded) {
    return <ActivityIndicator/>
  }

  return (
   <Provider store = {store}>
    <AppNavigator/>
   </Provider>
  )
}

