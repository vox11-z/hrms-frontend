import Layout from '@/components/Layout';
import Link from 'next/link';

const employees = [
  { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'Engineering' },
  { id: 2, name: 'Jane Smith', position: 'HR Manager', department: 'Human Resources' },
  { id: 3, name: 'Mike Johnson', position: 'Sales Representative', department: 'Sales' },
  // Add more sample employees as needed
];

export default function Employees() {
  return (
    <Layout>
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Employees</h1>
          <Link href="/employees/new" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Add Employee
          </Link>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {employees.map((employee) => (
              <li key={employee.id}>
                <Link href={`/employees/${employee.id}`} className="block hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        {employee.name}
                      </p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {employee.department}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          {employee.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}