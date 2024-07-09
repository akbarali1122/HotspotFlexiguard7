import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Base_Url} from '../api';

export const requestGet = (url, params, extraHeaders = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(Base_Url + url, {
        params: {...params},
        headers: {
          Accept: 'application/json',
          ...extraHeaders,
        },
      })
      .then(response => {
        // console.log('API', 'requestGet-response.status', response.data);
        resolve(response);
      })
      .catch(error => {
        console.error('API', 'requestGet-error', error);
        reject(error);
      });
  });
};

export const requestPost = (url, data, isFormData, extraHeaders = {}) => {
  const formData = isFormData ? new FormData() : data;

  if (isFormData) {
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        formData.append(key, data[key]);
      }
    }
  }
  return new Promise((resolve, reject) => {
    axios
      .post(Base_Url + url, formData, {
        headers: {
          Accept: 'application/json',
          ...extraHeaders,
        },
      })
      .then(response => {
        //   console.log('API', base_url + url, 'requestPost-response.status', response.data);
        resolve({data: response.data, status: response.status});
      })
      .catch(error => {
        console.error('API', 'requestPost-error', error.status);
        reject(error);
      });
  });
};

export const requestPatch = (url, data, isFormData, extraHeaders = {}) => {
  const formData = isFormData ? new FormData() : data;
  if (isFormData) {
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        formData.append(key, data[key]);
      }
    }
  }
  return new Promise((resolve, reject) => {
    axios
      .patch(Base_Url + url, formData, {
        headers: {
          Accept: 'application/json',
          ...extraHeaders,
        },
      })
      .then(response => {
        console.log(
          'API',
          Base_Url + url,
          'requestPost-response.status',
          response.data,
        );
        resolve({data: response?.data, status: response?.status});
      })
      .catch(error => {
        console.error('API', 'requestPost-error', error);
        reject(error);
      });
  });
};

export const requestFormData = (url, data, extraHeaders = {}) => {
  const formData = new FormData();
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      formData.append(key, data[key]);
    }
  }

  return new Promise((resolve, reject) => {
    axios
      .post(
        Base_Url + url,
        {...data, format: 'json'},
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            ...extraHeaders,
          },
        },
      )
      .then(response => {
        resolve({data: response.data, status: response.status});
      })
      .catch(error => {
        console.error('API', 'requestPost-error', error.status);
        reject(error);
      });
  });
};

axios.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('isAuth');
    const requestConfig = config;
    requestConfig.headers = {
      ...config.headers,
      ...(token && {Authorization: `Bearer ${token}`}),
    };
    // console.log('RESQUEST', config);
    // console.log('RESQUEST', config);
    return requestConfig;
  },
  err => {
    console.error('Error', err);
    return Promise.reject(err);
  },
);
