import React from 'react';
import DonationStatsWidget from '../components/dashboard/DonationStatsWidget';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 mt-1">Manage your account, donations, and projects.</p>
      </div>
      
      <DonationStatsWidget />
    </div>
  );
};

export default Dashboard;
