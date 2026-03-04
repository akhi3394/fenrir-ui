import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Briefcase, Search, Calendar, Bell, Settings, HeadphonesIcon, ChevronRight, Menu, X, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../App';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-[#1a1c1d] shadow-md text-gray-800 dark:text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <aside className={`
                fixed lg:sticky top-0 left-0 h-screen bg-white dark:bg-[#111315] 
                w-64 border-r border-gray-100 dark:border-gray-800 
                flex flex-col transition-transform duration-300 z-40
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="flex items-center justify-between px-6 py-6 lg:py-8">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#009688] rounded-full"></div>
                        <span className="text-xl font-bold dark:text-white">aps</span>
                    </div>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
                        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </div>

                <nav className="flex-1 px-4 overflow-y-auto mt-2">
                    <div className="space-y-1 relative">
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) => `
                                flex items-center gap-3 px-4 py-3 rounded-full text-[15px] font-medium transition-colors
                                ${isActive
                                    ? 'bg-[#e0f2f1] dark:bg-[#004d40] text-[#009688] dark:text-[#80cbc4]'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white'
                                }
                            `}
                            onClick={() => setIsOpen(false)}
                        >
                            <LayoutDashboard size={20} />
                            <span>Dashboard</span>
                        </NavLink>

                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-full text-[15px] font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <Briefcase size={20} />
                            <span>Projects</span>
                        </a>

                        <NavLink
                            to="/finding-details"
                            className={({ isActive }) => `
                                flex items-center gap-3 px-4 py-3 rounded-full text-[15px] font-medium transition-colors relative
                                ${isActive
                                    ? 'bg-[#e0f2f1] dark:bg-[#004d40] text-[#009688] dark:text-[#80cbc4]'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white'
                                }
                            `}
                            onClick={() => setIsOpen(false)}
                        >
                            <Search size={20} />
                            <span>Scans</span>
                        </NavLink>

                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-full text-[15px] font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <Calendar size={20} />
                            <span>Schedule</span>
                        </a>
                    </div>

                    <div className="my-6 border-t border-gray-100 dark:border-gray-800 mx-4"></div>

                    <div className="space-y-1">
                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-full text-[15px] font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <Bell size={20} />
                            <span>Notifications</span>
                            <span className="ml-auto w-2 h-2 rounded-full bg-[#f44336] shadow-[0_0_8px_rgba(244,67,54,0.6)]"></span>
                        </a>
                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-full text-[15px] font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <Settings size={20} />
                            <span>Settings</span>
                        </a>
                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-full text-[15px] font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <HeadphonesIcon size={20} />
                            <span>Support</span>
                        </a>
                    </div>
                </nav>

                <div className="border-t border-gray-100 dark:border-gray-800 p-4 mx-4 mb-4 mt-auto">
                    <div className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center shrink-0 overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-[13px] text-gray-500 dark:text-gray-400 truncate">admin@edu.com</div>
                            <div className="text-[14px] font-bold text-gray-900 dark:text-white truncate">Security Lead</div>
                        </div>
                        <ChevronRight size={18} className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200" />
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default Sidebar;
