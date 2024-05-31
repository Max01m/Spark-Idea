import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import fileReducer from './fileReducer';

const rootReducer = {
  user: userReducer,
  file: fileReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
