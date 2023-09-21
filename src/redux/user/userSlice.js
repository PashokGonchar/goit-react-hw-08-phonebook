import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register, refreshUser } from './operations'

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const rejectReducer = state => {
  state.user = { name: null, email: null };
  state.isLoggedIn = false;
  state.token = null;
};

const fulfilledReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const refreshUserPendingReducer = state => {
  state.isRefreshing = true;
};

const refreshUserFulfilledReducer = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const refreshUserRejectedReducer = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logIn.fulfilled, fulfilledReducer)
      .addCase(logOut.fulfilled, rejectReducer)
      .addCase(register.fulfilled, fulfilledReducer)
      .addCase(register.rejected, rejectReducer)
      .addCase(refreshUser.pending, refreshUserPendingReducer)
      .addCase(refreshUser.fulfilled, refreshUserFulfilledReducer)
      .addCase(refreshUser.rejected, refreshUserRejectedReducer);
  },
});

export const authReducer = authSlice.reducer;
