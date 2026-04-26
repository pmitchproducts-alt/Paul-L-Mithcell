
import React from 'react';
import { ChevronLeft, Camera } from 'lucide-react';

interface ScanQrScreenProps {
  onBack: () => void;
}

const ScanQrScreen: React.FC<ScanQrScreenProps> = ({ onBack }) => {
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
        <h1 className="text-lg font-bold text-gray-900">Scan QR Code</h1>
        <button className="relative w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <Camera className="w-5 h-5 text-gray-800" strokeWidth={2} />
          {/* Notification Dot: Red to Blue */}
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#3B82F6] rounded-full ring-1 ring-white"></span>
        </button>
      </header>

      {/* Main Content */}
      <div className="flex-1 px-5 pb-6 flex flex-col">
        <div className="bg-white rounded-[32px] p-6 shadow-sm flex-1 flex flex-col items-center justify-center text-center relative overflow-hidden">
            
            <h2 className="text-gray-900 text-xl font-bold mb-3 mt-4">Scan QR Code</h2>
            <p className="text-gray-400 text-xs font-medium leading-relaxed max-w-[220px] mb-12">
                Align QR Code within frame to scan which is in right side of camera
            </p>

            {/* QR Scanner Viz */}
            <div className="relative w-56 h-56 mb-16">
                {/* Corners: Red to Blue (#3B82F6) */}
                <div className="absolute top-0 left-0 w-10 h-10 border-l-[5px] border-t-[5px] border-[#3B82F6] rounded-tl-3xl"></div>
                <div className="absolute top-0 right-0 w-10 h-10 border-r-[5px] border-t-[5px] border-[#3B82F6] rounded-tr-3xl"></div>
                <div className="absolute bottom-0 left-0 w-10 h-10 border-l-[5px] border-b-[5px] border-[#3B82F6] rounded-bl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-10 h-10 border-r-[5px] border-b-[5px] border-[#3B82F6] rounded-br-3xl"></div>

                {/* QR Image */}
                <div className="absolute inset-6 opacity-30">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" 
                        alt="QR Code" 
                        className="w-full h-full object-contain mix-blend-multiply"
                    />
                </div>

                {/* Laser Line: Red to Blue */}
                <div className="absolute top-1/2 left-[-20%] right-[-20%] h-1.5 bg-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.6)] rounded-full animate-pulse z-10"></div>
                <div className="absolute top-1/2 left-[-20%] right-[-20%] h-12 bg-gradient-to-b from-[#3B82F6]/10 to-transparent transform -translate-y-1/2 pointer-events-none"></div>
            </div>

            <p className="text-gray-400 text-xs font-medium mb-auto">
                Scanning the QR Code...
            </p>

            {/* Button - Kept Orange as it wasn't specified to change */}
            <div className="w-full mt-8">
                 <button className="w-full bg-[#F97316] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 transition-all active:scale-[0.98]">
                    Put Camera Code
                </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ScanQrScreen;
