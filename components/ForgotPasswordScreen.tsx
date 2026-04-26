import React from 'react';
import { ChevronLeft, Camera, Check } from 'lucide-react';

interface ForgotPasswordScreenProps {
  onBack: () => void;
}

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-5 bg-transparent sticky top-0 z-40 bg-gray-50/95 backdrop-blur-sm">
        <button 
          onClick={onBack} 
          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Forgot Password</h1>
        <button className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <Camera className="w-5 h-5 text-gray-800" strokeWidth={2} />
        </button>
      </header>

      <div className="px-5 pt-8 flex-1">
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          Please enter your email address. You will receive a link to create a new password via email.
        </p>

        {/* Input Field */}
        <div className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm border border-transparent focus-within:border-orange-100 focus-within:ring-1 focus-within:ring-orange-100 transition-all mb-8">
          <div className="flex-1 mr-4">
            <label className="block text-[10px] text-gray-400 font-medium mb-1 tracking-wide">
              Email Address
            </label>
            <input 
              type="email" 
              defaultValue="Lucymartin@gmail.com"
              className="w-full text-sm font-bold text-gray-900 placeholder-gray-400 focus:outline-none bg-transparent"
            />
          </div>
          {/* Checkmark Icon - Orange */}
          <div className="w-6 h-6 rounded-full border border-[#F97316] flex items-center justify-center">
             <Check className="w-3.5 h-3.5 text-[#F97316]" strokeWidth={3} />
          </div>
        </div>

        {/* Next Button - Orange */}
        <button 
          className="w-full bg-[#F97316] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 transition-all active:scale-[0.98] text-base"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordScreen;