// // store.js
// import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Async thunks for registration and login
// export const registration = createAsyncThunk(
//   'auth/registration',
//   async ({ userName, email, password }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/registration', {
//         userName,
//         email,
//         password,
//       });
//       alert(response.data.message);
//       return response.data;
//     } catch (e) {
//       alert(e.response.data.message);
//       return rejectWithValue(e.response.data.message);
//     }
//   }
// );

// export const login = createAsyncThunk(
//   'auth/login',
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', {
//         email,
//         password,
//       });
//       console.log(response.data); // Logging the response data to the console
//       return response.data;
//     } catch (e) {
//       alert(e.response.data.message);
//       return rejectWithValue(e.response.data.message);
//     }
//   }
// );

// // Auth slice
// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     isAuth: false,
//     status: 'idle',
//     error: null,
//   },
//   reducers: {
//     logout(state) {
//       state.user = null;
//       state.isAuth = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registration.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(registration.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.user = action.payload;
//         state.isAuth = true;
//       })
//       .addCase(registration.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       })
//       .addCase(login.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.user = action.payload;
//         state.isAuth = true;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   },
// });

// export const { logout } = authSlice.actions;

// // Create the Redux store
// const store = configureStore({
//   reducer: {
//     auth: authSlice.reducer,
//   },
// });

// export default store;
