import { combineReducers, configureStore, createReducer } from '@reduxjs/toolkit';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import { carReducer } from '../global/slices/cars';
import { deviceReducer } from '../global/slices/device';
import { modalReducer } from '../global/slices/modal';
import { userReducer } from '../global/slices/user';

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  toastr: toastrReducer,
  device: deviceReducer,
  car: carReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useTypedDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useTypedSelector = <TSelected>(
  selector: (state: RootState) => TSelected,
  eqFunc: (l: TSelected, r: TSelected) => boolean = shallowEqual,
) => useSelector(selector, eqFunc);

export const initializeStore = () => store;
