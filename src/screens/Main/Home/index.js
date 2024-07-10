import React, {useEffect, useRef} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ScreenWrapper from '../../../components/Layout/ScreenWrapper';
import CustomText from '../../../components/Layout/CusromText/CustomText';
import {COLORS} from '../../../utils/config';
import {Fonts} from '../../../utils/fonts';
import {heightDP, widthDP} from '../../../utils/Responsive';
import Icons from '../../../components/Layout/CustomIcons/Icons';
import SpeedCard from './SpeedCard';
import {useNavigation, useRoute} from '@react-navigation/native';
import RNSimpleOpenvpn, {
  addVpnStateListener,
  removeVpnStateListener,
} from 'react-native-simple-openvpn';
import Ping from 'react-native-ping';
import {
  setCheckVPNConnect,
  setDownLoadSpeed,
  setUpLoadSpeed,
  startTimer,
  stopTimer,
  incrementTimer,
  setLoading,
  setVpnServers,
} from '../../../redux/userSlice/user.Slice';
import {GetOvpnFile} from '../../../services';

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const intervalRef = useRef(null);

  const selectedItem = route?.params?.selectedItem;
  // Redux state
  const {
    checkVPNConnect,
    timerRunning,
    timerValue,
    downloadSpeed,
    uploadSpeed,
    connectLoading,
    selectedServer,
    vpnServers,
  } = useSelector(state => state.user);

  const isIPhone = /iPhone/.test(Dimensions.get('window').model);

  useEffect(() => {
    getServers();
  }, []);

  // useEffect(() => {
  //   if (route.params?.selectedServer) {
  //     dispatch(setSeletedServer(route.params.selectedServer));
  //   }
  // }, [route.params?.selectedServer]);

  useEffect(() => {
    async function observeVpn() {
      if (isIPhone) {
        await RNSimpleOpenvpn.observeState();
      }

      addVpnStateListener(e => {
        console.log('VPN State:', e);
        dispatch(setCheckVPNConnect(e));
      });
    }

    observeVpn();

    return () => {
      if (isIPhone) {
        RNSimpleOpenvpn.stopObserveState();
      }

      removeVpnStateListener();
    };
  }, [dispatch]);

  useEffect(() => {
    if (checkVPNConnect?.message === 'CONNECTED') {
      dispatch(setLoading(false));
      if (!timerRunning) {
        startTimerHandler();
      }
    } else if (
      checkVPNConnect?.message === 'CONNECTRETRY' ||
      checkVPNConnect?.message === 'NOPROCESS'
    ) {
      dispatch(setLoading(false));
      stopTimerHandler();
      dispatch(setDownLoadSpeed(null));
      dispatch(setUpLoadSpeed(null));
    }
  }, [checkVPNConnect, timerRunning, dispatch]);

  useEffect(() => {
    if (checkVPNConnect?.message === 'CONNECTED') {
      getTrafficStats();
    }
  }, [checkVPNConnect, downloadSpeed, uploadSpeed]);

  const startTimerHandler = () => {
    if (!timerRunning) {
      dispatch(startTimer());
      intervalRef.current = setInterval(() => {
        dispatch(incrementTimer());
      }, 1000);
    }
  };

  const stopTimerHandler = () => {
    dispatch(stopTimer());
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const getTrafficStats = async () => {
    try {
      const {receivedNetworkSpeed, sendNetworkSpeed} =
        await Ping.getTrafficStats();
      // console.log('Received Network Speed:', receivedNetworkSpeed);
      // console.log('Send Network Speed:', sendNetworkSpeed);
      dispatch(setDownLoadSpeed(receivedNetworkSpeed));
      dispatch(setUpLoadSpeed(sendNetworkSpeed));
    } catch (error) {
      console.error('Error fetching traffic stats:', error);
    }
  };
  const getServers = async FCM => {
    try {
      const res = await GetOvpnFile({device_token: 123});
      // console.log('res=======', res);
      dispatch(setVpnServers(res?.data));
    } catch (error) {
      console.log('error--======', error);
    }
  };
  const freeServer = vpnServers?.find(item => item?.access_to === 'free');
  // console.log('vpnServers============', vpnServers);

  const handleVPN = () => {
    if (selectedItem) {
      // alert('selectedItem');
      return selectedItem?.file_name;
    } else {
      // alert('freeServer');
      return freeServer?.file_name;
    }
  };

  const startOvpn = async () => {
    dispatch(setLoading(true));
    try {
      await RNSimpleOpenvpn.connect({
        ovpnString: handleVPN(),
        notificationTitle: 'Flexiguard VPN',
      }).then(() => {
        if (checkVPNConnect?.message === 'EXITING') {
          dispatch(setLoading(false));
          stopOvpn();
          dispatch(setCheckVPNConnect(''));
        } else if (checkVPNConnect?.message === 'CONNECTED') {
          dispatch(setLoading(false));
          stopTimerHandler();
        }
      });
    } catch (error) {
      console.log('error======', error);
      alert('Please Select Server');
      dispatch(setLoading(false));
    }
  };

  const stopOvpn = async () => {
    try {
      await RNSimpleOpenvpn.disconnect().then(() => {
        setTimeout(() => {
          dispatch(setLoading(false));
          dispatch(setDownLoadSpeed(''));
          dispatch(setUpLoadSpeed(''));
        }, 2000);
      });
    } catch (error) {
      dispatch(setLoading(false));
    }
    stopTimerHandler();
  };

  const handleIconPress = () => {
    if (checkVPNConnect?.message === 'CONNECTED') {
      stopOvpn();
    } else {
      dispatch(setLoading(true));
      startOvpn();
    }
  };

  const formatTime = () => {
    const hours = String(Math.floor(timerValue / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timerValue % 3600) / 60)).padStart(
      2,
      '0',
    );
    const seconds = String(timerValue % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleNavigationPress = () => {
    navigation.navigate('SelectServer', {
      selectedCountry: selectedItem,
    });
  };

  return (
    <ScreenWrapper
      onVipPress={handleNavigationPress}
      color1="#164958"
      color2="#0E1E2E"
      color3="#0E1E2E"
      isHomeScreen
      isHeader
      onPress={handleNavigationPress}>
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
            checkVPNConnect?.message === 'CONNECTED'
              ? styles.buttonRunning
              : styles.button,
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
        {checkVPNConnect?.message === 'CONNECTED' ? (
          <CustomText
            label={`Status: Connected`}
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
      {checkVPNConnect?.message === 'CONNECTED' && (
        <SpeedCard
          receivedNetworkSpeed={downloadSpeed}
          sendNetworkSpeed={uploadSpeed}
          speedLoading={connectLoading}
          isRunning={timerRunning}
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
