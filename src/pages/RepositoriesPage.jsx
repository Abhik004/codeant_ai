import React from 'react';
import Sidebar from './Sidebar';
import Repository from './Repository';

const RepositoriesPage = () => {
  const repoData = [
    { name: 'design-system', type: 'Public', language: 'React', size: '7320 KB', updated: '1 day' },
    { name: 'codeant-ci-app', type: 'Private', language: 'JavaScript', size: '5871 KB', updated: '2 days' },
    { name: 'analytics-dashboard', type: 'Private', language: 'Python', size: '4521 KB', updated: '5 days' },
    { name: 'mobile-app', type: 'Public', language: 'Swift', size: '3096 KB', updated: '3 days' },
    { name: 'e-commerce-platform', type: 'Private', language: 'Java', size: '6210 KB', updated: '6 days' },
    { name: 'blog-website', type: 'Public', language: 'HTML/CSS', size: '1876 KB', updated: '4 days' },
    { name: 'social-network', type: 'Private', language: 'PHP', size: '5432 KB', updated: '7 days' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-60">
        <div className="p-6 pb-4">
          <div className="flex justify-between mb-6">
            <div className="space-y-2">
              <h3 className="m-0 text-xl text-gray-900 font-semibold">Repositories</h3>
              <span className="text-sm text-gray-500 block">33 total repositories</span>
              <div className="relative w-full">
                <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                <input
                  type="text"
                  placeholder="Search Repositories"
                  className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md text-sm text-gray-600 bg-white font-inter font-normal text-lg leading-5"
                />
              </div>
            </div>
            <div className="flex items-start gap-4">
              <button className="px-4 py-2 rounded-md text-sm font-normal bg-white text-gray-600 border border-gray-200 flex items-center gap-2">
                <i className="ri-refresh-line text-xl"></i>
                Refresh All
              </button>
              <button className="px-4 py-2 rounded-md text-sm font-normal bg-blue-600 text-white border-0 flex items-center gap-2">
                <i className="ri-add-line pr-1 text-xl"></i>Add Repository
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white border-t border-gray-200">
          {repoData.map((repo, index) => (
            <Repository key={index} {...repo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepositoriesPage;
