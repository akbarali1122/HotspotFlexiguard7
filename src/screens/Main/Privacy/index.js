import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../components/Layout/ScreenWrapper';
import CustomHeader from '../../../components/Layout/CustomHeader';
import CustomText from '../../../components/Layout/CusromText/CustomText';
import {Fonts} from '../../../utils/fonts';
import {heightDP} from '../../../utils/Responsive';
import {COLORS} from '../../../utils/config';

const Privacy = () => {
  return (
    <ScreenWrapper color1="#0E1E2E" color2="#0E1E2E" color3="#0E1E2E">
      <CustomHeader />
      <CustomText
        label={'Privacy'}
        fontSize={24}
        color={'#FFFFFF'}
        fontFamily={Fonts.PoppinsSemiBold}
        alignSelf={'center'}
      />
      <CustomText
        label={
          'At HOTSPOTFLEXIGUARD7, we prioritize your privacy and are committed to safeguarding your personal information. We collect minimal data necessary to provide and enhance our services, such as your email address for account management and basic usage metrics to optimize performance. We do not log your browsing activities, ensuring that your online activities remain private and anonymous. Our primary goal is to offer a secure and seamless experience, protecting your data from unauthorized access. By using our app, you agree to our privacy practices outlined in this policy, designed to maintain the highest standards of privacy and security.'
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

export default Privacy;

const styles = StyleSheet.create({});
