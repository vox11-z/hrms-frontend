// src/app/time-tracking/clock/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '@/components/Layout';
import { RootState } from '@/store';
import { clockIn, clockOut } from '@/store/slices/timeTrackingSlice';

export default function ClockInOut() {
  const dispatch = useDispatch();
  const currentEntry = useSelector((state: RootState) => state.timeTracking.currentEntry);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClockInOut = () => {
    if (currentEntry) {
      dispatch(clockOut({ clockOut: currentTime.toISOString() }));
    } else {
      dispatch(clockIn({
        id: Date.now().toString(),
        date: currentTime.toISOString().split('T')[0],
        clockIn: currentTime.toISOString(),
      }));
    }
  };

  return (
    <Layout>
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Clock In/Out</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
          <p className="text-lg mb-4">Current time: {currentTime.toLocaleString()}</p>
          <button
            onClick={handleClockInOut}
            className={`px-4 py-2 rounded-md text-white font-medium ${
              currentEntry ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {currentEntry ? 'Clock Out' : 'Clock In'}
          </button>
          <p className="mt-4">
            Status: {currentEntry ? 'Clocked In' : 'Clocked Out'}
          </p>
        </div>
      </div>
    </Layout>
  );
}