import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../components/Layout/ScreenWrapper';
import CustomHeader from '../../../components/Layout/CustomHeader';
import {heightDP, widthDP} from '../../../utils/Responsive';
import {Fonts} from '../../../utils/fonts';
import CustomText from '../../../components/Layout/CusromText/CustomText';

const Security = () => {
  return (
    <ScreenWrapper color1="#0E1E2E" color2="#0E1E2E" color3="#0E1E2E">
      <CustomHeader title={'Security'} />
      <CustomText
        label={'Security'}
        fontSize={24}
        color={'#FFFFFF'}
        fontFamily={Fonts.PoppinsSemiBold}
        alignSelf={'center'}
      />
      <CustomText
        label={
          'We take your security seriously at [Your VPN App Name] and employ industry-standard measures to protect your data. Our VPN uses strong encryption protocols to ensure that your internet traffic is secure and private. We implement strict access controls and regularly update our systems to safeguard against potential vulnerabilities. Additionally, our servers are located in secure data centers with robust physical and digital security measures. We continuously monitor our network for any suspicious activity and take prompt action to address potential threats. Your security is our top priority, and we are committed to providing a safe and reliable VPN service.'
        }
        fontSize={16}
        color={'#FFFFFF'}
        fontFamily={Fonts.PoppinsSemiBold}
        alignSelf={'center'}
        textAlign={'center'}
        marginTop={heightDP(20)}
        lineHeight={20}
      />
    </ScreenWrapper>
  );
};

export default Security;

const styles = StyleSheet.create({});
