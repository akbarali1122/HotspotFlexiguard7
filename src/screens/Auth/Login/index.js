import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ValidPassword, ValidateEmail} from '../../../utils/constants';
import AuthWrapper from '../../../components/Layout/AuthWrapper';
import CustomInput from '../../../components/Layout/CustomInput/CustomInput';
import {heightDP} from '../../../utils/Responsive';
import {COLORS} from '../../../utils/config';

const Login = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const inputPropsArray = [
    {
      id: 1,
      placeholder: 'Email',
      withLabel: 'Email',
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
      withLabel: 'Password',
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
    if (!userName) {
      return setUserNameError('Please enter email');
    } else if (!ValidateEmail(userName?.trim())) {
      return setUserNameError('Please enter valid email (example@gmail.com)');
    } else if (!password) {
      return setPasswordError('Please Enter password');
    } else if (!ValidPassword(password?.trim())) {
      return setPasswordError('Wrong Password');
    } else {
      navigation.navigate('MainStack', {
        screen: 'Home',
      });
    }
  };

  return (
    <AuthWrapper onPress={handleLogin} title="Sign In" buttonTitle="Sign In">
      {inputPropsArray.map((item, index) => {
        return (
          <CustomInput
            key={item.id}
            placeholder={item.placeholder}
            // marginTop={heightDP(index === 0 ? 40 : 20)}
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
