import React from 'react';
import {View} from 'react-native';
import {COLORS} from '../../../utils/config';
import CustomText from '../../../components/Layout/CusromText/CustomText';
import {Fonts} from '../../../utils/fonts';
import {heightDP, widthDP} from '../../../utils/Responsive';
import Icons from '../../../components/Layout/CustomIcons/Icons';

const SpeedCard = ({downLoadSpeed, upLoadSpeed, speedLoading, isRunning}) => {
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
        <CustomText
          label={downLoadSpeed}
          fontFamily={Fonts.PoppinsBold}
          fontSize={14}
          color={COLORS.gray1}
        />
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
        <CustomText
          label={upLoadSpeed}
          fontFamily={Fonts.PoppinsSemiBold}
          fontSize={16}
          color={COLORS.gray1}
        />
      </View>
    </View>
  );
};

export default SpeedCard;
