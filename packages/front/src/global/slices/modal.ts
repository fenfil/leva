/* eslint-disable no-restricted-globals */
import { insertUrlParams, removeUrlParams } from '@global/utils/url';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface ModalState {
  modal: string;
  params: any;
}

const initialState: ModalState = {
  modal: null,
  params: {},
};

export const setModal = createAsyncThunk<string, string>(
  'modal/setModal',
  (payload) => {
    if (payload) {
      insertUrlParams([['modal', payload]]);
    } else {
      removeUrlParams(['modal', 'modalParams']);
    }

    return payload;
  },
);

export const setModalWithParams = createAsyncThunk<
{ modal: string; params: any },
{ modal: string; params: any }
>('modal/setModalWithParams', (payload) => {
  insertUrlParams([['modal', payload.modal]]);
  insertUrlParams([['modalParams', JSON.stringify(payload.params)]]);

  return payload;
});

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(setModalWithParams.fulfilled, (state, action) => {
      state.modal = action.payload.modal;
      state.params = action.payload.params;
    });
    builder.addCase(setModal.fulfilled, (state, action) => {
      state.modal = action.payload;
      state.params = {};
    });
  },
});

export const modalReducer = modal.reducer;
