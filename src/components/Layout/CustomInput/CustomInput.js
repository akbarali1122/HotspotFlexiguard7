import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomText from '../CusromText/CustomText';
import {heightDP, widthDP} from '../../../utils/Responsive';
import Icons from '../CustomIcons/Icons';
import CustomButton from '../CustomButton/CustomButton';
import {Fonts} from '../../../utils/fonts';
import {COLORS} from '../../../utils/config';

const CustomInput = ({
  placeholder,
  inputStyle,
  placeholderTextColor,
  onChangeText,
  value,
  keyboardType,
  secureTextEntry,
  marginRight,
  marginLeft,
  withLabel,
  borderColor,
  labelStyle,
  backgroundColor,
  borderRadius,
  height,
  paddingHorizontal,
  searchIcon,
  borderWidth,
  alignSelf,
  multiline,
  textAlignVertical,
  marginTop,
  marginBottom,
  maxLength,
  onPress,
  flexDirection,
  alignItems,
  paddingVertical,
  i_Iocn,
  errorMessage,
  editable,
  inputTextColor,
  searchSize,
  searchColor,
  calendarIcon,
  onCalendar,
  showTip,
  setTip,
  reference,
  width,
  autoCapitalize,
  label,
  labelColor,
  textStyle,
  mainStyle,
  onFocus,
  onBlur,
  autoFocus,
  customData,
  isRightButton,
  title,
  onSubscribe,
}) => {
  const [hidePass, setHidePass] = useState(secureTextEntry);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      disabled={!onPress}
      style={[styles.main, mainStyle]}>
      {withLabel && (
        <CustomText
          textStyle={labelStyle}
          fontSize={14}
          fontFamily={Fonts.PoppinsRegular}
          color={COLORS.white}
          label={withLabel}
          marginTop={heightDP(16)}
          marginBottom={heightDP(12)}
          marginLeft={widthDP(22)}
        />
      )}
      {label && (
        <CustomText
          textAlign={'center'}
          label={label}
          color={labelColor || 'red'}
          fontSize={12}
          container={{
            backgroundColor: 'white',
            alignSelf: 'flex-start',
            zIndex: 1000,
            marginBottom: heightDP(-8),
            marginLeft: widthDP(10),
            paddingHorizontal: widthDP(8),
          }}
        />
      )}

      <View
        style={{
          flexDirection: flexDirection || 'row',
          alignItems: alignItems || 'center',
          paddingVertical: paddingVertical || heightDP(10),
          borderWidth: borderWidth || 1,
          borderColor: borderColor || '#F4F4F4',
          backgroundColor: backgroundColor || '#000000',
          borderRadius: borderRadius || 20,
          height: heightDP(height || 55),
          paddingHorizontal: paddingHorizontal || 15,
          width: width || '89%',
          alignSelf: alignSelf || 'center',
          marginTop: marginTop,
          marginBottom: marginBottom,
          elevation: 3,
        }}>
        {searchIcon && (
          <Icons
            style={{marginRight: widthDP(10)}}
            family="Fontisto"
            name="search"
            size={searchSize}
            color={searchColor}
          />
        )}

        <TextInput
          autoFocus={autoFocus || false}
          style={[
            {
              width:
                !secureTextEntry && i_Iocn
                  ? '90%'
                  : searchIcon
                  ? '92%'
                  : i_Iocn
                  ? '80%'
                  : secureTextEntry
                  ? '87%'
                  : '100%',
              height: '100%',
              color: inputTextColor || '#7E7E7E',
              padding: 0,
              textAlignVertical: textAlignVertical,
              fontSize: widthDP(isRightButton ? 14 : 18),
            },
            inputStyle,
          ]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={hidePass}
          autoCapitalize={autoCapitalize}
          marginRight={marginRight}
          marginLeft={marginLeft}
          placeholderTextColor={placeholderTextColor || '#ADADAD'}
          value={value}
          multiline={multiline}
          editable={editable}
          maxLength={maxLength}
          ref={reference}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        {isRightButton && (
          <CustomButton
            title={title}
            width={'50%'}
            borderRadius={10}
            color={'black'}
            onPress={onSubscribe}
            fontFamily={Fonts.PoppinsMedium}
            fontSize={13}
            marginRight={'50%'}
          />
        )}

        <View style={styles.iconContainer}>
          {calendarIcon && (
            <Icons
              onPress={onCalendar}
              family="Feather"
              name={'calendar'}
              color={'red'}
              size={18}
              style={{right: widthDP(30)}}
            />
          )}

          {secureTextEntry && (
            <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
              <Icons
                family="Ionicons"
                name={hidePass ? 'eye-off-outline' : 'eye-outline'}
                color={'#ADADAD'}
                size={18}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {errorMessage?.length > 1 ? (
        <View style={{width: '90%', alignSelf: 'center'}}>
          <CustomText
            label={errorMessage}
            color={'red'}
            fontFamily={Fonts.PoppinsRegular}
            marginTop={heightDP(5)}
            textStyle={textStyle}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  main: {
    width: '100%',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: widthDP(15),
  },
});
