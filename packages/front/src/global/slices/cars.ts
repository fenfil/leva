import { handleError } from '@global/utils/handleError';
import { AnyAction, Reducer, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';

import { api } from '../utils/api';

export interface CleanCar {
  id: number;
  name: string;
  verified: boolean;
}

export type CarState = {
  cars: CleanCar[];
};

export const initialState: CarState = {
  cars: [],
};

export const fetchCars = createAsyncThunk<CleanCar[]>('car/fetchCars', async (params, { dispatch }) => {
  try {
    const res = await api.get<CleanCar[]>('/car');
    return res.data;
  } catch (error) {
    handleError("Can't get cars", error);
    return Promise.reject();
  }
});

export const addCar = createAsyncThunk<any, any>('car/addCar', async (params, { dispatch }) => {
  try {
    await api.post('/car', params);
    toastr.success('Yay', 'New car added!');
  } catch (error) {
    handleError("Can't get cars", error);
    return Promise.reject();
  }
});

const car = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setUser(state, action) {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
      state.cars = payload;
    });
  },
});

export const { setUser } = car.actions;

export const carReducer = car.reducer as Reducer<CarState, AnyAction>;
