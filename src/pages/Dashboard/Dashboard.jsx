import React from 'react';
import Sidebar from '../../components/side_bar/Sidebar';
import SettingsTabs from '../../components/settings/SettingsTabs';
import SecuritySettings from '../../components/settings/SecuritySettings';

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-6">Settings</h1>
        <SettingsTabs />
        <div className="mt-6">
          <SecuritySettings />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;