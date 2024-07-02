import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {widthDP} from '../../../utils/Responsive';
import {Fonts} from '../../../utils/fonts';

const CustomText = ({
  textStyle,
  fontSize,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  alignSelf,
  fontFamily,
  fontStyle,
  textTransform,
  textAlign,
  label,
  color,
  fontWeight,
  bottom,
  width,
  borderColor,
  borderBottomWidth,
  onPress,
  marginVertical,
  paddingBottom,
  top,
  lineHeight,
  container,
  numberOfLines,
  letterSpacing,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      disabled={!onPress}
      style={[styles.mainContainer, container]}>
      <Text
        numberOfLines={numberOfLines}
        allowFontScaling={false}
        style={[
          {
            fontSize: widthDP(fontSize || 12),
            color: color || 'black',
            marginTop: marginTop || 0,
            marginBottom: marginBottom || 0,
            marginLeft: marginLeft,
            marginRight: marginRight || 0,
            alignSelf: alignSelf || 'flex-start',
            fontFamily: fontFamily || Fonts.PoppinsRegular,
            fontStyle,
            lineHeight,
            textAlign,
            textTransform,
            fontWeight,
            bottom,
            borderBottomWidth,
            borderColor,
            width,
            marginVertical,
            paddingBottom,
            top,
            letterSpacing,
          },
          textStyle,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomText;
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
});
