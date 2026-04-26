import React, { useState } from 'react';
import { ChevronLeft, Camera, Eye, EyeOff } from 'lucide-react';

interface ChangePasswordScreenProps {
  onBack: () => void;
  onNavigateToSuccess: () => void;
}

const ChangePasswordScreen: React.FC<ChangePasswordScreenProps> = ({ onBack, onNavigateToSuccess }) => {
  const [currentPassword, setCurrentPassword] = useState('12345678');
  const [newPassword, setNewPassword] = useState('12345678');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);

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
        <h1 className="text-lg font-bold text-gray-900">Change Password</h1>
        <button className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <Camera className="w-5 h-5 text-gray-800" strokeWidth={2} />
        </button>
      </header>

      <div className="px-5 pt-4 flex-1">
        <p className="text-gray-500 text-sm mb-8">Enter your New Password</p>

        <div className="space-y-4">
          <PasswordInput 
            label="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            isVisible={showCurrent}
            onToggle={() => setShowCurrent(!showCurrent)}
          />

          <PasswordInput 
            label="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            isVisible={showNew}
            onToggle={() => setShowNew(!showNew)}
          />
        </div>

        <button 
          onClick={onNavigateToSuccess}
          className="w-full bg-[#F97316] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 transition-all active:scale-[0.98] mt-8 text-base"
        >
          Change
        </button>
      </div>
    </div>
  );
};

interface PasswordInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isVisible: boolean;
  onToggle: () => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ 
  label, 
  value, 
  onChange, 
  isVisible, 
  onToggle 
}) => {
  return (
    <div className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm border border-transparent focus-within:border-orange-100 focus-within:ring-1 focus-within:ring-orange-100 transition-all">
      <div className="flex-1 mr-4">
        <label className="block text-[10px] text-gray-400 font-medium mb-1 tracking-wide">
          {label}
        </label>
        <input 
          type={isVisible ? "text" : "password"} 
          value={value}
          onChange={onChange}
          className="w-full text-sm font-bold text-gray-900 placeholder-gray-400 focus:outline-none bg-transparent tracking-widest"
        />
      </div>
      <button 
        onClick={onToggle}
        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
        type="button"
      >
        {isVisible ? (
          <Eye className="w-5 h-5" strokeWidth={2} />
        ) : (
          <EyeOff className="w-5 h-5" strokeWidth={2} />
        )}
      </button>
    </div>
  );
};

export default ChangePasswordScreen;