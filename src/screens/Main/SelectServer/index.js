import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../../utils/config';
import {heightDP, widthDP} from '../../../utils/Responsive';
import CustomHeader from '../../../components/Layout/CustomHeader';
import CustomInput from '../../../components/Layout/CustomInput/CustomInput';
import ServerList from '../../../components/Layout/ServerCard';
import {Images} from '../../../assets/images/pngs';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomText from '../../../components/Layout/CusromText/CustomText';
import {Fonts} from '../../../utils/fonts';
import LinearGradient from 'react-native-linear-gradient';
import ScreenWrapper from '../../../components/Layout/ScreenWrapper';
import {
  setSeletedServer,
  setVpnServers,
} from '../../../redux/userSlice/user.Slice';
import {useDispatch, useSelector} from 'react-redux';
import {GetOvpnFile} from '../../../services';

const SelectServer = ({route}) => {
  const selectedCountry = route?.params?.selectedCountry;

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {vpnServers} = useSelector(state => state.user);
  useEffect(() => {
    getServers();
  }, []);

  useEffect(() => {
    if (selectedCountry?.country) {
      dispatch(
        setSeletedServer({
          id: selectedCountry?.id,
          country: selectedCountry?.country,
          flag: selectedCountry?.flag || {},
          file_name: selectedCountry?.file_name,
        }),
      );
    }
  }, [selectedCountry]);

  const countryArray = [
    {
      id: 1,
      title: 'Server 1',
      flag: Images.ball,
    },
    {
      id: 2,
      title: 'Server 2',
      flag: Images.ball,
    },
    {
      id: 3,
      title: 'Server 3',
      flag: Images.ball,
    },
  ];
  const getServers = async FCM => {
    try {
      const res = await GetOvpnFile({device_token: 123});
      // console.log('res=======', res);
      dispatch(setVpnServers(res?.data));
    } catch (error) {
      console.log('error--======', error);
    }
  };
  const freeServer = vpnServers?.filter(item => item?.access_to === 'premium');

  const toggleSelection = item => {
    dispatch(setSeletedServer(item));
    navigation.navigate('Home', {
      selectedItem: item,
    });
  };

  return (
    <ScreenWrapper color1="#0E1E2E" color2="#0E1E2E" color3="#0E1E2E">
      <CustomHeader title={'Select Location'} />
      <CustomText
        label={'Select Server'}
        fontSize={24}
        color={COLORS.white}
        fontFamily={Fonts.PoppinsMedium}
        marginTop={heightDP(40)}
      />
      <FlatList
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginTop: heightDP(20), paddingBottom: '20%'}}
        data={freeServer}
        keyExtractor={(item, index) => index?.toString()}
        renderItem={({item, index}) => {
          const isCheck = selectedCountry?.country === item?.country;

          return (
            <View style={{marginVertical: heightDP(15)}}>
              <ServerList
                flagImage={{uri: item.flag}}
                label={item.country}
                ListIndex={item.title}
                isSelected={isCheck}
                onPress={() => {
                  toggleSelection(item);
                }}
              />
            </View>
          );
        }}
      />
    </ScreenWrapper>
  );
};

export default SelectServer;

const styles = StyleSheet.create({});
