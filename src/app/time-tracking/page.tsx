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
