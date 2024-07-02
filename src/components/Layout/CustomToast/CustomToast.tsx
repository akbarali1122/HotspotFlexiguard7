import React from 'react';
import {Platform} from 'react-native';
import Toast, {
  BaseToast,
  ErrorToast,
  InfoToast,
} from 'react-native-toast-message';

// Define the types for your toastConfig
type ToastConfig = {
  [key: string]: React.FC<any>;
};

/*
  1. Create the config
*/
export const toastConfig: ToastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: ({text1Style, text2Style, ...props}) => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: '#2fa345',
        borderLeftColor: '#2fa345',
        marginTop: Platform.OS == 'ios' ? 10 : -30,
        width: '90%',
      }}
      text1Style={{
        fontSize: 15,
        color: 'white',
      }}
      text2Style={{
        fontSize: 12,
        color: 'white',
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: ({text1Style, text2Style, ...props}) => (
    <ErrorToast
      {...props}
      style={{
        backgroundColor: '#E83B2E',
        borderLeftColor: '#E83B2E',
        marginTop: Platform.OS == 'ios' ? 10 : -30,
        width: '90%',
      }}
      text1Style={{
        fontSize: 15,
        color: 'white',
      }}
      text2Style={{
        fontSize: 12,
        color: 'white',
      }}
    />
  ),
  /*
    Overwrite 'info' type,
    by modifying the existing `InfoToast` component
  */
  info: ({text1Style, text2Style, ...props}) => (
    <InfoToast
      {...props}
      style={{
        backgroundColor: '#3659E3',
        borderLeftColor: '#3659E3',
        marginTop: Platform.OS == 'ios' ? 10 : -30,
        width: '90%',
      }}
      text1Style={{
        fontSize: 15,
        color: 'white',
      }}
      text2Style={{
        fontSize: 12,
        color: 'white',
      }}
    />
  ),
};

export const showToast = (
  type: string,
  heading: string,
  discription: string,
) => {
  let message = discription;

  Toast.show({
    type: type,
    text1: heading,
    text2: message,
  });
};
