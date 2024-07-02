import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {widthDP} from '../../../utils/Responsive';
import LinearGradient from 'react-native-linear-gradient';

const CustomStatusBar = ({children}) => {
  return (
    <Fragment>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <SafeAreaView style={{flex: 0, backgroundColor: 'white'}} />
      <LinearGradient
      colors={['#0E1E2E', '#0E1E2E', '#259CDA']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1.5}}
        style={{
          flex: 1,
          paddingHorizontal: widthDP(20),
        }}>
        {children}
      </LinearGradient>
    </Fragment>
  );
};

export default CustomStatusBar;
