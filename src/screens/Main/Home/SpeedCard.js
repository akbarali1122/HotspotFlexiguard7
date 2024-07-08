import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {COLORS} from '../../../utils/config';
import CustomText from '../../../components/Layout/CusromText/CustomText';
import {Fonts} from '../../../utils/fonts';
import {heightDP, widthDP} from '../../../utils/Responsive';
import Icons from '../../../components/Layout/CustomIcons/Icons';

const SpeedCard = ({
  receivedNetworkSpeed,
  sendNetworkSpeed,
  speedLoading,
  isRunning,
}) => {
  return (
    <View
      style={{
        alignSelf: 'center',
        marginTop: heightDP(80),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: widthDP(150),
          height: heightDP(60),
          backgroundColor: '#164D6D',
          borderRadius: 10,
          justifyContent: 'center',
        }}>
        <Icons
          family="AntDesign"
          name="arrowdown"
          size={widthDP(20)}
          color={COLORS.theme}
        />
        {speedLoading || !isRunning ? (
          <ActivityIndicator size="small" color={COLORS.white} />
        ) : (
          <CustomText
            label={
              receivedNetworkSpeed ? `${receivedNetworkSpeed} ` : '0.00 Mbps'
            }
            fontFamily={Fonts.PoppinsBold}
            fontSize={14}
            color={COLORS.white}
            marginLeft={widthDP(6)}
          />
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: widthDP(150),
          height: heightDP(60),
          backgroundColor: '#164D6D',
          borderRadius: 10,
          marginLeft: 20,
          justifyContent: 'center',
        }}>
        <Icons
          family="AntDesign"
          name="arrowup"
          size={widthDP(20)}
          color={COLORS.theme}
        />
        {speedLoading || !isRunning ? (
          <ActivityIndicator size="small" color={COLORS.white} />
        ) : (
          <CustomText
            label={sendNetworkSpeed ? `${sendNetworkSpeed} ` : '0.00 Mbps'}
            fontFamily={Fonts.PoppinsSemiBold}
            fontSize={16}
            color={COLORS.white}
            marginLeft={widthDP(6)}
          />
        )}
      </View>
    </View>
  );
};

export default SpeedCard;
