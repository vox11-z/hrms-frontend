import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';  // Import the reducer directly
import timeTrackingReducer from './slices/timeTrackingSlice';  // Import the reducer directly
import leaveRequestsReducer from './slices/leaveRequestsSlice';  // Import the reducer directly

export const store = configureStore({
  reducer: {
    auth: authReducer,  // Use the imported reducer
    timeTracking: timeTrackingReducer,  // Use the imported reducer
    leaveRequests: leaveRequestsReducer,  // Use the imported reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
