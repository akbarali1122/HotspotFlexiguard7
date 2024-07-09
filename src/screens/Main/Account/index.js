import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {heightDP, widthDP} from '../../../utils/Responsive';
import CustomHeader from '../../../components/Layout/CustomHeader';
import CustomText from '../../../components/Layout/CusromText/CustomText';
import {Fonts} from '../../../utils/fonts';
import {COLORS} from '../../../utils/config';
import CustomImage from '../../../components/Layout/CustomImage/CustomImage';
import {Images} from '../../../assets/images/pngs';
import AppItem from './Molecule';
import {useNavigation} from '@react-navigation/native';
import ScreenWrapper from '../../../components/Layout/ScreenWrapper';
import Icons from '../../../components/Layout/CustomIcons/Icons';
import {useSelector} from 'react-redux';

const Account = () => {
  const {loginData} = useSelector(state => state.user);
  const navigation = useNavigation();
  return (
    <ScreenWrapper color1="#0E1E2E" color2="#0E1E2E" color3="#0E1E2E">
      <CustomHeader />
      <View style={styles.profile}>
        <View style={styles.imagview}>
          <CustomImage
            source={Images.profile}
            resizeMode="contain"
            style={{height: '100%', width: '100%'}}
          />
          <Icons
            name="camera-iris"
            family="MaterialCommunityIcons"
            size={30}
            color={COLORS.white}
            style={styles.cameraIcon}
          />
        </View>

        <CustomText
          label={loginData?.name || ''}
          fontFamily={Fonts.PoppinsRegular}
          fontSize={22}
          marginTop={heightDP(14)}
          color={COLORS.white}
        />
        <CustomText
          label={loginData?.email || ''}
          fontSize={14}
          color={COLORS.white}
          marginTop={heightDP(5)}
        />
      </View>
      <AppItem />
    </ScreenWrapper>
  );
};

export default Account;

const styles = StyleSheet.create({
  imagview: {
    width: widthDP(100),
    height: widthDP(100),
    borderRadius: 100,
    backgroundColor: COLORS.theme,
  },
  profile: {
    alignItems: 'center',
  },
  cameraIcon: {
    position: 'absolute',
    backgroundColor: COLORS.theme,
    borderRadius: 15,
    padding: 2,
    bottom: -10,
    right: -5,
  },
});
