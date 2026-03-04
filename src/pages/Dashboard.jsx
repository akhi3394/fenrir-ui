import React from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import { Home, Filter, Columns, Plus, Ban, AlertTriangle, Search as SearchIcon } from 'lucide-react';

const Dashboard = () => {
    const navigate = useNavigate();
    const scans = [
        { name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: [5, 12, 23, 18], time: '4d ago' },
        { name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: [5, 12, 23, 18], time: '4d ago' },
        { name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: [5, 12, 23, 18], time: '4d ago' },
        { name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: [5, 12, 23, 18], time: '4d ago' },
        { name: 'Web App Servers', type: 'Greybox', status: 'Scheduled', progress: 100, vulns: [5, 12, 23, 18], time: '4d ago' },
        { name: 'IoT Devices', type: 'Blackbox', status: 'Failed', progress: 10, vulns: [2, 4, 8, 1], time: '3d ago' },
        { name: 'Temp Data', type: 'Blackbox', status: 'Failed', progress: 10, vulns: [2, 4, 8, 1], time: '3d ago' },
    ];

    const getStatusStyles = (status) => {
        switch (status) {
            case 'Completed': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-medium';
            case 'Scheduled': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 font-medium';
            case 'Failed': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 font-medium';
            default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 font-medium';
        }
    };

    const getProgressBarColor = (status) => {
        if (status === 'Failed') return 'bg-red-500';
        return 'bg-[#009688]';
    };

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-[#0b0d0e] transition-colors duration-200">
            <Sidebar />
            <main className="flex-1 w-full lg:ml-0 overflow-x-hidden p-4 md:p-6 lg:p-8 pt-16 lg:pt-8 min-h-screen">
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="text-xl font-bold text-gray-900 dark:text-white mr-2">Scan</span>
                            <Home size={16} />
                            <span>/</span>
                            <span>Private Assets</span>
                            <span>/</span>
                            <span className="text-[#009688] font-medium">New Scan</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            Export Report
                        </button>
                        <button className="px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm font-medium hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors">
                            Stop Scan
                        </button>
                    </div>
                </header>

                <section className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-gray-600 dark:text-gray-400 mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
                    <div><span className="text-gray-400 dark:text-gray-500">Org:</span> <span className="font-semibold text-gray-900 dark:text-white">Project X</span></div>
                    <div><span className="text-gray-400 dark:text-gray-500">Owner:</span> <span className="font-semibold text-gray-900 dark:text-white">Nammagiri</span></div>
                    <div><span className="text-gray-400 dark:text-gray-500">Total Scans:</span> <span className="font-semibold text-gray-900 dark:text-white">100</span></div>
                    <div><span className="text-gray-400 dark:text-gray-500">Scheduled:</span> <span className="font-semibold text-gray-900 dark:text-white">1000</span></div>
                    <div><span className="text-gray-400 dark:text-gray-500">Rescans:</span> <span className="font-semibold text-gray-900 dark:text-white">100</span></div>
                    <div><span className="text-gray-400 dark:text-gray-500">Failed Scans:</span> <span className="font-semibold text-gray-900 dark:text-white">100</span></div>
                    <div className="ml-auto flex items-center gap-2 text-[#009688]">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                        10 mins ago
                    </div>
                </section>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white dark:bg-[#111315] p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden group">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-gray-500 dark:text-gray-400 font-medium text-sm">Critical Severity</span>
                            <div className="p-1.5 rounded-full bg-red-50 dark:bg-red-900/20 text-red-500"><Ban size={18} /></div>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">86</h2>
                        <div className="text-xs font-medium text-red-500 flex items-center gap-1">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                            +2% increase than yesterday
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#111315] p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden group">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-gray-500 dark:text-gray-400 font-medium text-sm">High Severity</span>
                            <div className="p-1.5 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-500"><AlertTriangle size={18} /></div>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">16</h2>
                        <div className="text-xs font-medium text-red-500 flex items-center gap-1">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                            +0.9% increase than yesterday
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#111315] p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden group">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-gray-500 dark:text-gray-400 font-medium text-sm">Medium Severity</span>
                            <div className="p-1.5 rounded-full bg-yellow-50 dark:bg-yellow-900/20 text-yellow-500"><AlertTriangle size={18} /></div>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">26</h2>
                        <div className="text-xs font-medium text-green-500 flex items-center gap-1">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                            +0.9% decrease than yesterday
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#111315] p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden group">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-gray-500 dark:text-gray-400 font-medium text-sm">Low Severity</span>
                            <div className="p-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-[#00bcd4]"><SearchIcon size={18} /></div>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">16</h2>
                        <div className="text-xs font-medium text-red-500 flex items-center gap-1">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                            +0.9% increase than yesterday
                        </div>
                    </div>
                </section>

                <div className="bg-white dark:bg-[#111315] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="relative flex-1 max-w-md">
                            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search scans by name or type..."
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-[#1a1c1d] border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#009688]"
                            />
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <Filter size={16} /> Filter
                            </button>
                            <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <Columns size={16} /> Column
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-[#009688] hover:bg-[#00796b] text-white rounded-lg text-sm font-medium transition-colors">
                                <Plus size={16} /> New scan
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-100 dark:border-gray-800 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                                    <th className="px-6 py-4 font-medium">Scan Name</th>
                                    <th className="px-6 py-4 font-medium">Type</th>
                                    <th className="px-6 py-4 font-medium">Status</th>
                                    <th className="px-6 py-4 font-medium">Progress</th>
                                    <th className="px-6 py-4 font-medium">Vulnerability</th>
                                    <th className="px-6 py-4 font-medium text-right">Last Scan</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                {scans.map((scan, index) => (
                                    <tr
                                        key={index}
                                        onClick={() => navigate('/finding-details')}
                                        className="hover:bg-gray-50 dark:hover:bg-[#1a1c1d] cursor-pointer transition-colors group"
                                    >
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{scan.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{scan.type}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex px-2.5 py-1 text-xs rounded-md border ${getStatusStyles(scan.status)} border-transparent`}>
                                                {scan.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-32 h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full transition-all ${getProgressBarColor(scan.status)}`}
                                                        style={{ width: `${scan.progress}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 w-8">{scan.progress}%</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1.5">
                                                <span className="w-6 h-6 flex items-center justify-center rounded bg-red-500 text-white text-[11px] font-bold">{scan.vulns[0]}</span>
                                                <span className="w-6 h-6 flex items-center justify-center rounded bg-orange-500 text-white text-[11px] font-bold">{scan.vulns[1]}</span>
                                                <span className="w-6 h-6 flex items-center justify-center rounded bg-yellow-500 text-white text-[11px] font-bold">{scan.vulns[2]}</span>
                                                <span className="w-6 h-6 flex items-center justify-center rounded bg-green-500 text-white text-[11px] font-bold">{scan.vulns[3]}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 text-right">
                                            {scan.time}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
