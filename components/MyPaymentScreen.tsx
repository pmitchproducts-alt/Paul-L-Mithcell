import React, { useState } from 'react';
import { ChevronLeft, ShoppingBag, MoreHorizontal, ChevronRight, Wallet } from 'lucide-react';

interface MyPaymentScreenProps {
  onBack: () => void;
}

const MyPaymentScreen: React.FC<MyPaymentScreenProps> = ({ onBack }) => {
  const [selectedId, setSelectedId] = useState('card');

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
        <h1 className="text-lg font-bold text-gray-900">My Payment</h1>
        <button className="relative w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <ShoppingBag className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
          {/* Notification Dot - Changed Red to Blue per request */}
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#3B82F6] rounded-full ring-1 ring-white"></span>
        </button>
      </header>

      <div className="px-5 pt-2 flex-1 overflow-y-auto no-scrollbar">
         {/* My Card Section */}
         <div className="bg-white rounded-2xl p-5 mb-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900 text-sm">My Card</h3>
                <button className="text-gray-400">
                    <MoreHorizontal className="w-5 h-5" />
                </button>
            </div>

            {/* Visual Card - Green as per screenshot */}
            <div className="w-full aspect-[1.586] rounded-2xl p-6 relative overflow-hidden shadow-lg shadow-green-900/20 group">
                {/* Green Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#10B981] via-[#059669] to-[#047857] z-0"></div>
                {/* Decorative Shapes */}
                 <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
                     <div className="absolute top-[-50%] right-[-50%] w-[100%] h-[200%] bg-gradient-to-l from-black to-transparent transform rotate-45"></div>
                     <div className="absolute bottom-[-20%] left-[-20%] w-[80%] h-[80%] bg-gradient-to-tr from-white to-transparent blur-3xl opacity-30"></div>
                 </div>

                <div className="relative z-10 h-full flex flex-col justify-between text-white">
                    <div className="italic font-bold text-2xl tracking-tighter opacity-90">VISA</div>
                    <div className="space-y-4">
                         <div className="font-mono text-xl tracking-widest flex gap-4 drop-shadow-md">
                            <span>7788</span>
                            <span>5002</span>
                            <span>5612</span>
                            <span>1234</span>
                         </div>
                         <div className="flex justify-between items-end">
                            <div>
                                <div className="text-[7px] uppercase tracking-widest opacity-70 mb-0.5 font-semibold">Card Holder</div>
                                <div className="text-xs font-bold tracking-widest uppercase text-shadow-sm">Lucy Martin</div>
                            </div>
                            <div>
                                <div className="text-[7px] uppercase tracking-widest opacity-70 mb-0.5 font-semibold">Exp Date</div>
                                <div className="text-xs font-bold tracking-widest text-shadow-sm">24/08</div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
         </div>

         {/* Payment Methods List */}
         <div className="space-y-4">
            {/* Credit Card Item */}
            <PaymentMethodItem
                id="card"
                isSelected={selectedId === 'card'}
                onSelect={() => setSelectedId('card')}
                icon={<VisaIcon />}
                label="Credit Card/Debit Card"
            />

             {/* PayPal Item */}
             <PaymentMethodItem
                id="paypal"
                isSelected={selectedId === 'paypal'}
                onSelect={() => setSelectedId('paypal')}
                icon={<PayPalIcon />}
                label="PayPal"
            />

             {/* Cash Item */}
             <PaymentMethodItem
                id="cash"
                isSelected={selectedId === 'cash'}
                onSelect={() => setSelectedId('cash')}
                icon={<CashIcon />}
                label="Cash On Delivery"
            />
         </div>
      </div>
    </div>
  )
}

const PaymentMethodItem = ({ id, isSelected, onSelect, icon, label }: { id: string, isSelected: boolean, onSelect: () => void, icon: React.ReactNode, label: string }) => {
    return (
        <div 
          onClick={onSelect}
          className={`bg-white rounded-2xl p-5 shadow-sm cursor-pointer transition-all border ${isSelected ? 'border-blue-100 ring-1 ring-blue-50' : 'border-transparent'}`}
        >
             {/* Selection Header */}
             <div className="flex items-center gap-3 mb-4">
                 <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? 'border-[#3B82F6]' : 'border-gray-300'}`}>
                     {isSelected && <div className="w-2.5 h-2.5 bg-[#3B82F6] rounded-full" />}
                 </div>
                 <span className={`text-sm font-bold ${isSelected ? 'text-[#3B82F6]' : 'text-gray-800'}`}>
                    Set as Primary
                 </span>
             </div>

             {/* Content */}
             <div className="flex items-center justify-between pl-1">
                 <div className="flex items-center gap-4">
                     {icon}
                     <span className="text-sm font-medium text-gray-700">{label}</span>
                 </div>
                 <button className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                 </button>
             </div>
        </div>
    )
}

// Helper Icons
const VisaIcon = () => (
  <div className="w-10 h-7 bg-[#1a1f71] rounded flex items-center justify-center">
    <span className="text-white text-[10px] font-bold italic tracking-tighter">VISA</span>
  </div>
);

const PayPalIcon = () => (
  <div className="w-10 h-10 flex items-center justify-center">
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#003087]">
        <path d="M7.5 20l.8-5h2.7c3.8 0 5.5-1.9 5.5-5s-1.7-5-5.5-5h-4l-3 15h3.5z" />
    </svg>
  </div>
);

const CashIcon = () => (
  <div className="w-10 h-10 flex items-center justify-center bg-yellow-50 rounded-lg border border-yellow-100">
    <Wallet className="w-5 h-5 text-yellow-600" />
  </div>
);

export default MyPaymentScreen;