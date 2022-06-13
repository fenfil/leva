import { BP } from '@global/constants/breakpoints';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface DeviceState {
  height: number;
  width: number;
  mobile: boolean;
}

const initialState: DeviceState = {
  height: null,
  width: null,
  mobile: false,
};

const device = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setDimensions(
      state,
      {
        payload,
      }: PayloadAction<{
        height: number;
        width: number;
      }>,
    ) {
      state.width = payload.width;
      state.height = payload.height;
      state.mobile = payload.width < BP.md;
    },
  },
});

export const { setDimensions } = device.actions;

export const deviceReducer = device.reducer;
