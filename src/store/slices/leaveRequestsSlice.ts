import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LeaveRequest {
  id: string;
  employeeId: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface LeaveRequestsState {
  requests: LeaveRequest[];
}

const initialState: LeaveRequestsState = {
  requests: [],
};

const leaveRequestsSlice = createSlice({
  name: 'leaveRequests',
  initialState,
  reducers: {
    addLeaveRequest: (state, action: PayloadAction<LeaveRequest>) => {
      state.requests.push(action.payload);
    },
  },
});

export const { addLeaveRequest } = leaveRequestsSlice.actions;
export default leaveRequestsSlice.reducer;