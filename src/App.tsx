import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import '../gesture-handler.native'
import Navigation from './presentation/navigator/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation /> 
    </NavigationContainer>
  )
}

export default App
