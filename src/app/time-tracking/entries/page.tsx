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
