import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Route from './src/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import MainStack from './src/navigation/MainStack';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import CustomText from './src/components/Layout/CusromText/CustomText';
import {COLORS} from './src/utils/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 2000);
  // }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="InitialScreen">
          <Stack.Screen
            name="InitialScreen"
            component={InitialScreen}
            options={{headerShown: false}}
          />
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
    </Provider>
  );
};
const InitialScreen = ({navigation}) => {
  const onNavigationHandle = async () => {
    try {
      const res = await AsyncStorage.getItem('isAuth');
      console.log('res===', res);

      if (res) {
        navigation.reset({
          index: 0,
          routes: [{name: 'MainStack'}],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'AuthStack'}],
        });
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    onNavigationHandle();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.theme,
      }}>
      <ActivityIndicator color={'white'} size={30} />
      <CustomText label="Loading..." fontSize={16} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
