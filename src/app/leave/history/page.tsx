'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function LeaveHistory() {
  const leaveRequests = useSelector((state: RootState) => state.leaveRequests?.requests||[]);

  useEffect(() => {
    console.log('Current leave requests:', leaveRequests);
  }, [leaveRequests]);

  return (
    <Layout>
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Leave History</h1>
          <Link href="/leave/request" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            New Leave Request
          </Link>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          {leaveRequests.length === 0 ? (
            <p className="text-center py-4">No leave requests found.</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {leaveRequests.map((leave) => (
                <li key={leave.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        {leave.leaveType}
                      </p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          leave.status === 'approved' ? 'bg-green-100 text-green-800' : 
                          leave.status === 'rejected' ? 'bg-red-100 text-red-800' : 
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {leave.status.charAt(0).toUpperCase() + leave.status.slice(1)}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          From: {leave.startDate}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          To: {leave.endDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Layout>
  );
}