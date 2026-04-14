import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6">
            <div className="max-w-md w-full text-center">
                {/* Visual Icon/Illustration */}
                <div className="relative mb-8">
                    <h1 className="text-[120px] font-black text-slate-200 leading-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl">🔍</span>
                    </div>
                </div>

                {/* Text Content */}
                <h2 className="text-3xl font-bold text-[#1F2937] mb-4">
                    Oops! Page Not Found
                </h2>
                <p className="text-slate-500 mb-8 leading-relaxed">
                    The page you are looking for might have been removed, 
                    had its name changed, or is temporarily unavailable.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link 
                        to="/" 
                        className="w-full sm:w-auto px-8 py-3 bg-[#244D3F] text-white font-semibold rounded-xl shadow-lg hover:shadow-[#244D3F]/20 active:scale-95 transition-all duration-200"
                    >
                        Back to Home
                    </Link>
                    
                    <button 
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto px-8 py-3 border border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-200"
                    >
                        Go Back
                    </button>
                </div>

                {/* Bottom Graphic */}
                <div className="mt-12 opacity-40">
                    <div className="flex justify-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-slate-300 animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-300 animate-bounce [animation-delay:-.3s]"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-300 animate-bounce [animation-delay:-.5s]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;