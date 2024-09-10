import Layout from '@/components/Layout';

export default function Dashboard() {
  return (
    <Layout>
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="mt-6">
          <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Welcome to Your HRMS Dashboard
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>Here you can view key information and quick links to important tasks.</p>
              </div>
              <div className="mt-5">
                <div className="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 sm:mt-0 sm:ml-4">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Quick Actions
                      </h3>
                      <div className="mt-2 text-sm text-gray-500">
                        <p>Access frequently used features:</p>
                        <ul className="list-disc pl-5 mt-2">
                          <li>View your leave balance</li>
                          <li>Submit a new leave request</li>
                          <li>Clock in/out</li>
                          <li>View your recent payslips</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}