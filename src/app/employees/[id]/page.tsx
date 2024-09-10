import Layout from '@/components/Layout';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This is a mock function to simulate fetching employee data
function getEmployeeData(id: string) {
  const employees = [
    { 
      id: '1', 
      name: 'John Doe', 
      position: 'Software Engineer', 
      department: 'Engineering', 
      email: 'john.doe@example.com', 
      phone: '123-456-7890',
      hireDate: '2020-01-15',
      salary: 75000,
      manager: 'Jane Smith',
      address: '123 Main St, Anytown, USA',
      emergencyContact: 'Jane Doe (Wife) - 098-765-4321'
    },
    // Add more employees here...
  ];
  return employees.find(emp => emp.id === id);
}

export default function EmployeeProfile({ params }: { params: { id: string } }) {
  const employee = getEmployeeData(params.id);

  if (!employee) {
    notFound();
  }

  return (
    <Layout>
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">{employee.name}</h1>
          <Link href={`/employees/${params.id}/edit`} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Edit Employee
          </Link>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Employee Information</h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Position</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{employee.position}</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Department</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{employee.department}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{employee.email}</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Phone number</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{employee.phone}</dd>
              </div>
              {/* Add more fields like hireDate, salary, manager, address, etc. if needed */}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  );
}
