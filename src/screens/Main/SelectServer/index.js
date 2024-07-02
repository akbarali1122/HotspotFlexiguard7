import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../../utils/config';
import {heightDP, widthDP} from '../../../utils/Responsive';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../../components/Layout/CustomHeader';
import CustomInput from '../../../components/Layout/CustomInput/CustomInput';
import ServerList from '../../../components/Layout/ServerCard';
import {Images} from '../../../assets/images/pngs';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomText from '../../../components/Layout/CusromText/CustomText';
import {Fonts} from '../../../utils/fonts';
import LinearGradient from 'react-native-linear-gradient';

const SelectServer = () => {
  const [selectedServer, setSelectedServer] = useState(null);
  const navigation = useNavigation();

  const countryArray = [
    {
      id: 1,
      title: 'Server 1',
      flag: Images.ball,
    },
    {
      id: 2,
      title: 'Server 2',
      flag: Images.ball,
    },
    {
      id: 3,
      title: 'Server 3',
      flag: Images.ball,
    },
  ];

  const handleSelectServer = server => {
    setSelectedServer(server.title);
    navigation.navigate('Home', {selectedServer: server.title});
  };

  return (
    <LinearGradient
      colors={['#0E1E2E', '#0E1E2E', '#259CDA']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0}}
      style={{
        flex: 1,
        paddingHorizontal: widthDP(30),
      }}>
      <CustomHeader title={'Select Location'} />
      <CustomText
        label={'Select Server'}
        fontSize={24}
        color={COLORS.white}
        fontFamily={Fonts.PoppinsMedium}
        marginTop={heightDP(40)}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginTop: heightDP(20), paddingBottom: '20%'}}
        nestedScrollEnabled={true}
        data={countryArray}
        keyExtractor={(item, index) => index?.toString()}
        renderItem={({item, index}) => {
          const isCheck = selectedServer === item.title;

          return (
            <View style={{marginVertical: heightDP(15)}}>
              <ServerList
                flagImage={item.flag}
                label={item.title}
                ListIndex={item.title}
                isSelected={isCheck}
                onPress={() => handleSelectServer(item)}
              />
            </View>
          );
        }}
      />
    </LinearGradient>
  );
};

export default SelectServer;

const styles = StyleSheet.create({});
