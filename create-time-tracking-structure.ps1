# PowerShell script to create time tracking folder structure and files

# Set the base path (adjust this if your src/app folder is located elsewhere)
$basePath = ".\src\app"

# Create time-tracking folder and files
New-Item -Path "$basePath\time-tracking" -ItemType Directory -Force
New-Item -Path "$basePath\time-tracking\page.tsx" -ItemType File -Force
New-Item -Path "$basePath\time-tracking\clock" -ItemType Directory -Force
New-Item -Path "$basePath\time-tracking\clock\page.tsx" -ItemType File -Force
New-Item -Path "$basePath\time-tracking\entries" -ItemType Directory -Force
New-Item -Path "$basePath\time-tracking\entries\page.tsx" -ItemType File -Force

# Content for time-tracking/page.tsx
$timeTrackingIndexContent = @"
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function TimeTrackingIndex() {
  return (
    <Layout>
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Time Tracking</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/time-tracking/clock" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Clock In/Out</h5>
            <p className="font-normal text-gray-700">Record your work hours by clocking in and out.</p>
          </Link>
          <Link href="/time-tracking/entries" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Time Entries</h5>
            <p className="font-normal text-gray-700">View and manage your time tracking entries.</p>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
"@

# Content for time-tracking/clock/page.tsx
$clockInOutContent = @"
'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';

export default function ClockInOut() {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClockInOut = () => {
    // Here you would typically call an API to record the clock in/out
    setIsClockedIn(!isClockedIn);
    console.log(isClockedIn ? 'Clocked out' : 'Clocked in', 'at', currentTime.toLocaleString());
  };

  return (
    <Layout>
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Clock In/Out</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
          <p className="text-lg mb-4">Current time: {currentTime.toLocaleString()}</p>
          <button
            onClick={handleClockInOut}
            className={\`px-4 py-2 rounded-md text-white font-medium \${
              isClockedIn ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
            }\`}
          >
            {isClockedIn ? 'Clock Out' : 'Clock In'}
          </button>
          <p className="mt-4">
            Status: {isClockedIn ? 'Clocked In' : 'Clocked Out'}
          </p>
        </div>
      </div>
    </Layout>
  );
}
"@

# Content for time-tracking/entries/page.tsx
$timeEntriesContent = @"
import Layout from '@/components/Layout';

// Mock data for time entries
const timeEntries = [
  { id: 1, date: '2023-09-01', clockIn: '09:00 AM', clockOut: '05:00 PM', totalHours: 8 },
  { id: 2, date: '2023-09-02', clockIn: '08:30 AM', clockOut: '04:30 PM', totalHours: 8 },
  { id: 3, date: '2023-09-03', clockIn: '09:15 AM', clockOut: '05:45 PM', totalHours: 8.5 },
];

export default function TimeEntries() {
  return (
    <Layout>
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Time Entries</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clock In</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clock Out</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Hours</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {timeEntries.map((entry) => (
                <tr key={entry.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.clockIn}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.clockOut}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.totalHours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
"@

# Write content to files
Set-Content -Path "$basePath\time-tracking\page.tsx" -Value $timeTrackingIndexContent
Set-Content -Path "$basePath\time-tracking\clock\page.tsx" -Value $clockInOutContent
Set-Content -Path "$basePath\time-tracking\entries\page.tsx" -Value $timeEntriesContent

Write-Host "Time tracking folder structure and files have been created successfully."