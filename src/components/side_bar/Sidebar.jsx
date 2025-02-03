import React from 'react';
import { LayoutGrid, Users, Settings, LogOut } from 'lucide-react';

function Sidebar() {
  return (
    <div className="w-64 h-screen border-r bg-white">
      {/* Logo */}
      <div className="flex items-center p-4">
        <div className="bg-indigo-600 rounded-lg p-2 mr-2">
          <span className="text-white">Dashboard</span>
        </div>
        <button className="ml-auto">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <div className="px-4 py-2">
        <p className="text-xs font-semibold text-gray-400 mb-4">APPLICATION</p>
        <nav className="space-y-1">
          <a href="#" className="flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
            <LayoutGrid className="w-5 h-5 mr-3" />
            Dashboard
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
            <Users className="w-5 h-5 mr-3" />
            Users
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-gray-600 rounded-lg bg-gray-100">
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </a>
        </nav>
      </div>

      {/* Logout */}
      <div className="absolute bottom-4 px-4 w-64">
        <a href="#" className="flex items-center px-3 py-2 text-red-600 rounded-lg hover:bg-red-50">
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </a>
      </div>
    </div>
  );
}

export default Sidebar;