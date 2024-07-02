import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import ScreenWrapper from '../../../components/Layout/ScreenWrapper';
import CustomText from '../../../components/Layout/CusromText/CustomText';
import {COLORS} from '../../../utils/config';
import {Fonts} from '../../../utils/fonts';
import {heightDP, widthDP} from '../../../utils/Responsive';
import Icons from '../../../components/Layout/CustomIcons/Icons';
import CustomImage from '../../../components/Layout/CustomImage/CustomImage';
import {Images} from '../../../assets/images/pngs';
import SpeedCard from './SpeedCard';
import {useNavigation, useRoute} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [connectLoading, setConnectLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedServer, setSelectedServer] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (route.params?.selectedServer) {
      setSelectedServer(route.params.selectedServer);
      setIsClicked(true);
    }
  }, [route.params?.selectedServer]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startTimer = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTimer(prevTime => prevTime + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  };

  const handleTimer = () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  const formatTime = () => {
    const hours = String(Math.floor(timer / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timer % 3600) / 60)).padStart(2, '0');
    const seconds = String(timer % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };
  const handleNavigationPress = () => {
    if (isClicked) {
      navigation.navigate('SelectServer');
    } else {
      setIsClicked(true);
    }
  };

  return (
    <ScreenWrapper
      isHeader
      source={isClicked ? Images.ball : Images.vip}
      title={
        selectedServer
          ? selectedServer
          : isClicked
          ? 'Select Server'
          : 'Become VIP!'
      }
      subtitle={!isClicked && 'Unlock all the servers'}
      onPress={handleNavigationPress}>
      <View
        style={{
          // backgroundColor: 'red',
          height: Dimensions.get('screen').height / 2.2,
          justifyContent: 'flex-end',
        }}>
        <CustomText
          label={formatTime() || '00:00:00'}
          fontSize={35}
          color={COLORS.white}
          fontFamily={Fonts.PoppinsSemiBold}
          alignSelf={'center'}
        />
        <TouchableOpacity
          style={[styles.butn, isRunning ? styles.butnRunning : styles.butn]}
          onPress={handleTimer}>
          {connectLoading ? (
            <ActivityIndicator size="large" color="white" />
          ) : (
            <Icons
              family="FontAwesome"
              name="power-off"
              size={40}
              color={COLORS.white}
            />
          )}
        </TouchableOpacity>
        {isRunning ? (
          <CustomText
            label={'Status Connected'}
            fontSize={15}
            color={COLORS.white}
            fontFamily={Fonts.PoppinsSemiBold}
            alignSelf={'center'}
            marginTop={heightDP(20)}
          />
        ) : (
          <CustomText
            label={'Top To Connect'}
            fontSize={15}
            color={COLORS.white}
            fontFamily={Fonts.PoppinsSemiBold}
            alignSelf={'center'}
            marginTop={heightDP(20)}
          />
        )}
      </View>
      {isRunning && <SpeedCard />}
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  butn: {
    height: widthDP(110),
    width: widthDP(110),
    borderRadius: 100,
    backgroundColor: 'rgba(37, 156, 218, 0.4)',
    marginTop: heightDP(100),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 1,
  },
  butnRunning: {
    height: widthDP(110),
    width: widthDP(110),
    borderRadius: 100,
    backgroundColor: COLORS.theme,
  },
});
