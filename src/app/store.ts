import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import storeSlice from './storeSlice';

export const store = configureStore({
  reducer: {
    store : storeSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
