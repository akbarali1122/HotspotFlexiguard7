import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {setLoginData} from '../../../redux/userSlice/user.Slice';
import ImageCropPicker from 'react-native-image-crop-picker';
import axios from 'axios';

const Account = () => {
  const [profilePic, setProfilePic] = useState(null);
  const navigation = useNavigation();
  const loginData = useSelector(state => state.user.loginData);
  const dispatch = useDispatch();

  // console.log('loginData====', loginData);

  const pickImage = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        const source = {uri: image.path};
        setProfilePic(source);
        updateProfile(source); // Automatically update profile on image selection
      })
      .catch(error => {
        if (error.message !== 'User cancelled image selection') {
          console.log('ImagePicker Error: ', error.message);
        }
      });
  };

  const updateProfile = async imageSource => {
    if (!imageSource) {
      Alert.alert('Please select a profile picture.');
      return;
    }

    const formData = new FormData();
    formData.append('user_id', loginData.id);
    formData.append('picture', {
      uri: imageSource.uri,
      type: 'image/jpeg',
      name: 'profile.jpg',
    });

    // console.log('FormData=============', formData._parts[1]);

    try {
      const res = await axios.post(
        'https://flexig7.com/api/edit-profile',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
          },
        },
      );

      // console.log('response=====', res.data);

      if (res.data.status === 'success') {
        Alert.alert(
          'Profile Updated',
          'Your profile has been updated successfully.',
        );
        dispatch(setLoginData(res?.data?.data));
        // navigation.goBack();
      } else {
        Alert.alert(
          'Error',
          res.data.message || 'Something went wrong. Please try again.',
        );
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <ScreenWrapper color1="#0E1E2E" color2="#0E1E2E" color3="#0E1E2E">
      <CustomHeader />
      <View style={styles.profile}>
        <TouchableOpacity style={styles.imagview} onPress={pickImage}>
          <CustomImage
            source={{uri: loginData?.picture} || Images.profile}
            resizeMode="contain"
            style={{height: '100%', width: '100%', borderRadius: 100}}
          />
          <Icons
            name="camera-iris"
            family="MaterialCommunityIcons"
            size={30}
            color={COLORS.white}
            style={styles.cameraIcon}
          />
        </TouchableOpacity>

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
