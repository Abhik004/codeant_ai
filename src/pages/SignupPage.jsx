import React, { useState } from 'react';
import frame9 from '../assets/Frame 9.png';
import sidebarnavigation from '../assets/Sidebar navigation.png';

const SignupPage = () => {
  const [selectedMode, setSelectedMode] = useState('saas');

  return (
    <div className="flex min-h-screen px-4">
      <div className="hidden lg:flex w-1/2 bg-white items-center justify-center">
        <img src={sidebarnavigation} alt="Sidebar Navigation" className="max-w-full h-auto" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="max-w-md w-full bg-white shadow-md rounded-lg border border-gray-200 py-8 px-6">
          <div className="text-center flex flex-col items-center pb-6">
            <img src={frame9} alt="Logo" className="h-16 w-40 p-4 pb-1" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome to CodeAnt AI</h2>
          </div>

          <div className="inline-flex w-full rounded-lg bg-gray-100 p-1 mt-4">
            <button
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                selectedMode === 'saas'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setSelectedMode('saas')}
            >
              SAAS
            </button>
            <button
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                selectedMode === 'selfhosted'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setSelectedMode('selfhosted')}
            >
              Self Hosted
            </button>
          </div>

          <div className="border-t border-gray-200 my-6 mb-8"></div>

          <div className="space-y-4 h-[220px] flex flex-col justify-center">
            {selectedMode === 'saas' ? (
              <>
                <button className="w-full px-4 py-3 border border-gray-300 rounded-md flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
                    alt="GitHub"
                    className="h-6 w-6"
                  />
                  Sign in with GitHub
                </button>
                <button className="w-full px-4 py-3 border border-gray-300 rounded-md flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50">
                  <img
                    src="https://static-00.iconduck.com/assets.00/bitbucket-color-icon-512x462-1yq1vw77.png"
                    alt="Bitbucket"
                    className="h-6 w-6"
                  />
                  Sign in with Bitbucket
                </button>
                <button className="w-full px-4 py-3 border border-gray-300 rounded-md flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50">
                  <img
                    src="https://static-00.iconduck.com/assets.00/azure-devops-color-icon-2048x2048-140zbjrd.png"
                    alt="Azure DevOps"
                    className="h-6 w-6"
                  />
                  Sign in with Azure DevOps
                </button>
                <button className="w-full px-4 py-3 border border-gray-300 rounded-md flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png"
                    alt="GitLab"
                    className="h-6 w-6"
                  />
                  Sign in with GitLab
                </button>
              </>
            ) : (
              <>
                <button className="w-full px-4 py-3 border border-gray-300 rounded-md flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png"
                    alt="GitLab"
                    className="h-6 w-6"
                  />
                  Self Hosted GitLab
                </button>
                <button className="w-full px-4 py-3 border border-gray-300 rounded-md flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50">
                  <i className="ri-key-fill text-xl"></i>
                  Sign in with SSO
                </button>
              </>
            )}
          </div>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6 max-w-md px-6">
          By signing up you agree to the{' '}
          <a href="#" className="font-semibold text-black">
            Privacy Policy
        </a>
          .
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
