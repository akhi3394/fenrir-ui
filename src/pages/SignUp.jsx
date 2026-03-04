import React from 'react';
import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    return (
        <div
            className="flex min-h-screen w-full text-white relative overflow-hidden"
            style={{
                background: `
                    radial-gradient(circle at 10% 20%, rgba(0, 150, 136, 0.15) 0%, transparent 40%),
                    radial-gradient(circle at 90% 80%, rgba(204, 50, 0, 0.5) 0%, transparent 60%),
                    linear-gradient(135deg, #091010 0%, #111e1c 50%, #1a1a1a 100%)
                `
            }}
        >
            <div className="relative z-10 w-full max-w-7xl mx-auto p-6 md:p-12 lg:p-16 flex flex-col">
                <header className="mb-12 lg:mb-24">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#009688] rounded-full"></div>
                        <span className="text-2xl font-bold tracking-tight">aps</span>
                    </div>
                </header>

                <main className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 flex-1">
                    <div className="flex-1 w-full max-w-xl">
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-10 text-white">
                            Expert level Cybersecurity<br />
                            in <span className="text-[#00c9b1]">hours</span> not weeks.
                        </h1>

                        <div className="mb-16 mt-8">
                            <h3 className="text-lg font-semibold mb-6 text-white">What's included</h3>
                            <ul className="space-y-5">
                                <li className="flex gap-4 items-start text-[15px] text-gray-300">
                                    <span className="text-[#00c9b1] font-bold mt-0.5">✓</span>
                                    <span>Effortlessly spider and map targets to uncover hidden security flaws</span>
                                </li>
                                <li className="flex gap-4 items-start text-[15px] text-gray-300">
                                    <span className="text-[#00c9b1] font-bold mt-0.5">✓</span>
                                    <span>Deliver high-quality, validated findings in hours, not weeks.</span>
                                </li>
                                <li className="flex gap-4 items-start text-[15px] text-gray-300">
                                    <span className="text-[#00c9b1] font-bold mt-0.5">✓</span>
                                    <span>Generate professional, enterprise-grade security reports automatically.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-auto pt-10">
                            <div className="text-[#00c9b1] font-bold text-lg mb-2 flex items-center gap-2">
                                ★ Trustpilot
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                <span className="text-xl text-[#00c9b1]">★★★★★</span>
                                <span className="font-semibold text-white">Rated 4.5/5.0</span>
                                <span>(100k+ reviews)</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full flex justify-center lg:justify-end lg:mt-0 mt-8">
                        <div className="bg-white w-full max-w-md p-8 md:p-10 rounded-2xl shadow-2xl text-gray-800">
                            <h2 className="text-3xl font-bold text-center mb-2">Sign up</h2>
                            <p className="text-center text-sm text-gray-500 mb-8">
                                Already have an account? <a href="#" className="text-[#009688] font-semibold hover:underline">Log in</a>
                            </p>

                            <form className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="First name*"
                                        required
                                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-[15px] outline-none focus:border-[#009688] focus:bg-white transition-colors placeholder-gray-400"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Last name*"
                                        required
                                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-[15px] outline-none focus:border-[#009688] focus:bg-white transition-colors placeholder-gray-400"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email address*"
                                        required
                                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-[15px] outline-none focus:border-[#009688] focus:bg-white transition-colors placeholder-gray-400"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="password"
                                        placeholder="Password (8+ characters)*"
                                        required
                                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-[15px] outline-none focus:border-[#009688] focus:bg-white transition-colors placeholder-gray-400 pr-12"
                                    />
                                    <Eye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600" size={20} />
                                </div>

                                <div className="flex items-start gap-3 mt-6 mb-6">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        required
                                        className="mt-1 w-4 h-4 rounded border-gray-300 text-[#009688] focus:ring-[#009688]"
                                        style={{ accentColor: '#009688' }}
                                    />
                                    <label htmlFor="terms" className="text-[13px] text-gray-500 leading-relaxed">
                                        I agree to Aps's <a href="#" className="text-[#009688] hover:underline">Terms & Conditions</a> and acknowledge the <a href="#" className="text-[#009688] hover:underline">Privacy Policy</a>
                                    </label>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => navigate('/dashboard')}
                                    className="w-full py-3.5 bg-[#17a091] hover:bg-[#138d7f] text-white text-[15px] font-semibold rounded-full transition-colors mt-2"
                                >
                                    Create account
                                </button>

                                <div className="relative text-center my-6">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-200"></div>
                                    </div>
                                </div>

                                <div className="flex gap-3 mt-4">
                                    <button type="button" className="flex-1 py-3 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors">
                                        <svg viewBox="0 0 384 512" width="18" height="18" fill="currentColor">
                                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                                        </svg>
                                    </button>
                                    <button type="button" className="flex-1 py-3 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                                        <svg viewBox="0 0 48 48" width="18" height="18">
                                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                                        </svg>
                                    </button>
                                    <button type="button" className="flex-1 py-3 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:bg-[#166fe5] transition-colors">
                                        <svg viewBox="0 0 320 512" width="18" height="18" fill="currentColor">
                                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SignUp;
