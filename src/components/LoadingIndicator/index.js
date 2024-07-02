import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { COLORS } from '../../utils/config';

export const LoadingIndicator = ({ style, color, size }) => {
  return (
    <View
      style={style}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

LoadingIndicator.defaultProps = {
  style: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.7,
    backgroundColor: COLORS.black80,
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10000,
  },
  color: '#fff',
  size: 'large',
};
