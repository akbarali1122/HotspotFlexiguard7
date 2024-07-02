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

const EditProfile = () => {
  const inputPropsArray = [
    {
      id: 1,
      placeholder: 'Name',
      label: 'Name',
    },
    {
      id: 2,
      placeholder: 'Passwordyourname@email.com',
      label: 'Email',
    },
    {
      id: 3,
      placeholder: '0123456789',
      label: 'Phone',
    },
  ];

  return (
    <LinearGradient
      colors={['#0E1E2E', '#0E1E2E', '#259CDA']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0}}
      style={{
        flex: 1,
        paddingHorizontal: widthDP(20),
      }}>
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
          color={COLORS.black}
          style={styles.cameraIcon}
        />
      </View>
      <View style={{marginTop: heightDP(50)}}>
        {inputPropsArray.map(item => {
          return (
            <View key={item.id} style={styles.inputContainer}>
              <CustomText
                label={item.label}
                color={COLORS.white}
                fontSize={14}
                marginLeft={widthDP(20)}
                marginBottom={heightDP(20)}
                fontFamily={Fonts.PoppinsRegular}
              />
              <CustomInput placeholder={item.placeholder} />
            </View>
          );
        })}
        <CustomButton title={'Update'} marginTop={heightDP(20)} />
      </View>
    </LinearGradient>
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
    marginBottom: heightDP(15), // Adjust this value for desired margin
  },
});
