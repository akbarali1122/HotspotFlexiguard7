import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../../screens/Auth/Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    /></Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})