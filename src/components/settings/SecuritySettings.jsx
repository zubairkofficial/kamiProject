import React from 'react';

function SecuritySettings() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-1">Password Settings</h2>
        <p className="text-gray-500 text-sm mb-4">Update your password and security preferences</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
            />
          </div>
          
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="2fa" 
              className="rounded text-indigo-600 focus:ring-indigo-500" 
            />
            <label htmlFor="2fa" className="ml-2 text-sm text-gray-700">
              Enable Two-Factor Authentication
            </label>
          </div>
          
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
            Update Security Settings
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-1">Login History</h2>
        <p className="text-gray-500 text-sm mb-4">Recent login activities from your account</p>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Chrome on Windows</p>
              <p className="text-sm text-gray-500">New York, US</p>
            </div>
            <span className="text-sm text-gray-500">2 minutes ago</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Safari on MacOS</p>
              <p className="text-sm text-gray-500">San Francisco, US</p>
            </div>
            <span className="text-sm text-gray-500">1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecuritySettings;