import React, { useState } from 'react';
import { ChevronLeft, ChevronDown, ChevronUp, User, CreditCard, Calendar, Lock, ScanLine } from 'lucide-react';

interface CreditCardsScreenProps {
  onBack: () => void;
}

const CreditCardsScreen: React.FC<CreditCardsScreenProps> = ({ onBack }) => {
  const [expandedId, setExpandedId] = useState<string>('1');

  const cards = [
    { 
      id: '1', 
      type: 'visa', 
      name: 'Visa Card/Visa Debit', 
      number: 'xxxx xxxx xxxx 1234', 
      expiry: '24/08', 
      cvv: '789', 
      isDefault: true 
    },
    { 
      id: '2', 
      type: 'mastercard', 
      name: 'Master Card', 
      number: 'xxxx xxxx xxxx 1234', 
      expiry: '24/08', 
      cvv: '789', 
      isDefault: false 
    },
    { 
      id: '3', 
      type: 'visa', 
      name: 'Visa Card', 
      number: 'xxxx xxxx xxxx 1234', 
      expiry: '24/08', 
      cvv: '789', 
      isDefault: false 
    },
    { 
      id: '4', 
      type: 'mastercard', 
      name: 'Master Card', 
      number: 'xxxx xxxx xxxx 1234', 
      expiry: '24/08', 
      cvv: '789', 
      isDefault: false 
    },
    { 
      id: '5', 
      type: 'visa', 
      name: 'Visa Card', 
      number: 'xxxx xxxx xxxx 1234', 
      expiry: '24/08', 
      cvv: '789', 
      isDefault: false 
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans pb-24">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-5 sticky top-0 z-40 bg-gray-50/95 backdrop-blur-sm">
        <button 
          onClick={onBack} 
          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Credit Cards</h1>
        <button className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <ScanLine className="w-5 h-5 text-gray-800" strokeWidth={2} />
        </button>
      </header>

      <div className="px-5 space-y-4 overflow-y-auto no-scrollbar pt-4">
        {cards.map((card) => {
          const isExpanded = expandedId === card.id;
          return (
            <div key={card.id} className="relative group">
               {/* Default Badge - Changed to Orange */}
               {card.isDefault && (
                 <div className="absolute -top-3 left-4 z-20 bg-orange-50 text-[#F97316] text-[10px] font-bold px-3 py-1 rounded-sm shadow-sm">
                   Default
                 </div>
               )}
               
               <div className={`bg-white rounded-2xl p-5 shadow-sm transition-all duration-300 border border-transparent hover:shadow-md ${isExpanded ? 'shadow-lg ring-1 ring-black/5' : ''}`}>
                  {/* Header Row */}
                  <div className="flex items-start justify-between cursor-pointer" onClick={() => toggleExpand(card.id)}>
                     <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full p-2 shadow-sm border border-gray-100">
                           <img 
                             src={card.type === 'visa' 
                               ? 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg' 
                               : 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg'} 
                             alt={card.type}
                             className="w-full h-full object-contain"
                           />
                        </div>
                        <div>
                           <h3 className="font-bold text-gray-900 text-sm">{card.name}</h3>
                           <p className="text-gray-400 text-xs mt-1 tracking-wider">{card.number}</p>
                           <p className="text-gray-400 text-xs mt-1 font-medium">
                              <span className="mr-3">Expiry: <span className="text-gray-900">{card.expiry}</span></span>
                              <span>CVV: <span className="text-gray-900">{card.cvv}</span></span>
                           </p>
                        </div>
                     </div>
                     <button className={`w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full hover:bg-gray-100 transition-colors ${isExpanded ? 'bg-gray-100' : ''}`}>
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-gray-600" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
                     </button>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                     <div className="mt-6 space-y-3 animate-fadeIn">
                        <InputField icon={User} placeholder="Name on the Card" />
                        <InputField icon={CreditCard} placeholder="Card Number" />
                        <div className="flex gap-3">
                           <InputField icon={Calendar} placeholder="Month/Year" />
                           <InputField icon={Lock} placeholder="CVV" />
                        </div>
                     </div>
                  )}
               </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const InputField = ({ icon: Icon, placeholder }: { icon: any, placeholder: string }) => (
  <div className="w-full bg-[#FAFAFA] rounded-xl px-4 py-3.5 flex items-center gap-4 border border-transparent focus-within:border-gray-200 transition-colors">
     <div className="w-8 h-8 rounded-full bg-[#FFF1F2] flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-[#F43F5E]" strokeWidth={2.5} />
     </div>
     <input 
        type="text"
        placeholder={placeholder}
        disabled
        className="text-sm text-gray-700 font-medium bg-transparent w-full focus:outline-none placeholder-gray-500"
     />
  </div>
);

export default CreditCardsScreen;