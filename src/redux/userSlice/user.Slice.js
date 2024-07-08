import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loginData: {},
  loading: false,
  autoAccessServer: '',
  seletedServer: {},
  checkVPNConnect: '',
  timerRunning: false,
  timerValue: 0,
  downloadSpeed: '',
  uploadSpeed: '',
  vpnServers: [],
  totalDays: '',
  daysLeft: '',
  priceDiscrition: '',
  FCMToken: '',
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoginData: (state, action) => {
      state.loginData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAutoAccessServer: (state, action) => {
      state.autoAccessServer = action.payload;
    },
    setSeletedServer: (state, action) => {
      state.seletedServer = action.payload;
    },
    setCheckVPNConnect: (state, action) => {
      state.checkVPNConnect = action.payload;
    },
    setDownLoadSpeed: (state, action) => {
      state.downloadSpeed = action.payload;
    },
    setUpLoadSpeed: (state, action) => {
      state.uploadSpeed = action.payload;
    },
    startTimer: state => {
      state.timerRunning = true;
    },
    stopTimer: state => {
      state.timerRunning = false;
      state.timerValue = 0;
    },
    incrementTimer: state => {
      state.timerValue += 1;
    },
    setVpnServers: (state, action) => {
      state.vpnServers = action.payload;
    },
    setTotalDays: (state, action) => {
      state.totalDays = action.payload;
    },
    setDaysLeft: (state, action) => {
      state.daysLeft = action.payload;
    },
    setPriceDiscrition: (state, action) => {
      state.priceDiscrition = action.payload;
    },
    setFCMToken: (state, action) => {
      state.FCMToken = action.payload;
    },
  },
});

export const {
  setLoginData,
  setLoading,
  setAutoAccessServer,
  setSeletedServer,
  setCheckVPNConnect,
  setDownLoadSpeed,
  setUpLoadSpeed,
  startTimer,
  stopTimer,
  incrementTimer,
  setVpnServers,
  setTotalDays,
  setDaysLeft,
  setPriceDiscrition,
  setFCMToken,
  downloadSpeed,
  uploadSpeed,
} = user.actions;

export default user.reducer;
