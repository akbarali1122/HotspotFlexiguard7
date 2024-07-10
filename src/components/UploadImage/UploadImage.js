import React, {useState} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Text,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {openCamera, openPicker} from 'react-native-image-crop-picker';
import {Images} from '../../assets/Images';

const UploadPhoto = props => {
  // console.log('props=======', props?.isVideo);
  const [image, setImage] = useState('');
  const [imageModal, setImageModal] = useState(false);

  const videoOption = {
    mediaType: 'video',
  };

  const takePhotoFromCamera = () => {
    try {
      const options = {
        mediaType: 'photo',
        quality: 1,
        cropping: true,
        compressImageQuality: 0.8,
        compressImageMaxHight: 1280,
        compressImageMaxWidth: 1280,
        forceJpg: true,
        ...props.options,
      };
      setImageModal(false);
      setTimeout(async () => {
        const result = await openCamera(props?.isVideo ? videoOption : options);
        if (result) {
          setImage(result);
          props.handleChange(result);
        }
      }, 500);
    } catch (error) {
      console.log('takePhotoFromCamera error', error);
    }
  };

  const takePhotoFromLibrary = async () => {
    try {
      const options = {
        mediaType: 'photo',
        cropping: true,
        quality: 0.8,
        compressImageQuality: 0.8,
        compressImageMaxHight: 1280,
        compressImageMaxWidth: 1280,
        forceJpg: true,
        ...props.options,
      };
      setImageModal(false);
      setTimeout(async () => {
        const result = await openPicker(props?.isVideo ? videoOption : options);
        if (result) {
          setImage(result);
          props.handleChange(result);
        }
      }, 1000);
    } catch (error) {
      console.log('takePhotoFromLibrary error', error);
    }
  };
  const ModalIcons = ({source, title, onPress}) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={source}
            resizeMode="contain"
            style={{height: 60, width: 70}}
          />
        </View>
        <Text style={styles.txt}>{title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={!props.renderButton && styles.container}>
      {!props.renderButton ? (
        <>
          <View style={props.imageContainer}>
            <Image
              source={
                image
                  ? {uri: image?.uri}
                  : props.image
                  ? {uri: props.image}
                  : props.placeholder || {
                      uri: 'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png',
                    }
              }
              style={styles.image}
            />
          </View>
          {!props.disabled && (
            <TouchableOpacity
              activeOpacity={0.6}
              style={[styles.iconStyle, props.iconStyle]}
              onPress={() => setImageModal(true)}>
              <Entypo
                name="camera"
                color={props.iconColor || 'black'}
                size={17}
              />
            </TouchableOpacity>
          )}
        </>
      ) : (
        props.renderButton(() => setImageModal(true))
      )}
      <Modal transparent={true} visible={imageModal} animationType="slide">
        <TouchableOpacity
          style={styles.headModalContainer}
          onPress={() => setImageModal(false)}
          activeOpacity={0.0}>
          <View style={styles.modalContainer}>
            <Text style={styles.headertxt}>Choose Picture From</Text>
            <View style={styles.modalIconContainer}>
              <ModalIcons
                source={Images.GalleryImage}
                title="Gallery"
                onPress={takePhotoFromLibrary}
              />
              <ModalIcons
                source={Images.CameraImage}
                title="Camera"
                onPress={takePhotoFromCamera}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  iconStyle: {
    position: 'absolute',
    bottom: 15,
    right: 5,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 5,
  },
  container: {
    alignSelf: 'center',
  },
  headModalContainer: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.8,
  },
  modalContainer: {
    height: '26%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#353A40',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: '5%',
    justifyContent: 'space-between',
  },

  modalIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  txt: {
    fontSize: 15,
    color: '#BDBDBD',
    fontWeight: '500',
    textAlign: 'center',
  },
  headertxt: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
  },
});
