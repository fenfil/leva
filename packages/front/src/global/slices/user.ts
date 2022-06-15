import { handleError } from '@global/utils/handleError';
import { UserRole } from '@global/utils/UserRole';
import { AnyAction, Reducer, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { api } from '../utils/api';

export type UserState = {
  name: string;
  role: UserRole;
  isAuth: boolean;
  userFetched: boolean;
};

export const initialState: UserState = {
  name: null,
  role: UserRole.guest,
  isAuth: false,
  userFetched: false,
};

type FetchUserResponse = UserState;

export const fetchUser = createAsyncThunk<FetchUserResponse, void>('user/fetchUser', async () => {
  try {
    const response = await api.get<FetchUserResponse>('/user');
    return response.data;
  } catch (error) {
    handleError('Ошибка', error);
    return Promise.reject();
  }
});

export const logout = createAsyncThunk<FetchUserResponse>('user/logout', async (params, { dispatch }) => {
  try {
    await api.get<FetchUserResponse>('/auth/logout');
  } catch (error) {
    handleError('Ошибка', error);
    return Promise.reject();
  }
});

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
        userFetched: true,
      };
    });
    builder.addCase(logout.fulfilled, (state) => {
      return { ...initialState, userFetched: true };
    });
  },
});

export const { setUser } = user.actions;

export const userReducer = user.reducer as Reducer<UserState, AnyAction>;
