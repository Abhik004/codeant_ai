import React from 'react';

const Dropdown = () => {
  const displayName = 'UtkarshDhariyaPanwar';
  const truncatedName = `${displayName.slice(0, 15)}...`;

  return (
    <div className="hidden lg:flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 mx-6 my-4">
      <span className="text-gray-700 text-sm flex-grow">{truncatedName}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
};

export default Dropdown;
