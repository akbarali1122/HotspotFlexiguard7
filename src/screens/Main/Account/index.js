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
import Icons from '../../../components/Layout/CustomIcons/Icons';

const Account = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper color1="#0E1E2E" color2="#0E1E2E" color3="#0E1E2E">
      <CustomHeader />
      <View style={styles.profile}>
        <TouchableOpacity
          style={styles.imagview}
          onPress={() => navigation.navigate('EditProfile')}>
          <CustomImage
            source={Images.profile}
            resizeMode="contain"
            style={{height: '100%', width: '100%'}}
          />
          <Icons
            name="pencil"
            family="Octicons"
            size={20}
            color={COLORS.white}
            style={styles.cameraIcon}
          />
        </TouchableOpacity>

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
    marginTop: heightDP(40),
  },
  cameraIcon: {
    position: 'absolute',
    backgroundColor: COLORS.theme,
    borderRadius: 100, // Update this to half of the width/height to make it circular
    width: widthDP(40), // Make sure the width and height are the same to create a circle
    height: widthDP(40),
    padding: 7, // Optional: Adjust padding if necessary
    bottom: -10,
    right: -5,
    alignItems: 'center', // Center the icon horizontally
    justifyContent: 'center',
  },
});
