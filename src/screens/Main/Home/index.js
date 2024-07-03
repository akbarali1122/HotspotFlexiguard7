import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
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
import RNSimpleOpenvpn, {
  addVpnStateListener,
  removeVpnStateListener,
} from 'react-native-simple-openvpn';
import {ovpnFile} from '../../../utils/constants';
import Ping from 'react-native-ping';

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [connectLoading, setConnectLoading] = useState(false);
  const [selectedServer, setSelectedServer] = useState(null);
  const [receivedNetworkSpeed, setReceivedNetworkSpeed] = useState(null);
  const [sendNetworkSpeed, setSendNetworkSpeed] = useState(null);
  const [speedLoading, setSpeedLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const intervalRef = useRef(null);
  const speedIntervalRef = useRef(null);
  const isIPhone = /iPhone/.test(Dimensions.get('window').model);

  useEffect(() => {
    if (route.params?.selectedServer) {
      setSelectedServer(route.params.selectedServer);
      setIsClicked(true);
    }
  }, [route.params?.selectedServer]);

  useEffect(() => {
    async function observeVpn() {
      if (isIPhone) {
        await RNSimpleOpenvpn.observeState();
      }

      addVpnStateListener(e => {
        // Handle VPN state changes here
        console.log('VPN State:', e);
      });
    }

    observeVpn();

    return async () => {
      if (isIPhone) {
        await RNSimpleOpenvpn.stopObserveState();
      }

      removeVpnStateListener();
    };
  }, []);

  useEffect(() => {
    return () => stopTimer();
  }, []);

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (speedIntervalRef.current) {
      clearInterval(speedIntervalRef.current);
    }
    setTimer(0);
    setReceivedNetworkSpeed(null);
    setSendNetworkSpeed(null);
  };

  const getTrafficStats = async () => {
    try {
      const {receivedNetworkSpeed, sendNetworkSpeed} =
        await Ping.getTrafficStats();
      setReceivedNetworkSpeed(receivedNetworkSpeed);
      setSendNetworkSpeed(sendNetworkSpeed);
    } catch (error) {
      console.error('Error fetching traffic stats:', error);
    }
  };

  const startOvpn = async () => {
    try {
      setConnectLoading(true);
      await RNSimpleOpenvpn.connect({
        ovpnString: ovpnFile,
      });
      setConnectLoading(false);
      startTimer();
      setReceivedNetworkSpeed('0.00'); // Initialize to 0.00 Mbps on connect
      setSendNetworkSpeed('0.00'); // Initialize to 0.00 Mbps on connect
      speedIntervalRef.current = setInterval(getTrafficStats, 1000); // Poll every second
    } catch (error) {
      setConnectLoading(false);
      console.error(error);
    }
  };

  const stopOvpn = async () => {
    try {
      setConnectLoading(true);
      await RNSimpleOpenvpn.disconnect();
      setConnectLoading(false);
      stopTimer();
      setReceivedNetworkSpeed(null); // Reset to null on disconnect
      setSendNetworkSpeed(null); // Reset to null on disconnect
    } catch (error) {
      setConnectLoading(false);
      console.error(error);
    }
  };

  const handleIconPress = () => {
    if (isRunning) {
      stopOvpn();
    } else {
      startOvpn();
      // navigation.navigate('Ads');
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
      color1="#164958"
      color2="#0E1E2E"
      color3="#0E1E2E"
      isHomeScreen
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
      onPress={handleNavigationPress}
      isClicked={isClicked}>
      <View
        style={{
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
          style={[
            styles.button,
            isRunning ? styles.buttonRunning : styles.button,
          ]}
          onPress={handleIconPress}>
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
            label={'Status: Connected'}
            fontSize={15}
            color={COLORS.white}
            fontFamily={Fonts.PoppinsSemiBold}
            alignSelf={'center'}
            marginTop={heightDP(20)}
          />
        ) : (
          <CustomText
            label={'Tap to Connect'}
            fontSize={15}
            color={COLORS.white}
            fontFamily={Fonts.PoppinsSemiBold}
            alignSelf={'center'}
            marginTop={heightDP(20)}
          />
        )}
      </View>
      {isRunning && (
        <SpeedCard
          receivedNetworkSpeed={receivedNetworkSpeed}
          sendNetworkSpeed={sendNetworkSpeed}
          speedLoading={speedLoading}
          isRunning={isRunning}
        />
      )}
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
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
  buttonRunning: {
    height: widthDP(110),
    width: widthDP(110),
    borderRadius: 100,
    backgroundColor: COLORS.theme,
  },
});
