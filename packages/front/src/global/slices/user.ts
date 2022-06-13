import { handleError } from '@global/utils/handleError';
import { UserRole } from '@global/utils/UserRole';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { api } from '../utils/api';

export type UserState = {
  name: string;
  role: UserRole;
  isAuth: boolean;
};

export const initialState: UserState = {
  name: null,
  role: UserRole.guest,
  isAuth: false,
};

type FetchUserResponse = UserState;

export const fetchUser = createAsyncThunk<FetchUserResponse, void>('user/fetchUser', async () => {
  try {
    const response = await api.get<FetchUserResponse>('/user');
    return response.data;
  } catch (error) {
    handleError("Can't get user", error);
    return Promise.reject();
  }
});

export const logout = createAsyncThunk<FetchUserResponse>('user/logout', async (params, { dispatch }) => {
  try {
    await api.get<FetchUserResponse>('/auth/logout');
    dispatch(fetchUser());
  } catch (error) {
    handleError("Can't log out", error);
    return Promise.reject();
  }
});

export const login = createAsyncThunk<FetchUserResponse, { name: string; password: string }>(
  'user/login',
  async (params, { dispatch }) => {
    try {
      await api.post<FetchUserResponse>('/auth/login', params);
      dispatch(fetchUser());
    } catch (error) {
      handleError("Can't log in", error);
      return Promise.reject();
    }
  },
);

export const signup = createAsyncThunk<FetchUserResponse, { name: string; password: string; email: string }>(
  'user/signup',
  async (params, { dispatch }) => {
    try {
      await api.post<FetchUserResponse>('/auth/signup', params);
      dispatch(fetchUser());
    } catch (error) {
      handleError("Can't sign up", error);
      return Promise.reject();
    }
  },
);

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      return {
        ...initialState,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
      if (payload.role === 'guest') return initialState;
      return {
        ...state,
        ...payload,
        isAuth: true,
      };
    });
  },
});

export const { setUser } = user.actions;

export const userReducer = user.reducer;
