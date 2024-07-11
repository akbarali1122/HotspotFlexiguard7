import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Main/Home';
import SelectServer from '../../screens/Main/SelectServer';
import Account from '../../screens/Main/Account';
import EditProfile from '../../screens/Main/EditProfile';
import AboutUs from '../../screens/Main/AboutUs';
import TermsConditions from '../../screens/Main/TermsCoditions';
import Privacy from '../../screens/Main/Privacy';
import Security from '../../screens/Main/Secuirty';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectServer"
        component={SelectServer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermsConditions"
        component={TermsConditions}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Privacy"
        component={Privacy}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Security"
        component={Security}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
