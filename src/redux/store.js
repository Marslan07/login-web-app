import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from './Slices/usersSlice';
import authSlice from 'redux/Slices/AuthSlice';

const combinedReducer = combineReducers({
  user:userSlice,
  auth: authSlice,
});

export const LOGOUT_ACTION = "logout";

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_ACTION) {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default configureStore({
  reducer: combinedReducer,
});
