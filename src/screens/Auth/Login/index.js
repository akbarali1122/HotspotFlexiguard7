import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ValidPassword, ValidateEmail} from '../../../utils/constants';
import AuthWrapper from '../../../components/Layout/AuthWrapper';
import CustomInput from '../../../components/Layout/CustomInput/CustomInput';
import {heightDP} from '../../../utils/Responsive';
import {COLORS} from '../../../utils/config';
import {useDispatch, useSelector} from 'react-redux';
import {Keyboard, Platform} from 'react-native';
import {setLoading, setLoginData} from '../../../redux/userSlice/user.Slice';
import {LoginUser} from '../../../services';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const {loading} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const inputPropsArray = [
    {
      id: 1,
      placeholder: 'Email',
      value: userName,
      onChangeText: val => {
        setUserName(val);
        setUserNameError('');
      },
      errorMessage: userNameError,
    },
    {
      id: 2,
      placeholder: 'Password',
      secureTextEntry: true,
      value: password,
      onChangeText: val => {
        setPassword(val);
        setPasswordError('');
      },
      errorMessage: passwordError,
    },
  ];

  const handleLogin = async () => {
    const payload = {
      email: userName,
      password: password,
      device_token: Platform.OS === 'ios' ? 123 : 123,
      // device_type: Platform.OS === 'ios' ? 'ios' : 'android',
    };

    if (!userName) {
      return setUserNameError('Please enter email');
    } else if (!ValidateEmail(userName?.trim())) {
      return setUserNameError('Please enter valid email (example@gmail.com)');
    } else if (!password) {
      return setPasswordError('Please Enter password');
    }
    // else if (password.length <= 7) {
    //   return setPasswordError('Password should be greater then 8 letters');
    // }
    else if (!ValidPassword(password?.trim())) {
      return setPasswordError('Wrong Password');
    } else {
      dispatch(setLoading(true));
      await LoginUser(payload)
        .then(async res => {
          await AsyncStorage.setItem('isAuth', res?.data?.api_token);
          dispatch(setLoading(true));
          console.log('res=======', res);
          if (res?.status === 'fail') {
            // alert('error', `${res?.message}`);
            setPasswordError(`${res?.message}`);
          } else {
            dispatch(setLoginData(res?.data));
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'MainStack',
                },
              ],
            });
          }
          dispatch(setLoading(false));
        })
        .catch(error => {
          dispatch(setLoading(false));
          console.log('error==========>>>>>', error);
          if (error.code === 'ERR_NETWORK') {
            alert('error', 'Network request failed. Please try again later');
          } else if (error) {
            // alert('Invalid email or password');
            setPasswordError('Invalid email or password');
          }
        });
      dispatch(setLoading(false));
    }
  };

  return (
    <AuthWrapper onPress={handleLogin} title="Sign In" buttonTitle="Sign In">
      {inputPropsArray.map((item, index) => {
        return (
          <CustomInput
            key={item.id}
            placeholder={item.placeholder}
            marginTop={heightDP(index === 0 ? 40 : 20)}
            secureTextEntry={item.secureTextEntry}
            value={item.value}
            onChangeText={item.onChangeText}
            errorMessage={item.errorMessage}
            borderRadius={5}
            borderColor={COLORS.alphaBlue}
            withLabel={item.withLabel}
          />
        );
      })}
    </AuthWrapper>
  );
};

export default Login;
