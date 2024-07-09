import {EndPoints} from '../api';
import {requestFormData, requestGet, requestPost} from './axios';

//Auth APIs
export const LoginUser = async payload => {
  try {
    const response = await requestPost(EndPoints.signin, payload, false);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const RegisterRequestPost = async payload => {
  try {
    const response = await requestPost(EndPoints.signup, payload, false);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const OTPRequestPost = async payload => {
  try {
    const response = await requestPost(EndPoints.validateOtp, payload, false);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const ResendOTPRequestPost = async payload => {
  try {
    const response = await requestPost(EndPoints.sendOtp, payload, false);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const ResetPasswordOTPRequestPost = async payload => {
  try {
    const response = await requestPost(
      EndPoints.resetPasswordOtp,
      payload,
      false,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const ResetPasswordOTPVerifyRequestPost = async payload => {
  try {
    const response = await requestPost(
      EndPoints.resetotpverify,
      payload,
      false,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const ResetPasswordRequestPost = async payload => {
  try {
    const response = await requestPost(EndPoints.resetPassword, payload, false);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Edit Profile
export const EditProfileRequestPost = async formData => {
  try {
    const response = await requestFormData(EndPoints.editProfile, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetProfileData = async () => {
  try {
    const response = await requestGet(EndPoints.showProfile, false, false);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const RequestEmailSubscribe = async formData => {
  try {
    const response = await requestFormData(EndPoints.newSubscriber, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get .Ovpn files
export const GetOvpnFile = async formData => {
  try {
    const response = await requestPost(EndPoints.ovpnFile, formData, false);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// ContactUS
export const ContactRequestPost = async payload => {
  try {
    const response = await requestPost(EndPoints.contactUS, payload, false);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//Subscribe
export const SubscribeRequestPost = async payload => {
  try {
    const response = await requestPost(EndPoints.subscription, payload, false);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//Event_Image
export const EventImageRequestPost = async payload => {
  try {
    const response = await requestPost(EndPoints.getImage, payload, false);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//Notification
export const NotificationRequestPost = async payload => {
  try {
    const response = await requestPost(
      EndPoints.newNotification,
      payload,
      false,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
