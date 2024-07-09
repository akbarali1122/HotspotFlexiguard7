import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {heightDP, widthDP} from '../../../../utils/Responsive';
import CustomText from '../../../../components/Layout/CusromText/CustomText';
import {COLORS} from '../../../../utils/config';
import Icons from '../../../../components/Layout/CustomIcons/Icons';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading, setLoginData} from '../../../../redux/userSlice/user.Slice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppItem = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {loading, loginData} = useSelector(state => state.user);

  const data = [
    {
      id: 1,
      text: 'Rate Us',
      onPress: () => {
        // navigation.navigate('Setting');
      },
    },
    {
      id: 2,
      text: 'About Us',
      onPress: () => {
        alert('Rate Us');
      },
    },
    {
      id: 3,
      text: 'Terms Condition',
      onPress: () => {
        // navigation.navigate('AboutUs');
      },
    },
    {
      id: 4,
      text: 'Privacy Policy',
      onPress: () => {
        //   navigation.navigate('AboutUs');
      },
    },
    {
      id: 5,
      text: 'Security',
      onPress: () => {
        //   navigation.navigate('AboutUs');
      },
    },
    {
      id: 6,
      text: 'Log Out',
      onPress: async () => {
        await AsyncStorage.removeItem('isAuth');

        dispatch(setLoginData({}));
        dispatch(setLoading(false));
        navigation.navigate('AuthStack');
      },
    },
  ];

  return (
    <View>
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            key={item.id}
            onPress={item.onPress}
            style={styles.container}>
            <CustomText
              label={item.text}
              fontSize={15}
              marginLeft={widthDP(8)}
              color={COLORS.white}
            />
            <View style={styles.iconContainer}>
              <Icons
                family="AntDesign"
                name="right"
                size={20}
                color={COLORS.white}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default AppItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: heightDP(20),
  },
  imagevie: {width: widthDP(30), height: widthDP(30)},
  iconContainer: {
    marginLeft: 'auto', // Ensure the icon stays at the right end
  },
});
