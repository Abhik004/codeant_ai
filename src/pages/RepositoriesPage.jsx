import React, { useState } from 'react';
import frame9 from '../assets/Frame 9.png';
import MobileMenu from '../components/MobileMenu';
import Sidebar from '../components/Sidebar';
import Repository from '../components/Repository';

const RepositoriesPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const repoData = [
    { name: 'design-system', type: 'Public', language: 'React', size: '7320 KB', updated: '1 day' },
    { name: 'codeant-ci-app', type: 'Private', language: 'JavaScript', size: '5871 KB', updated: '2 days' },
    { name: 'analytics-dashboard', type: 'Private', language: 'Python', size: '4521 KB', updated: '5 days' },
    { name: 'mobile-app', type: 'Public', language: 'Swift', size: '3096 KB', updated: '3 days' },
    { name: 'e-commerce-platform', type: 'Private', language: 'Java', size: '6210 KB', updated: '6 days' },
    { name: 'blog-website', type: 'Public', language: 'HTML/CSS', size: '1876 KB', updated: '4 days' },
    { name: 'social-network', type: 'Private', language: 'PHP', size: '5432 KB', updated: '7 days' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      <div className="flex-1 lg:ml-60">
        <div className="p-4 lg:p-6 pb-4">
          <div className="flex lg:hidden items-center justify-between mb-4">
            <img src={frame9} alt="Logo" className="h-8 w-auto" />
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-gray-600"
            >
              <i className="ri-menu-line text-xl"></i>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:mb-6">
            <div className="space-y-2 w-full">
              <h3 className="m-0 text-lg lg:text-xl text-gray-900 font-semibold">Repositories</h3>
              <span className="text-sm text-gray-500 block">33 total repositories</span>
            </div>

            <div className="hidden lg:flex items-start gap-4 min-w-[400px]">
                <button className="w-[180px] px-4 py-2 rounded-md text-sm font-normal bg-white text-gray-600 border border-gray-200 flex items-center gap-2 justify-center">
                    <i className="ri-refresh-line text-xl"></i>
                    Refresh All
                </button>
                <button className="w-[180px] px-4 py-2 rounded-md text-sm font-normal bg-blue-600 text-white border-0 flex items-center gap-2 justify-center">
                    <i className="ri-add-line text-xl"></i>
                    Add Repository
                </button>
              </div>
          </div>

          <div className="flex lg:hidden items-center gap-2 mb-4">
            <button className="flex-1 px-4 py-2 rounded-md text-sm font-normal bg-white text-gray-600 border border-gray-200 flex items-center justify-center gap-2">
              <i className="ri-refresh-line text-xl"></i>
              Refresh All
            </button>
            <button className="flex-1 px-4 py-2 rounded-md text-sm font-normal bg-blue-600 text-white border-0 flex items-center justify-center gap-2">
              <i className="ri-add-line text-xl"></i>
              Add Repository
            </button>
          </div>

          <div className="relative w-full">
            <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            <input
              type="text"
              placeholder="Search Repositories"
              className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md text-sm text-gray-600 bg-white outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="lg:mt-2">
            {repoData.map((repo, index) => (
              <Repository key={index} {...repo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositoriesPage;