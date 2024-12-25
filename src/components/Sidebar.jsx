import React from 'react';
import frame9 from '../assets/Frame 9.png';
import DesktopDropdown from './DesktopDropdown';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:flex w-60 bg-white border-r border-gray-200 h-screen flex-col transition-transform duration-300 ease-in-out z-50`}>
        <img src={frame9} alt="Logo" className="h-16 w-40 p-4 pb-1" />
        <DesktopDropdown />

        <ul className="m-0 p-0 list-none">
          <li className="px-4 py-3 cursor-pointer text-sm text-white bg-blue-600 rounded-md mx-4 mb-1 font-semibold hover:bg-blue-800">
            <i className="ri-home-8-line pr-3 text-xl"></i>
            Repositories
          </li>
          <li className="px-4 py-3 cursor-pointer text-sm text-black rounded-md mx-4 mb-1 hover:bg-blue-800 hover:text-white">
            <i className="ri-code-s-slash-fill pr-3 text-xl"></i>
            AI Code Review
          </li>
          <li className="px-4 py-3 cursor-pointer text-sm text-black rounded-md mx-4 mb-1 hover:bg-blue-800 hover:text-white">
            <i className="ri-cloud-line pr-3 text-xl"></i>
            Cloud Security
          </li>
          <li className="px-4 py-3 cursor-pointer text-sm text-black rounded-md mx-4 mb-1 hover:bg-blue-800 hover:text-white">
            <i className="ri-booklet-line pr-3 text-xl"></i>
            How to Use
          </li>
          <li className="px-4 py-3 cursor-pointer text-sm text-black rounded-md mx-4 mb-1 hover:bg-blue-800 hover:text-white">
            <i className="ri-settings-3-line pr-3 text-xl"></i>
            Settings
          </li>
        </ul>

        <div className="mt-auto pb-4">
          <p className="px-4 py-3 m-0 text-sm text-black cursor-pointer">
            <i className="ri-phone-line pr-3 text-xl"></i>Support
          </p>
          <p className="px-4 py-3 m-0 text-sm text-black cursor-pointer">
            <i className="ri-logout-box-r-line pr-3 text-xl"></i>Logout
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
