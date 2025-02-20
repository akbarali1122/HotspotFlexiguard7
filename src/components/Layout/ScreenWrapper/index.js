import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {Images} from '../../../assets/images/pngs';
import CustomImage from '../CustomImage/CustomImage';
import {heightDP, widthDP} from '../../../utils/Responsive';
import {COLORS} from '../../../utils/config';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../CusromText/CustomText';
import Icons from '../CustomIcons/Icons';

const ScreenWrapper = ({
  children,
  scrollEnabled,
  isHeader,
  onPress,
  paddingBottom,
  source,
  title,
  subtitle,
  color1,
  color2,
  color3,
  isHomeScreen,
}) => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={[color1, color2, color3]}
      start={{x: 1, y: 0}}
      end={{x: 1, y: 0.5}}
      style={{
        flex: 1,
        paddingHorizontal: widthDP(20),
      }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={isHomeScreen ? '#164958' : '#0E1E2E'}
      />
      {isHeader && (
        <View style={styles.View1}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Account');
            }}>
            <CustomImage
              source={Images.profile}
              resizeMode="contain"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('Account');
            }}>
            <CustomImage
              source={Images.vip}
              resizeMode="contain"
              style={styles.icon1}
            />
          </TouchableOpacity>
        </View>
      )}
      <KeyboardAwareScrollView
        nestedScrollEnabled={true}
        scrollEnabled={scrollEnabled}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.contentContainerStyle,
          {
            paddingBottom: paddingBottom || '15%',
          },
        ]}>
        {children}
      </KeyboardAwareScrollView>

      {isHomeScreen && (
        <TouchableOpacity style={styles.bottomView} onPress={onPress}>
          <View style={styles.Imageview}>
            <CustomImage source={source} style={styles.vipImage} />
          </View>
          <View>
            <CustomText label={title} color={COLORS.white} fontSize={16} />
            <CustomText label={subtitle} color={COLORS.white} fontSize={10} />
          </View>
          <Icons
            family="AntDesign"
            name="right"
            size={13}
            color={COLORS.white}
            style={styles.rightIcon}
          />
        </TouchableOpacity>
      )}

      {/* <Spacer /> */}
    </LinearGradient>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    backgroundColor: COLORS.navyBlue,
  },
  contentContainerStyle: {
    paddingHorizontal: widthDP(30),
  },
  icon: {
    height: widthDP(40),
    width: widthDP(40),
    alignSelf: 'center',
  },
  icon1: {
    height: widthDP(30),
    width: widthDP(30),
    alignSelf: 'center',
  },
  View1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthDP(30),
    marginTop: heightDP(20),
    marginBottom: heightDP(10),
  },
  bottomView: {
    height: heightDP(80),
    width: '100%',
    backgroundColor: '#259CDA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignSelf: 'center',
    borderRadius: 20,
    marginBottom: heightDP(40),
  },
  vipImage: {
    width: widthDP(25),
    height: heightDP(20),
    backgroundColor: COLORS.black,
  },
  Imageview: {
    width: widthDP(40),
    height: heightDP(30),
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});
