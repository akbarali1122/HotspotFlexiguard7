import {View} from 'react-native';
import React from 'react';

const Spacer = ({height, width}) => {
  return <View style={{height: height || 90, width:width}} />;
};

export default Spacer;
