// src/store/slices/timeTrackingSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TimeEntry {
  id: string;
  date: string;
  clockIn: string;
  clockOut: string | null;
}

interface TimeTrackingState {
  entries: TimeEntry[];
  currentEntry: TimeEntry | null;
}

const initialState: TimeTrackingState = {
  entries: [],
  currentEntry: null,
};

const timeTrackingSlice = createSlice({
  name: 'timeTracking',
  initialState,
  reducers: {
    clockIn: (state, action: PayloadAction<{ id: string; date: string; clockIn: string }>) => {
      state.currentEntry = { ...action.payload, clockOut: null };
    },
    clockOut: (state, action: PayloadAction<{ clockOut: string }>) => {
      if (state.currentEntry) {
        const completedEntry = { ...state.currentEntry, clockOut: action.payload.clockOut };
        state.entries.push(completedEntry);
        state.currentEntry = null;
      }
    },
    addEntry: (state, action: PayloadAction<TimeEntry>) => {
      state.entries.push(action.payload);
    },
  },
});

export const { clockIn, clockOut, addEntry } = timeTrackingSlice.actions;
export default timeTrackingSlice.reducer;