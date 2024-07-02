import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Route from './src/navigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './src/navigation/AuthStack'
import MainStack from './src/navigation/MainStack'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
         name="AuthStack"
         component={AuthStack}
         options={{headerShown: false}}
      />
        <Stack.Screen
         name="MainStack"
         component={MainStack}
         options={{headerShown: false}}
      />
    </Stack.Navigator>
    
       </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})