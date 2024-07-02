import {
  TouchableOpacity,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {heightDP, widthDP} from '../../../utils/Responsive';
import {COLORS} from '../../../utils/config';
import CustomImage from '../CustomImage/CustomImage';
import {Fonts} from '../../../utils/fonts';
import CustomText from '../CusromText/CustomText';

const CustomButton = ({
  onPress,
  title,
  width,
  height,
  alignSelf,
  borderRadius,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  fontSize,
  color,
  fontFamily,
  ShowIcon,
  Loading,
  disabled,
  ActivityIndicatorColor,
  borderWidth,
  borderColor,
  isLeftIcon,
  source,
  backgroundColor,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      disabled={disabled || !onPress}
      style={{
        width: '100%',
        borderRadius: 100,
        height: heightDP(55),
      }}>
      <View
        backgroundColor={COLORS.theme}
        style={{
          width: width || '90%',
          height: heightDP(height || 55),
          alignSelf: alignSelf || 'center',
          marginRight: marginRight,
          marginTop: marginTop,
          marginLeft: marginLeft,
          marginBottom: marginBottom,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: borderWidth,
          borderColor: borderColor,
          borderRadius: borderRadius || 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          {isLeftIcon && (
            <View style={styles.leftIconContainer}>
              <CustomImage
                source={source}
                resizeMode="cover"
                style={{height: '100%', width: '100%'}}
              />
            </View>
          )}

          {Loading ? (
            <ActivityIndicator color={ActivityIndicatorColor || 'white'} />
          ) : (
            <CustomText
              label={title}
              fontSize={fontSize || 15}
              color={color || 'white'}
              fontFamily={fontFamily || Fonts.PoppinsRegular}
              marginLeft={ShowIcon ? 10 : 0}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  leftIconContainer: {
    height: widthDP(40),
    width: widthDP(40),
    borderRadius: 100,
    overflow: 'hidden',
    marginRight: widthDP(10),
  },
});
