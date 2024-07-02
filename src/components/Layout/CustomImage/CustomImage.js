import {ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';

const CustomImage = ({source, style, resizeMode, tintColor}) => {
  const [isImageLoading, setIsImageLoading] = useState(false);

  return (
    <>
      <FastImage
        onLoadStart={() => setIsImageLoading(true)}
        onLoadEnd={() => setIsImageLoading(false)}
        source={source}
        resizeMode={resizeMode}
        style={style}
        tintColor={tintColor}
      />
      {/* {isImageLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color="#999999"
          size="large"
        />
      )} */}
    </>
  );
};

export default CustomImage;
