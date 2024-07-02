import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icons from '../CustomIcons/Icons';
import Spacer from '../Spacer';
import { heightDP, widthDP } from '../../../utils/Responsive';
import { COLORS } from '../../../utils/config';

const CustomHeader = ({title, onPress}) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: heightDP(20),
        height:heightDP(50),
        width:widthDP(50),
        backgroundColor:'#182736',
        borderRadius:12
        
      }}>
      <TouchableOpacity onPress={onPress ? onPress : () => handleBack()}>
        <Icons family="AntDesign" name="left" size={20} color={COLORS.white} />
      </TouchableOpacity>
    
      <Spacer height={1} width="7%" />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
