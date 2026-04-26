import React from 'react';
import { ChevronLeft, Camera, Home, Building2, User, Phone, Mail, MapPin } from 'lucide-react';

interface DeliveryAddressScreenProps {
  onBack: () => void;
  onConfirm: () => void;
}

const DeliveryAddressScreen: React.FC<DeliveryAddressScreenProps> = ({ onBack, onConfirm }) => {
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
        <h1 className="text-lg font-bold text-gray-900">My Address</h1>
        <button className="relative w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <Camera className="w-5 h-5 text-gray-800" strokeWidth={2} />
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full ring-1 ring-white"></span>
        </button>
      </header>

      <div className="px-5 flex-1 overflow-y-auto no-scrollbar space-y-5 pt-2">
        
        {/* Home Address Card (Red -> Blue) */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
           <div className="flex justify-between items-start mb-5">
              <div className="flex items-center gap-3">
                 <Home className="w-8 h-8 text-[#3B82F6]" strokeWidth={1.5} />
                 <span className="font-bold text-gray-900 text-lg">Home</span>
              </div>
              <span className="bg-orange-50 text-[#F97316] text-[10px] font-bold px-2 py-1 rounded">
                 Default
              </span>
           </div>

           <div className="space-y-4 pl-1">
              <div className="flex items-center gap-4">
                 <div className="w-6 flex justify-center">
                    <User className="w-4 h-4 text-[#3B82F6] fill-[#3B82F6]" />
                 </div>
                 <span className="text-sm text-gray-600 font-medium">Lucy Martin</span>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-6 flex justify-center">
                    <Phone className="w-4 h-4 text-[#3B82F6] fill-[#3B82F6]" />
                 </div>
                 <span className="text-sm text-gray-600 font-medium">+91 234 567 8900</span>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-6 flex justify-center">
                    <Mail className="w-4 h-4 text-[#3B82F6] fill-[#3B82F6]" />
                 </div>
                 <span className="text-sm text-gray-600 font-medium">lucymartin@gmail.com</span>
              </div>
              <div className="flex items-start gap-4">
                 <div className="w-6 flex justify-center mt-0.5">
                    <MapPin className="w-4 h-4 text-[#3B82F6] fill-[#3B82F6]" />
                 </div>
                 <span className="text-sm text-gray-600 font-medium leading-relaxed">
                    A/234, Kigs Plazaa, Mithakhali,<br/>Ahmedabad, Gujarat, India - 380009
                 </span>
              </div>
           </div>
        </div>

        {/* Office Address Card (Green -> Orange) */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
           <div className="flex justify-between items-start mb-5">
              <div className="flex items-center gap-3">
                 <Building2 className="w-8 h-8 text-[#F97316]" strokeWidth={1.5} />
                 <span className="font-bold text-gray-900 text-lg">Office</span>
              </div>
           </div>

           <div className="space-y-4 pl-1">
              <div className="flex items-center gap-4">
                 <div className="w-6 flex justify-center">
                    <User className="w-4 h-4 text-[#F97316] fill-[#F97316]" />
                 </div>
                 <span className="text-sm text-gray-600 font-medium">John Martin</span>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-6 flex justify-center">
                    <Phone className="w-4 h-4 text-[#F97316] fill-[#F97316]" />
                 </div>
                 <span className="text-sm text-gray-600 font-medium">+91 567 890 2340</span>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-6 flex justify-center">
                    <Mail className="w-4 h-4 text-[#F97316] fill-[#F97316]" />
                 </div>
                 <span className="text-sm text-gray-600 font-medium">lucymartin@gmail.com</span>
              </div>
              <div className="flex items-start gap-4">
                 <div className="w-6 flex justify-center mt-0.5">
                    <MapPin className="w-4 h-4 text-[#F97316] fill-[#F97316]" />
                 </div>
                 <span className="text-sm text-gray-600 font-medium leading-relaxed">
                    B/104, Lawesh Tower, Pondichory,<br/>Ahmedabad, Gujarat, India - 382415
                 </span>
              </div>
           </div>
        </div>

      </div>

      <div className="px-5 mt-6">
         {/* Add New Address Button (Green -> Orange) */}
         <button 
            onClick={onConfirm}
            className="w-full bg-[#F97316] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-100 transition-all active:scale-[0.98]"
         >
            Add New Address
         </button>
      </div>
    </div>
  );
};

export default DeliveryAddressScreen;