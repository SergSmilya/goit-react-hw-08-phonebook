import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, _) => {})
      .addCase(register.fulfilled, (state, action) => {})
      .addCase(register.rejected, (state, action) => {})

      .addCase(logIn.pending, (state, _) => {})
      .addCase(logIn.fulfilled, (state, { payload: { user, token } }) => ({
        ...state,
        user,
        token,
        isLoggedIn: true,
      }))
      .addCase(logIn.rejected, (state, action) => {})

      .addCase(logOut.pending, (state, _) => {})
      .addCase(logOut.fulfilled, () => initialState)
      .addCase(logOut.rejected, (state, action) => {})

      .addCase(refreshUser.pending, (state, _) => {})
      .addCase(refreshUser.fulfilled, (state, action) => ({
        ...state,
        user: action.payload,
      }))
      .addCase(refreshUser.rejected, (state, action) => {});
  },
});

export const authReducer = authSlice.reducer;
