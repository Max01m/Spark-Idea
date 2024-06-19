import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunks for registration and login
export const registration = createAsyncThunk(
  'auth/registration',
  async ({ userName, email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/registration', {
        userName,
        email,
        password,
      });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuth: false,
    status: 'idle',
   avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shalerus.ru%2Fuser-avatar-icon-sign-profile-symbol-royalty-free-svg-ee-22659411&psig=AOvVaw12TLq9pieV5aMLT_oMCE-z&ust=1718702009263000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCbxImm4oYDFQAAAAAdAAAAABAJ',
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.isAuth = false;
      localStorage.removeItem('user');
    },
    setCurrentUser(state, action) {
      state.user = action.payload;
      state.isAuth = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registration.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(registration.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.isAuth = true;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { logout, setCurrentUser } = authSlice.actions;

// Create the Redux store
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

// Restore user from localStorage if available
const user = JSON.parse(localStorage.getItem('user'));
if (user) {
  store.dispatch(setCurrentUser(user));
}

export default store;
