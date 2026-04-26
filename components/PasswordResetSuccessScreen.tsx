import React from 'react';
import { Key } from 'lucide-react';

interface PasswordResetSuccessScreenProps {
  onDone: () => void;
}

const PasswordResetSuccessScreen: React.FC<PasswordResetSuccessScreenProps> = ({ onDone }) => {
  return (
    <div className="bg-[#3B82F6] min-h-screen flex flex-col items-center justify-center px-8 relative overflow-hidden font-sans">
      
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>

      {/* Icon Container */}
      <div className="relative mb-12">
        {/* Dashed Circle */}
        <div className="w-48 h-48 rounded-full border-[3px] border-dashed border-white/40 flex items-center justify-center animate-[spin_10s_linear_infinite]">
        </div>
        
        {/* Key Icon (Static in center) */}
        <div className="absolute inset-0 flex items-center justify-center">
             <Key className="w-20 h-20 text-white stroke-[1.5]" />
        </div>

        {/* Pulsing glow behind key */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white/20 rounded-full blur-xl animate-pulse"></div>
        </div>
      </div>

      {/* Text */}
      <h2 className="text-white text-2xl font-bold text-center leading-tight mb-16 drop-shadow-md">
        Your Password has<br />been reset!
      </h2>

      {/* Button */}
      <button 
        onClick={onDone}
        className="w-full bg-white text-[#3B82F6] font-bold py-4 rounded-xl shadow-lg shadow-blue-900/20 hover:bg-blue-50 transition-all active:scale-[0.98]"
      >
        Done
      </button>

    </div>
  );
};

export default PasswordResetSuccessScreen;