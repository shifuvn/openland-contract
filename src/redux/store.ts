import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {

  },
});

export type RootState = ReturnType<typeof store.getState>; // A global type to access reducers types
export type AppDispatch = typeof store.dispatch; 