// userReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {},
  isAuth: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Вы можете добавить действия (actions) здесь
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
      state.isAuth = true;
    },
    logout(state) {
      state.currentUser = {};
      state.isAuth = false;
    },
  },
});

export const { setCurrentUser, logout } = userSlice.actions;
export default userSlice.reducer;
