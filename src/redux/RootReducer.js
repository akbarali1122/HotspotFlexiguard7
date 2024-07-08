import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './userSlice/user.Slice';

// Redux: Root Reducer
const RootReducer = combineReducers({
  user: userReducer,
});

// Exports
export default RootReducer;
