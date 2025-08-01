'use client';

import { useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import Link from 'next/link';

export default function AdminPage() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [appointments] = useState([
    { id: 1, patient: 'John Doe', service: 'Cleaning', date: '2024-03-20', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, patient: 'Jane Smith', service: 'Consultation', date: '2024-03-20', time: '2:00 PM', status: 'Pending' },
    { id: 3, patient: 'Mike Johnson', service: 'Crown', date: '2024-03-21', time: '9:00 AM', status: 'Completed' },
    { id: 4, patient: 'Sarah Wilson', service: 'Root Canal', date: '2024-03-21', time: '11:00 AM', status: 'Confirmed' },
    { id: 5, patient: 'David Brown', service: 'Implant', date: '2024-03-22', time: '3:00 PM', status: 'Pending' }
  ]);

  const stats = [
    { label: 'Total Patients', value: '1,247', change: '+12%', icon: 'ri-user-line', color: 'blue' },
    { label: 'Appointments Today', value: '8', change: '+3', icon: 'ri-calendar-line', color: 'teal' },
    { label: 'Monthly Revenue', value: '$52,340', change: '+8%', icon: 'ri-money-dollar-line', color: 'green' },
    { label: 'Patient Satisfaction', value: '98.5%', change: '+0.5%', icon: 'ri-heart-line', color: 'pink' }
  ];

  return (
    <div className={`min-h-screen transition-colors ${
      theme === 'dark' 
        ? 'bg-gray-900 text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-colors ${
        theme === 'dark' 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
      } border-b`}>
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center">
                  <i className="ri-hospital-line text-white text-lg"></i>
                </div>
                <div>
                  <h1 className="text-xl font-bold">Asing Dental Admin</h1>
                  <p className="text-sm text-gray-500">Practice Management</p>
                </div>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  theme === 'dark' 
                    ? 'hover:bg-gray-700 text-gray-300' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className={`ri-${theme === 'dark' ? 'sun' : 'moon'}-line`}></i>
                </div>
              </button>
              
              <div className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <i className="ri-user-line"></i>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`w-64 min-h-screen transition-colors ${
          theme === 'dark' 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-200'
        } border-r`}>
          <nav className="p-4">
            <ul className="space-y-2">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: 'ri-dashboard-line' },
                { id: 'appointments', label: 'Appointments', icon: 'ri-calendar-line' },
                { id: 'patients', label: 'Patients', icon: 'ri-user-line' },
                { id: 'treatments', label: 'Treatments', icon: 'ri-tooth-line' },
                { id: 'billing', label: 'Billing', icon: 'ri-money-dollar-line' },
                { id: 'reports', label: 'Reports', icon: 'ri-bar-chart-line' },
                { id: 'settings', label: 'Settings', icon: 'ri-settings-line' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                      activeTab === item.id
                        ? theme === 'dark'
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-600 text-white'
                        : theme === 'dark'
                          ? 'text-gray-300 hover:bg-gray-700'
                          : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className={item.icon}></i>
                    </div>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'dashboard' && (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Dashboard</h2>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Welcome back! Here's what's happening at your clinic today.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className={`p-6 rounded-2xl transition-colors ${
                    theme === 'dark' 
                      ? 'bg-gray-800 border border-gray-700' 
                      : 'bg-white border border-gray-200'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        stat.color === 'blue' ? 'bg-blue-100' :
                        stat.color === 'teal' ? 'bg-teal-100' :
                        stat.color === 'green' ? 'bg-green-100' :
                        'bg-pink-100'
                      }`}>
                        <i className={`${stat.icon} text-xl ${
                          stat.color === 'blue' ? 'text-blue-600' :
                          stat.color === 'teal' ? 'text-teal-600' :
                          stat.color === 'green' ? 'text-green-600' :
                          'text-pink-600'
                        }`}></i>
                      </div>
                      <span className={`text-sm font-medium ${
                        stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Recent Appointments */}
              <div className={`rounded-2xl transition-colors ${
                theme === 'dark' 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}>
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">Recent Appointments</h3>
                    <button className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
                      View All
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {appointments.slice(0, 5).map((appointment) => (
                      <div key={appointment.id} className="flex items-center justify-between py-3">
                        <div className="flex items-center space-x-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                          }`}>
                            <i className="ri-user-line"></i>
                          </div>
                          <div>
                            <h4 className="font-medium">{appointment.patient}</h4>
                            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                              {appointment.service}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{appointment.date}</p>
                          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            {appointment.time}
                          </p>
                        </div>
                        <div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            appointment.status === 'Confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : appointment.status === 'Pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-blue-100 text-blue-800'
                          }`}>
                            {appointment.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appointments' && (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Appointments</h2>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Manage and track all patient appointments.
                </p>
              </div>

              <div className={`rounded-2xl transition-colors ${
                theme === 'dark' 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}>
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">All Appointments</h3>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                      Add New
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                        <th className="text-left p-4 font-medium">Patient</th>
                        <th className="text-left p-4 font-medium">Service</th>
                        <th className="text-left p-4 font-medium">Date</th>
                        <th className="text-left p-4 font-medium">Time</th>
                        <th className="text-left p-4 font-medium">Status</th>
                        <th className="text-left p-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((appointment) => (
                        <tr key={appointment.id} className={`border-b ${
                          theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                        }`}>
                          <td className="p-4">{appointment.patient}</td>
                          <td className="p-4">{appointment.service}</td>
                          <td className="p-4">{appointment.date}</td>
                          <td className="p-4">{appointment.time}</td>
                          <td className="p-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              appointment.status === 'Confirmed' 
                                ? 'bg-green-100 text-green-800' 
                                : appointment.status === 'Pending'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-blue-100 text-blue-800'
                            }`}>
                              {appointment.status}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-700 cursor-pointer">
                                <div className="w-4 h-4 flex items-center justify-center">
                                  <i className="ri-edit-line"></i>
                                </div>
                              </button>
                              <button className="text-red-600 hover:text-red-700 cursor-pointer">
                                <div className="w-4 h-4 flex items-center justify-center">
                                  <i className="ri-delete-bin-line"></i>
                                </div>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs content would be similar structured components */}
          {activeTab !== 'dashboard' && activeTab !== 'appointments' && (
            <div className="text-center py-12">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <i className="ri-tools-line text-3xl text-gray-400"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                This section is under development.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}