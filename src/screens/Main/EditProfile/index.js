import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {heightDP, widthDP} from '../../../utils/Responsive';
import CustomHeader from '../../../components/Layout/CustomHeader';
import {Images} from '../../../assets/images/pngs';
import {COLORS} from '../../../utils/config';
import CustomImage from '../../../components/Layout/CustomImage/CustomImage';
import Icons from '../../../components/Layout/CustomIcons/Icons';
import CustomInput from '../../../components/Layout/CustomInput/CustomInput';
import CustomText from '../../../components/Layout/CusromText/CustomText';
import {Fonts} from '../../../utils/fonts';
import CustomButton from '../../../components/Layout/CustomButton/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import ScreenWrapper from '../../../components/Layout/ScreenWrapper';

const EditProfile = () => {
  const inputPropsArray = [
    {
      id: 1,
      placeholder: 'Name',
      withLabel: 'Name',
    },
    {
      id: 2,
      placeholder: 'Passwordyourname@email.com',
      withLabel: 'Email',
    },
    {
      id: 3,
      placeholder: '0123456789',
      withLabel: 'Phone',
    },
  ];

  return (
    <ScreenWrapper color1="#0E1E2E" color2="#0E1E2E" color3="#0E1E2E">
      <CustomHeader />
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
      <View style={{marginTop: heightDP(50)}}>
        {inputPropsArray.map(item => {
          return (
            <View key={item.id} style={styles.inputContainer}>
              <CustomInput
                placeholder={item.placeholder}
                borderRadius={5}
                borderColor={COLORS.alphaBlue}
                withLabel={item.withLabel}
              />
            </View>
          );
        })}
        <CustomButton title={'Update'} marginTop={heightDP(40)} />
      </View>
    </ScreenWrapper>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  imagview: {
    width: widthDP(100),
    height: widthDP(100),
    borderRadius: 100,
    backgroundColor: COLORS.theme,
    alignSelf: 'center',
  },
  cameraIcon: {
    position: 'absolute',
    backgroundColor: COLORS.theme,
    borderRadius: 15,
    padding: 2,
    bottom: -10,
    right: -5,
  },
  inputContainer: {
    // Adjust this value for desired margin
  },
});
