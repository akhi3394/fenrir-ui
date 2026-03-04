import React from 'react';
import Sidebar from '../components/Sidebar';
import { Home, Search, Network, Thermometer, CheckCircle, FileText } from 'lucide-react';

const FindingDetails = () => {
    const logEntries = [
        { time: '[09:00:00]', text: "I'll begin a systematic penetration test on ", link: 'helpdesk.democorp.com', suffix: '. Let me start with reconnaissance and enumeration.' },
        { time: '[09:01:00]', text: "Good! target is online. Now let me perform port scanning to identify running services." },
        { time: '[09:02:00]', text: "Excellent reconnaissance results:", subtext: "- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)", footer: "Let me probe the web server on target first to understand its structure." },
        { time: '[09:03:00]', text: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: ", code: '"TODO: Delete the testing account (test:test)"', footer: "Let me test this credential. The login redirects to ", badge: "/password/test", suffix: ". Let me follow that path and explore it." },
        { time: '[09:04:00]', text: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach." },
        { time: '[09:05:00]', text: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the ", code: 'test:test', suffix: " password directly on other endpoints." },
        { time: '[09:06:00]', text: "Great! I can access the dashboard using the ", badge: "'X-UserId: 10032'", suffix: " header. The dashboard shows \"Welcome, John Doe\". This suggests an **IDOR vulnerability** - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application..." },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-[#0b0d0e] transition-colors duration-200">
            <Sidebar />
            <main className="flex-1 w-full lg:ml-0 overflow-x-hidden p-4 md:p-6 lg:p-8 pt-16 lg:pt-8 min-h-screen flex flex-col">
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div className="flex flex-col">
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
                        <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#1a1c1d] transition-colors">
                            Export Report
                        </button>
                        <button className="px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm font-medium hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors">
                            Stop Scan
                        </button>
                    </div>
                </header>

                <section className="bg-white dark:bg-[#111315] rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-6 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
                    <div className="flex-shrink-0 relative flex flex-col items-center justify-center w-32 h-32 rounded-full border-[12px] border-[#e0f2f1] dark:border-[#004d40]">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">0%</span>
                        <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 mt-1">In Progress</span>
                    </div>

                    <div className="flex-1 w-full lg:w-auto overflow-x-auto pb-4 lg:pb-0 hide-scrollbar">
                        <div className="flex items-center min-w-max lg:min-w-0">
                            <div className="flex flex-col items-center gap-3 text-[#009688]">
                                <div className="w-12 h-12 rounded-full border-2 border-[#009688] bg-[#009688]/10 flex items-center justify-center">
                                    <Search size={24} />
                                </div>
                                <span className="text-[13px] font-semibold">Spidering</span>
                            </div>
                            <div className="h-0.5 w-16 lg:w-24 bg-gray-200 dark:bg-gray-700 -mt-8 mx-2"></div>
                            <div className="flex flex-col items-center gap-3 text-gray-300 dark:text-gray-600">
                                <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center">
                                    <Network size={24} />
                                </div>
                                <span className="text-[13px] font-semibold">Mapping</span>
                            </div>
                            <div className="h-0.5 w-16 lg:w-24 bg-gray-200 dark:bg-gray-700 -mt-8 mx-2"></div>
                            <div className="flex flex-col items-center gap-3 text-gray-300 dark:text-gray-600">
                                <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center">
                                    <Thermometer size={24} />
                                </div>
                                <span className="text-[13px] font-semibold">Testing</span>
                            </div>
                            <div className="h-0.5 w-16 lg:w-24 bg-gray-200 dark:bg-gray-700 -mt-8 mx-2"></div>
                            <div className="flex flex-col items-center gap-3 text-gray-300 dark:text-gray-600">
                                <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center">
                                    <CheckCircle size={24} />
                                </div>
                                <span className="text-[13px] font-semibold">Validating</span>
                            </div>
                            <div className="h-0.5 w-16 lg:w-24 bg-gray-200 dark:bg-gray-700 -mt-8 mx-2"></div>
                            <div className="flex flex-col items-center gap-3 text-gray-300 dark:text-gray-600">
                                <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center">
                                    <FileText size={24} />
                                </div>
                                <span className="text-[13px] font-semibold">Reporting</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-8 w-full lg:w-auto lg:border-l border-gray-100 dark:border-gray-800 lg:pl-12">
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">Scan Type</span>
                            <span className="text-sm font-bold text-gray-900 dark:text-white">Grey Box</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">Targets</span>
                            <span className="text-sm font-bold text-gray-900 dark:text-white">google.com</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">Started At</span>
                            <span className="text-sm font-bold text-gray-900 dark:text-white">Nov 22, 09:00AM</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">Credentials</span>
                            <span className="text-sm font-bold text-gray-900 dark:text-white">2 Active</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">Checklists</span>
                            <span className="text-sm font-bold text-[#009688]">40/350</span>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0 relative">
                    {/* Live Scan Console */}
                    <div className="flex-[1.5] w-full bg-white dark:bg-[#111315] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col min-h-[600px] transition-colors">
                        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                            <div className="flex items-center gap-2.5">
                                <span className="w-2 h-2 rounded-full bg-[#009688]"></span>
                                <h3 className="font-bold text-gray-900 dark:text-white text-[15px]">Live Scan Console</h3>
                                <div className="ml-3 px-3 py-1 bg-gray-50 dark:bg-gray-800/50 rounded-full flex items-center gap-2">
                                    <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Running...</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                                <button><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
                                <button><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
                            </div>
                        </div>

                        <div className="flex px-6 border-b border-gray-100 dark:border-gray-800">
                            <button className="px-5 py-4 text-[13px] font-semibold text-[#009688] border-b-2 border-[#009688]">Activity Log</button>
                            <button className="px-5 py-4 text-[13px] font-semibold text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">Verification Loops</button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 font-mono text-sm">
                            {logEntries.map((entry, i) => (
                                <div key={i} className="mb-6 leading-relaxed">
                                    <span className="text-gray-400 dark:text-gray-500 mr-3">{entry.time}</span>
                                    <p className="inline text-gray-700 dark:text-gray-300">
                                        {entry.text}
                                        {entry.link && <span className="text-[#009688] font-bold">{entry.link}</span>}
                                        {entry.code && <span className="text-[#009688]">{entry.code}</span>}
                                        {entry.badge && <span className="bg-[#b2ebf2] dark:bg-[#004d40] text-[#00796b] dark:text-[#80cbc4] px-1.5 py-0.5 rounded text-xs mx-1">{entry.badge}</span>}
                                        {entry.suffix && entry.suffix}
                                    </p>
                                    {entry.subtext && <div className="mt-3 pl-5 text-gray-500 dark:text-gray-400 border-l-2 border-gray-200 dark:border-gray-700">{entry.subtext}</div>}
                                    {entry.footer && <p className="mt-3 text-gray-700 dark:text-gray-300">{entry.footer}</p>}
                                </div>
                            ))}
                            <div className="inline-block font-bold animate-pulse text-gray-900 dark:text-white">|</div>
                        </div>

                        <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 font-medium">
                            <div className="flex gap-6">
                                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></div> Sub-Agents: 0</span>
                                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#009688]"></div> Parallel Executions: 2</span>
                                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#009688]"></div> Operations: 1</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-red-500">Critical: 0</span>
                                <span className="text-orange-500">High: 0</span>
                                <span className="text-yellow-500">Medium: 0</span>
                                <span className="text-green-500">Low: 0</span>
                            </div>
                        </div>
                    </div>

                    {/* Findings Panel */}
                    <div className="flex-1 w-full flex flex-col min-h-[600px] transition-colors rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#111315]">
                        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-[#111315]">
                            <h3 className="font-bold text-gray-900 dark:text-white text-[15px]">Finding Log</h3>
                        </div>
                        <div className="flex-1 p-6 overflow-y-auto bg-gray-50/50 dark:bg-[#0b0d0e]">
                            <div className="bg-white dark:bg-[#1a1c1d] p-5 rounded-xl border border-gray-100 dark:border-gray-800 mb-4 shadow-sm relative transition-colors">
                                <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 mb-3">Critical</span>
                                <div className="absolute top-5 right-5 text-[11px] text-gray-400 dark:text-gray-500 font-medium">10:45:23</div>
                                <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-1.5">SQL Injection in Authentication Endpoint</h4>
                                <p className="text-[13px] text-[#009688] font-semibold mb-3">/api/users/profile</p>
                                <p className="text-[13px] leading-relaxed text-gray-600 dark:text-gray-400">Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.</p>
                            </div>

                            <div className="bg-white dark:bg-[#1a1c1d] p-5 rounded-xl border border-gray-100 dark:border-gray-800 mb-4 shadow-sm relative transition-colors">
                                <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 mb-3">High</span>
                                <div className="absolute top-5 right-5 text-[11px] text-gray-400 dark:text-gray-500 font-medium">10:45:23</div>
                                <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-1.5">Unauthorized Access to User Metadata</h4>
                                <p className="text-[13px] text-[#00bcd4] font-semibold mb-3">/api/auth/login</p>
                                <p className="text-[13px] leading-relaxed text-gray-600 dark:text-gray-400">Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.</p>
                            </div>

                            <div className="bg-white dark:bg-[#1a1c1d] p-5 rounded-xl border border-gray-100 dark:border-gray-800 mb-4 shadow-sm relative transition-colors">
                                <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-500 mb-3">Medium</span>
                                <div className="absolute top-5 right-5 text-[11px] text-gray-400 dark:text-gray-500 font-medium">10:45:23</div>
                                <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-1.5">Broken Authentication Rate Limiting</h4>
                                <p className="text-[13px] text-[#00bcd4] font-semibold mb-3">/api/search</p>
                                <p className="text-[13px] leading-relaxed text-gray-600 dark:text-gray-400">No effective rate limiting detected on login attempts. Automated brute-force attempts possible.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default FindingDetails;
