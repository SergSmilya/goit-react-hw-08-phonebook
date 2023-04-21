import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';
import { initialStateAuth } from './authInitialState';

const handlePending = (state, _) => ({ ...state, isLoading: true });
const handleFulfilled = (state, { payload: { user, token } }) => ({
  ...state,
  user,
  token,
  isLoggedIn: true,
  isLoading: false,
});
const handleRejected = (state, { payload }) => ({
  ...state,
  isLoading: false,
  error: payload,
});

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleFulfilled)

      .addCase(logIn.fulfilled, handleFulfilled)

      .addCase(logOut.fulfilled, () => initialStateAuth)

      .addCase(refreshUser.fulfilled, (state, { payload }) => ({
        ...state,
        user: payload,
        isLoggedIn: true,
        isRefreshing: true,
        isLoading: false,
      }))

      .addMatcher(
        isAnyOf(
          register.pending,
          logIn.pending,
          logOut.pending,
          refreshUser.pending
        ),
        handlePending
      )

      .addMatcher(
        isAnyOf(
          register.rejected,
          logIn.rejected,
          logOut.rejected,
          refreshUser.rejected
        ),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
