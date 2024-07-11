import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../components/Layout/ScreenWrapper';
import CustomHeader from '../../../components/Layout/CustomHeader';
import CustomText from '../../../components/Layout/CusromText/CustomText';
import {heightDP} from '../../../utils/Responsive';
import {Fonts} from '../../../utils/fonts';
import {COLORS} from '../../../utils/config';

const TermsConditions = () => {
  return (
    <ScreenWrapper color1="#0E1E2E" color2="#0E1E2E" color3="#0E1E2E">
      <CustomHeader />
      <CustomText
        label={'Terms & Conditions'}
        fontSize={24}
        color={'#FFFFFF'}
        fontFamily={Fonts.PoppinsSemiBold}
        alignSelf={'center'}
      />
      <CustomText
        label={
          'By using HOTSPOTFLEXIGUARD7, you agree to the terms outlined in this agreement. You must be at least 18 years old to use our services and are responsible for maintaining the confidentiality of your account information. Our VPN service is provided "as is" without warranties of any kind, and we reserve the right to modify or discontinue the service at any time. You agree not to use our service for any illegal activities and must comply with all applicable laws. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service. Your use of HOTSPOTFLEXIGUARD7 indicates acceptance of these terms and conditions.'
        }
        fontSize={14}
        color={COLORS.white}
        fontFamily={Fonts.PoppinsSemiBold}
        alignSelf={'center'}
        textAlign={'center'}
        marginTop={heightDP(20)}
        lineHeight={20}
      />
    </ScreenWrapper>
  );
};

export default TermsConditions;

const styles = StyleSheet.create({});
