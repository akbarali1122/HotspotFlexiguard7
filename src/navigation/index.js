import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'

const Stack = createNativeStackNavigator()

const Route = () => {
  return (
   <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen
     name="AuthStack"
     component={AuthStack}
     options={{headerShown: false}}
  />
</Stack.Navigator>

   </NavigationContainer>
  )
}

export default Route

const styles = StyleSheet.create({})