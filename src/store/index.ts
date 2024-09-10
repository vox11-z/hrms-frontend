// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import timeTrackingReducer from './slices/timeTrackingSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    timeTracking: timeTrackingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;