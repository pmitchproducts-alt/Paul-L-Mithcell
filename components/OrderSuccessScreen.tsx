import React from 'react';
import { ChevronLeft, ShoppingBag } from 'lucide-react';

interface OrderSuccessScreenProps {
  onBack: () => void;
  onTrackOrder?: () => void;
}

const OrderSuccessScreen: React.FC<OrderSuccessScreenProps> = ({ onBack, onTrackOrder }) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans pb-6">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-5 bg-transparent sticky top-0 z-40 bg-gray-50/95 backdrop-blur-sm">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Order Success</h1>
        <button className="relative w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <ShoppingBag className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
          {/* Notification Dot - Orange */}
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#F97316] rounded-full ring-1 ring-white"></span>
        </button>
      </header>

      {/* Main Card */}
      <div className="flex-1 px-5 pb-5 flex">
        {/* Changed Green to Blue (#3B82F6) */}
        <div className="w-full bg-[#3B82F6] rounded-3xl relative overflow-hidden flex flex-col items-center justify-center p-8 shadow-xl shadow-blue-200">
           {/* Background Decorations (Glow) */}
           <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-[80px] opacity-20"></div>
           </div>

           {/* Icon with Fireworks SVG */}
           <div className="relative mb-12 mt-10">
               {/* Firework lines behind */}
               <div className="absolute inset-0 flex items-center justify-center -z-10 scale-150">
                   <svg viewBox="0 0 200 200" className="w-72 h-72 animate-pulse">
                      <g fill="none" strokeWidth="2" strokeLinecap="round">
                         {/* Rays - using slightly lighter/different shades for festive look on blue */}
                         <path d="M100 20 L100 50" stroke="#93C5FD" /> {/* Light Blue */}
                         <path d="M100 150 L100 180" stroke="#FDBA74" /> {/* Orange */}
                         <path d="M20 100 L50 100" stroke="#FCA5A5" /> {/* Red */}
                         <path d="M150 100 L180 100" stroke="#86EFAC" /> {/* Green */}
                         
                         <path d="M43 43 L65 65" stroke="#FCD34D" /> {/* Yellow */}
                         <path d="M135 135 L157 157" stroke="#A5B4FC" /> {/* Indigo */}
                         <path d="M157 43 L135 65" stroke="#FDA4AF" /> {/* Pink */}
                         <path d="M43 157 L65 135" stroke="#6EE7B7" /> {/* Teal */}
                         
                         {/* Circles/Confetti */}
                         <circle cx="130" cy="50" r="3" fill="#FCD34D" stroke="none" />
                         <circle cx="50" cy="140" r="2" fill="#FCA5A5" stroke="none" />
                         <circle cx="40" cy="60" r="2" fill="#93C5FD" stroke="none" />
                         <circle cx="160" cy="120" r="3" fill="#86EFAC" stroke="none" />
                         <circle cx="80" cy="30" r="2" fill="#FDBA74" stroke="none" />
                         <circle cx="170" cy="90" r="2" fill="#A5B4FC" stroke="none" />
                         <circle cx="110" cy="160" r="3" fill="#FDA4AF" stroke="none" />
                         <circle cx="30" cy="110" r="2" fill="#6EE7B7" stroke="none" />
                      </g>
                   </svg>
               </div>
               
               <ShoppingBag className="w-28 h-28 text-white drop-shadow-lg" strokeWidth={1.5} />
           </div>

           {/* Text Content */}
           <h2 className="text-white text-3xl font-bold text-center mb-6 leading-tight drop-shadow-md">
             Your order was<br />Successful!
           </h2>
           <p className="text-white/80 text-center text-sm leading-relaxed mb-12 max-w-xs font-medium">
             Thanks for the order. You'll get<br/>a response within a few minutes...
           </p>

           {/* Button - Changed Navy Blue to Orange (#F97316) */}
           <button 
             className="w-full bg-[#F97316] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-900/20 transition-all active:scale-[0.98] mt-auto"
             onClick={onTrackOrder || onBack}
           >
             Track Order
           </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessScreen;