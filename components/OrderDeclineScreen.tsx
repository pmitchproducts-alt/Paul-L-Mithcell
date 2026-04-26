import React from 'react';
import { ChevronLeft, ShoppingBag } from 'lucide-react';

interface OrderDeclineScreenProps {
  onBack: () => void;
}

const OrderDeclineScreen: React.FC<OrderDeclineScreenProps> = ({ onBack }) => {
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
        <h1 className="text-lg font-bold text-gray-900">Order Decline</h1>
        <button className="relative w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <ShoppingBag className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
          {/* Notification Dot - Changed Red to Orange */}
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#F97316] rounded-full ring-1 ring-white"></span>
        </button>
      </header>

      {/* Main Card */}
      <div className="flex-1 px-5 pb-5 flex">
        {/* Changed Navy Blue to Blue (#1E40AF) */}
        <div className="w-full bg-[#1E40AF] rounded-3xl relative overflow-hidden flex flex-col items-center justify-center p-8 shadow-xl shadow-blue-200">
           {/* Background Decorations (Fireworks effect) */}
           <div className="absolute inset-0 opacity-10 pointer-events-none">
              {/* Center burst */}
              <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-[60px]"></div>
           </div>

           {/* Icon with Fireworks SVG manually drawn */}
           <div className="relative mb-12 mt-10">
               {/* Firework lines behind */}
               <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20 scale-150">
                   <svg viewBox="0 0 200 200" className="w-64 h-64 text-white animate-pulse">
                      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                         {/* Rays */}
                         <path d="M100 20 L100 50" />
                         <path d="M100 150 L100 180" />
                         <path d="M20 100 L50 100" />
                         <path d="M150 100 L180 100" />
                         <path d="M43 43 L65 65" />
                         <path d="M135 135 L157 157" />
                         <path d="M157 43 L135 65" />
                         <path d="M43 157 L65 135" />
                         {/* Circles */}
                         <circle cx="130" cy="50" r="3" fill="currentColor" />
                         <circle cx="50" cy="140" r="2" fill="currentColor" />
                         <circle cx="40" cy="60" r="2" fill="currentColor" />
                         <circle cx="160" cy="120" r="3" fill="currentColor" />
                         <circle cx="80" cy="30" r="2" fill="currentColor" />
                         <circle cx="170" cy="90" r="2" fill="currentColor" />
                      </g>
                   </svg>
               </div>
               
               <ShoppingBag className="w-28 h-28 text-white" strokeWidth={1.5} />
           </div>

           {/* Text Content */}
           <h2 className="text-white text-3xl font-bold text-center mb-6 leading-tight">
             Sorry, Your Order<br />has failed
           </h2>
           <p className="text-white/70 text-center text-sm leading-relaxed mb-12 max-w-xs font-medium">
             Sorry, somethings went wrong.<br/>Please try again to continue your order.
           </p>

           {/* Button - Changed Red to Orange */}
           <button 
             className="w-full bg-[#F97316] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-900/20 transition-all active:scale-[0.98] mt-auto"
             onClick={onBack}
           >
             Try Again
           </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDeclineScreen;