'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addLeaveRequest } from '@/store/slices/leaveRequestsSlice';


export default function LeaveRequest() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newLeaveRequest = {
      id: Date.now().toString(), // Temporary ID, should be replaced with server-generated ID
      employeeId: 'current-user-id', // Replace with actual user ID from auth state
      ...formData,
      status: 'pending' as const,
    };
    dispatch(addLeaveRequest(newLeaveRequest));
    console.log('Leave request submitted:', newLeaveRequest);
    router.push('/leave/history');
  };

  // ... rest of the component remains the same

}