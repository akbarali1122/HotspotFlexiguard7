import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import ChoosenServer from '../ChoosenServer';
import CustomImage from '../CustomImage/CustomImage';
import CustomText from '../CusromText/CustomText';
import {COLORS} from '../../../utils/config';
import {heightDP, widthDP} from '../../../utils/Responsive';
import {Fonts} from '../../../utils/fonts';

const ServerList = ({
  flagImage,
  label,
  ListIndex,
  isSelected,
  onPress,
  showCheckbox,
  setShowCheckbox,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CustomImage
            source={flagImage}
            resizeMode="cover"
            style={styles.icon}
          />
          <CustomText
            label={label}
            fontFamily={Fonts.PoppinsSemiBold}
            fontSize={18}
            color={COLORS.white}
            marginLeft={widthDP(10)}
          />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            {new Array(4).fill('').map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: widthDP(6),
                    height: heightDP(
                      index === 0
                        ? 11
                        : index === 1
                        ? 15
                        : index === 2
                        ? 18
                        : 20,
                    ),
                    backgroundColor:
                      index === 0 ||
                      index === 1 ||
                      (ListIndex !== 'Japan' && index === 2)
                        ? COLORS.theme
                        : COLORS.white,
                    marginLeft: widthDP(3),
                    borderRadius: 2,
                  }}
                />
              );
            })}
          </View>
          <ChoosenServer
            isSelected={isSelected}
            onPress={onPress}
            setShowCheckbox={setShowCheckbox}
            showCheckbox={showCheckbox}
            ListIndex={ListIndex}
          />
        </View>
      </View>
      {/* <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: COLORS.black,
          marginTop: heightDP(16),
        }}
      /> */}
    </View>
  );
};

export default ServerList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: widthDP(10),
    justifyContent: 'center',
    paddingVertical: heightDP(10),
    borderRadius: 8,
  },
  mainContainer: {
    flexDirection: 'row',
    borderBottomColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    height: widthDP(40),
    width: widthDP(40),
    marginRight: widthDP(10),
    borderRadius: 100,
  },
  icon1: {
    height: widthDP(30),
    width: widthDP(30),
    // alignSelf:'center',
    // marginLeft: 30,
  },
  icon2: {
    height: widthDP(30),
    width: widthDP(30),
    // alignSelf:'center',
    // marginLeft: widthDP(90),
  },
});
