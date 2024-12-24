import React from 'react';

const Repository = ({ name, type, language, size, updated }) => {
  return (
    <div className="bg-white py-6 px-8 flex flex-col border-b border-gray-200 hover:bg-gray-100">
      <div className="flex items-center gap-3 mb-2">
        <h4 className="m-0 text-base text-gray-900 font-medium">{name}</h4>
        <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-blue-50 text-blue-600 border border-blue-200">
          {type}
        </span>
      </div>
      <div className="text-sm text-black flex gap-6">
        <span className="flex items-center gap-1">
          {language}
          <span className="w-2 h-2 ml-1 bg-blue-600 rounded-full"></span>
        </span>
        <span>
        <i class="ri-database-2-line pr-1"></i>
        {size}</span>
        <span>Updated {updated} ago</span>
      </div>
    </div>
  );
};

export default Repository;
