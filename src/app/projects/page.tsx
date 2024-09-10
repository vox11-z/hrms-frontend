import Layout from '@/components/Layout';
import Link from 'next/link';

const projects = [
  { id: 1, name: 'Website Redesign', status: 'In Progress' },
  { id: 2, name: 'Mobile App Development', status: 'Planning' },
  { id: 3, name: 'CRM Integration', status: 'Completed' },
  // Add more sample projects as needed
];

export default function Projects() {
  return (
    <Layout>
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            New Project
          </button>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {projects.map((project) => (
              <li key={project.id}>
                <Link href={`/projects/${project.id}`} className="block hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        {project.name}
                      </p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {project.status}
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