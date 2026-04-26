import React, { useState } from 'react';
import { ChevronLeft, Camera } from 'lucide-react';

interface PhoneVerificationScreenProps {
  onBack: () => void;
}

const PhoneVerificationScreen: React.FC<PhoneVerificationScreenProps> = ({ onBack }) => {
  const [otp, setOtp] = useState<string>('8'); // Default '8' to match screenshot

  const handleKeyPress = (key: string) => {
    if (otp.length < 4) {
      setOtp(prev => prev + key);
    }
  };

  const handleBackspace = () => {
    setOtp(prev => prev.slice(0, -1));
  };

  const keys = [
    { num: '1', sub: '' },
    { num: '2', sub: 'ABC' },
    { num: '3', sub: 'DEF' },
    { num: '4', sub: 'GHI' },
    { num: '5', sub: 'JKL' },
    { num: '6', sub: 'MNO' },
    { num: '7', sub: 'PQRS' },
    { num: '8', sub: 'TUV' },
    { num: '9', sub: 'WXYZ' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-5 bg-transparent sticky top-0 z-40">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Phone Verification</h1>
        <button className="relative w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <Camera className="w-5 h-5 text-gray-800" strokeWidth={2} />
          {/* Notification Dot - Changed Red to Orange */}
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#F97316] rounded-full ring-1 ring-white"></span>
        </button>
      </header>

      {/* Main Content */}
      <div className="px-6 mt-4 flex-1">
        <p className="text-gray-500 text-sm mb-12">Enter your OTP code here</p>

        {/* OTP Boxes */}
        <div className="flex gap-4 mb-10">
          {[0, 1, 2, 3].map((index) => {
            const digit = otp[index] || '';
            const isFilled = !!digit;
            
            return (
              <div 
                key={index}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm transition-all text-3xl
                  ${isFilled 
                    ? 'bg-[#F97316] text-white shadow-orange-200 shadow-md font-medium' // Filled: Orange
                    : 'bg-white text-gray-800' // Empty: White
                  }
                `}
              >
                <span>{digit}</span>
              </div>
            );
          })}
        </div>

        <p className="text-gray-400 text-sm font-medium">Didn't you receive any code?</p>
        <button 
            onClick={() => setOtp('')} // Reset for demo
            className="text-[#F97316] text-sm font-medium mt-1 hover:text-orange-700 transition-colors"
        >
          Resend a new code.
        </button>
      </div>

      {/* Keypad - Changed Green to Blue (#3B82F6) */}
      <div className="bg-[#3B82F6] p-4 pt-6 pb-8 rounded-t-[30px] shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
           {keys.map(({ num, sub }) => (
             <button
               key={num}
               onClick={() => handleKeyPress(num)}
               className="bg-white rounded-lg h-14 flex flex-col items-center justify-center active:scale-95 transition-transform shadow-sm"
             >
               {/* Numbers and Letters - Changed Green to Blue */}
               <span className="text-xl font-normal text-[#3B82F6] leading-none">{num}</span>
               {sub && <span className="text-[9px] font-bold text-[#3B82F6] leading-none mt-0.5">{sub}</span>} 
             </button>
           ))}
           
           {/* Bottom Row */}
           <div className="flex items-center justify-center h-14 text-white/80 font-medium tracking-[0.2em] text-lg">
              +*#
           </div>
           
           <button
             onClick={() => handleKeyPress('0')}
             className="bg-white rounded-lg h-14 flex items-center justify-center active:scale-95 transition-transform shadow-sm"
           >
              <span className="text-xl font-normal text-[#3B82F6]">0</span>
           </button>

           <button
             onClick={handleBackspace}
             className="flex items-center justify-center h-14 active:scale-95 transition-transform"
           >
             {/* Backspace Icon */}
              <div className="w-8 h-8 flex items-center justify-center relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                    <line x1="18" y1="9" x2="12" y2="15"></line>
                    <line x1="12" y1="9" x2="18" y2="15"></line>
                </svg>
              </div>
           </button>
        </div>
        
        {/* Home Indicator */}
        <div className="flex justify-center mt-6">
           <div className="w-32 h-1 bg-white/40 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PhoneVerificationScreen;