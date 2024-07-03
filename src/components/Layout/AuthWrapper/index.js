import {StyleSheet, View} from 'react-native';
import React from 'react';
import CustomStatusBar from '../CustomStatusBar';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomText from '../CusromText/CustomText';
import {Fonts} from '../../../utils/fonts';
import CustomButton from '../CustomButton/CustomButton';
import {COLORS} from '../../../utils/config';
import {heightDP, widthDP} from '../../../utils/Responsive';
import CustomImage from '../CustomImage/CustomImage';
import CustomHeader from '../CustomHeader';
import {Images} from '../../../assets/images/pngs';

const AuthWrapper = ({
  children,
  title,
  buttonTitle,
  paddingBottom,
  onPress,
  bottomText,
  bottomTitle,
  onRegister,
  height,
}) => {
  return (
    <CustomStatusBar>
      {/* <CustomHeader/> */}
      <View style={styles.imagview}>
        <CustomImage
          source={Images.main}
          resizeMode="contain"
          style={{height: '100%', width: '100%'}}
        />
      </View>
      <View style={styles.centeredBox}>
        <CustomText
          label={title}
          fontSize={30}
          fontFamily={Fonts.PoppinsMedium}
          alignSelf="center"
          color={'white'}
          marginTop={heightDP(20)}
        />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: paddingBottom || '15%',
          }}>
          {children}

          <CustomButton
            onPress={onPress}
            title={buttonTitle}
            fontSize={20}
            fontFamily={Fonts.PoppinsMedium}
            marginTop={heightDP(40)}
          />
        </KeyboardAwareScrollView>

        <View style={styles.bottomContainer}>
          <CustomText
            label={bottomText}
            fontFamily={Fonts.PoppinsMedium}
            fontSize={14}
          />
          <CustomText
            onPress={onRegister}
            label={bottomTitle}
            color={COLORS.darkRed}
            fontFamily={Fonts.PoppinsBold}
            fontSize={14}
          />
        </View>
      </View>
    </CustomStatusBar>
  );
};

export default AuthWrapper;

const styles = StyleSheet.create({
  imgContainer: {
    width: '50%',
    alignSelf: 'center',
  },
  img: {height: '100%', width: '100%'},
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: heightDP(20),
  },
  imagview: {
    width: widthDP(70),
    height: widthDP(70),
    alignSelf: 'center',
    marginTop: heightDP(60),
    marginBottom: heightDP(50),
  },
  centeredBox: {
    width: widthDP(380),
    height: heightDP(440),
    backgroundColor: '#192A3D',
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.alphaBlue,
  },
});
