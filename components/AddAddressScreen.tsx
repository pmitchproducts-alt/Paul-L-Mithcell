import React from 'react';
import { ChevronLeft, Camera } from 'lucide-react';

interface AddAddressScreenProps {
  onBack: () => void;
}

const AddAddressScreen: React.FC<AddAddressScreenProps> = ({ onBack }) => {
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
        <h1 className="text-lg font-bold text-gray-900">Add New Address</h1>
        <button className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <Camera className="w-5 h-5 text-gray-800" strokeWidth={2} />
        </button>
      </header>

      <div className="px-5 space-y-4 flex-1 overflow-y-auto no-scrollbar pt-2">
        {/* Form Fields */}
        <InputField label="Name" defaultValue="Lucy martin" />
        <InputField label="Email Address" defaultValue="Lucymartin@gmail.com" />
        <InputField label="Phone No." defaultValue="+91 234 567 8900" />
        <InputField label="Address line1" defaultValue="A/234, Kigs Plazaa, Mithakhali," />
        <InputField label="Address line2" defaultValue="Ahmedabad, Gujarat" />
        <InputField label="Zipcode" defaultValue="380009" />
        <InputField label="State" defaultValue="Gujarat" />
        <InputField label="Country" defaultValue="India" />

        {/* Default Address Toggle */}
        <div className="flex items-center gap-3 py-2 cursor-pointer mt-2">
            <div className="relative flex items-center justify-center">
                 <div className="w-5 h-5 rounded-full border-2 border-[#F97316] flex items-center justify-center bg-white">
                    <div className="w-2.5 h-2.5 bg-[#F97316] rounded-full"></div>
                 </div>
            </div>
            <span className="text-gray-700 font-medium text-sm">Make Default shipping address</span>
        </div>

        {/* Save Button - Color changed to Orange as requested */}
        <button 
           onClick={onBack}
           className="w-full bg-[#F97316] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 transition-all active:scale-[0.98] mt-4 mb-8"
        >
            Save Address
        </button>
      </div>
    </div>
  );
};

const InputField = ({ label, defaultValue }: { label: string, defaultValue: string }) => (
    <div className="bg-white rounded-xl px-4 py-3.5 shadow-sm border border-transparent focus-within:border-orange-100 focus-within:ring-1 focus-within:ring-orange-100 transition-all">
        <label className="block text-[10px] text-gray-400 font-medium mb-1 tracking-wide">{label}</label>
        <input 
            type="text" 
            defaultValue={defaultValue}
            className="w-full text-sm font-bold text-gray-900 placeholder-gray-400 focus:outline-none bg-transparent"
        />
    </div>
);

export default AddAddressScreen;