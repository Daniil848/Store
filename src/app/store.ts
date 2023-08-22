import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsSlice from './productsSlice';
import registrationSlice from './registrationSlice';

export const store = configureStore({
  reducer: {
    products : productsSlice,
    registration : registrationSlice,
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
