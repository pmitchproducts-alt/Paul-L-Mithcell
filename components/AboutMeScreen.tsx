import React from 'react';
import { ChevronLeft, Camera, User, Mail, Phone, Lock } from 'lucide-react';

interface AboutMeScreenProps {
  onBack: () => void;
  onNavigateToChangePassword?: () => void;
}

const AboutMeScreen: React.FC<AboutMeScreenProps> = ({ onBack, onNavigateToChangePassword }) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans pb-28">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-5 bg-transparent sticky top-0 z-40 bg-gray-50/95 backdrop-blur-sm">
        <button 
          onClick={onBack} 
          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">About Me</h1>
        <button className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <Camera className="w-5 h-5 text-gray-800" strokeWidth={2} />
        </button>
      </header>

      <div className="px-5 py-2 space-y-8 flex-1 overflow-y-auto no-scrollbar">
        
        {/* Personal Details Section */}
        <section>
            <h2 className="text-gray-900 font-bold text-base mb-4 ml-1">Personal Details</h2>
            <div className="space-y-4">
                <InfoCard 
                    icon={<User className="w-5 h-5" />} 
                    value="Lucy Martin" 
                />
                <InfoCard 
                    icon={<Mail className="w-5 h-5" />} 
                    value="lucymartin@gmail.com" 
                />
                <InfoCard 
                    icon={<Phone className="w-5 h-5" />} 
                    value="+91 234 567 8900" 
                />
            </div>
        </section>

        {/* Change Password Section - Interactive now */}
        <section>
            <h2 className="text-gray-900 font-bold text-base mb-4 ml-1">Change Password</h2>
            <div className="space-y-4 cursor-pointer" onClick={onNavigateToChangePassword}>
                <InfoCard 
                    icon={<Lock className="w-5 h-5" />} 
                    value="Current Password" 
                    isPlaceholder
                />
                 <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm border border-transparent hover:shadow-md hover:border-orange-100 transition-all">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-500">
                         <Lock className="w-5 h-5" />
                    </div>
                    <div className="flex-1 flex items-center gap-2">
                        <span className="text-gray-300 text-2xl leading-none mt-1">•</span>
                        <span className="text-gray-300 text-2xl leading-none mt-1">•</span>
                        <span className="text-gray-300 text-2xl leading-none mt-1">•</span>
                        <span className="text-gray-300 text-2xl leading-none mt-1">•</span>
                        <div className="w-[1.5px] h-5 bg-gray-400 animate-pulse ml-1"></div>
                    </div>
                </div>
                <InfoCard 
                    icon={<Lock className="w-5 h-5" />} 
                    value="Confirm Password" 
                    isPlaceholder
                />
            </div>
        </section>

      </div>
    </div>
  );
};

interface InfoCardProps {
    icon: React.ReactNode;
    value: string;
    isPlaceholder?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, value, isPlaceholder }) => {
    return (
        <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm border border-transparent hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-500">
                {icon}
            </div>
            <div className={`flex-1 text-sm font-medium ${isPlaceholder ? 'text-gray-500' : 'text-gray-700'}`}>
                {value}
            </div>
        </div>
    );
};

export default AboutMeScreen;