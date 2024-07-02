import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {widthDP} from '../../../utils/Responsive';
import CustomText from '../CusromText/CustomText';
import {Fonts} from '../../../utils/fonts';
import {COLORS} from '../../../utils/config';

const ChoosenServer = ({
  isSelected,
  onPress,
  isGeneral,
  label,
  onPressLabel,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={onPress} style={[styles.container]}>
        {isSelected && (
          <View
            style={[
              styles.checkbox,
              {
                width: widthDP(isGeneral ? 22 : 12),
                height: widthDP(isGeneral ? 22 : 12),
              },
            ]}
          />
        )}
      </TouchableOpacity>
      {isGeneral && (
        <CustomText
          onPress={onPressLabel}
          label={label}
          fontSize={16}
          fontFamily={Fonts.PoppinsSemiBold}
          marginLeft={widthDP(10)}
        />
      )}
    </View>
  );
};

export default ChoosenServer;

const styles = StyleSheet.create({
  container: {
    height: widthDP(22),
    width: widthDP(22),
    backgroundColor: COLORS.white,
    borderRadius: 100,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: widthDP(10),
  },
  checkbox: {
    backgroundColor: COLORS.theme,
    borderRadius: 100,
    alignSelf: 'center',
  },
});
