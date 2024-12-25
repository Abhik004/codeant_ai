import React from 'react';
import frame9 from '../assets/Frame 9.png';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden">
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      <div className="fixed top-0 left-0 right-0 bg-white z-50 max-h-screen overflow-y-auto">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
                <img src={frame9} alt="CodeAnt AI" className="h-15 w-25 p-4 pb-1" />
            </div>
            <button onClick={onClose} className="text-gray-500">
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>
          <div className="py-2.5 px-3 bg-gray-50 rounded-md flex items-center justify-between">
            <span className="text-sm text-gray-700">UtkarshDhariyaPanwar</span>
            <i className="ri-arrow-down-s-line text-gray-500"></i>
          </div>
        </div>

        <div className="py-2">
          <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 bg-blue-50">
            <i className="ri-home-8-line mr-3 text-lg"></i>
            Repositories
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
            <i className="ri-code-s-slash-fill mr-3 text-lg"></i>
            AI Code Review
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
            <i className="ri-cloud-line mr-3 text-lg"></i>
            Cloud Security
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
            <i className="ri-booklet-line mr-3 text-lg"></i>
            How to Use
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
            <i className="ri-settings-3-line mr-3 text-lg"></i>
            Settings
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
            <i className="ri-phone-line mr-3 text-lg"></i>
            Support
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
            <i className="ri-logout-box-r-line mr-3 text-lg"></i>
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;