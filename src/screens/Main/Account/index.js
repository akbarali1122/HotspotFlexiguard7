import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {heightDP, widthDP} from '../../../utils/Responsive';
import CustomHeader from '../../../components/Layout/CustomHeader';
import CustomText from '../../../components/Layout/CusromText/CustomText';
import {Fonts} from '../../../utils/fonts';
import {COLORS} from '../../../utils/config';
import CustomImage from '../../../components/Layout/CustomImage/CustomImage';
import {Images} from '../../../assets/images/pngs';
import AppItem from './Molecule';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import ScreenWrapper from '../../../components/Layout/ScreenWrapper';

const Account = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper color1="#0E1E2E" color2="#0E1E2E" color3="#0E1E2E">
      <CustomHeader />
      <TouchableOpacity
        style={styles.profile}
        onPress={() => navigation.navigate('EditProfile')}>
        <View style={styles.imagview}>
          <CustomImage
            source={Images.profile}
            resizeMode="contain"
            style={{height: '100%', width: '100%'}}
          />
        </View>

        <CustomText
          label={'Haroon Hussain'}
          fontFamily={Fonts.PoppinsRegular}
          fontSize={22}
          marginTop={heightDP(14)}
          color={COLORS.white}
        />
        <CustomText
          label={'test@gmail.com'}
          fontSize={14}
          color={COLORS.white}
          marginTop={heightDP(5)}
        />
      </TouchableOpacity>
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
    marginTop: heightDP(40),
  },
});
