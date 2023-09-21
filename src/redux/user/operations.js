import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post('users/signup', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post('users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return (
        thunkApi.rejectWithValue(error.message),
        alert('There is no such user in the system')
      );
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await axios.post('users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkApi.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
