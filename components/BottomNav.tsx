import React from 'react';
import { Home, Grid, Package, User } from 'lucide-react';

interface BottomNavProps {
  onNavigate?: (screen: string) => void;
  activeTab?: string;
}

const BottomNav: React.FC<BottomNavProps> = ({ onNavigate, activeTab }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      {/* Background SVG shape with curve using drop-shadow filter for the border effect */}
      <div className="absolute bottom-0 w-full h-[80px] z-0 pointer-events-none filter drop-shadow-[0_-1px_3px_rgba(0,0,0,0.05)] text-white">
        <svg 
          viewBox="0 0 375 80" 
          fill="currentColor" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Path draws a box with a hill in the center */}
          <path 
            d="M0 20 L135 20 C145 20 152 15 158 8 C166 -2 187.5 -2 217 8 C223 15 230 20 240 20 L375 20 V80 H0 V20 Z" 
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex justify-between items-end px-6 pb-2 h-[80px] max-w-md mx-auto">
        
        <button 
          onClick={() => onNavigate?.('home')}
          className={`flex flex-col items-center gap-1 w-16 mb-1 ${activeTab === 'home' ? 'text-brand-blue' : 'text-gray-500 hover:text-brand-blue'}`}
        >
          <Home className="w-6 h-6" strokeWidth={2} />
          <span className="text-[10px] font-medium">Home</span>
        </button>
        
        <button 
          onClick={() => onNavigate?.('categories')}
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-brand-blue w-16 mb-1"
        >
          <Grid className="w-6 h-6" strokeWidth={2} />
          <span className="text-[10px] font-medium">Categories</span>
        </button>

        {/* Center SmartBag Button */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[-15px]"> 
          <button 
            onClick={() => onNavigate?.('checkout')}
            className="w-16 h-16 rounded-full bg-white flex items-center justify-center p-1 shadow-sm active:scale-95 transition-transform"
          >
             <div className="w-full h-full rounded-full bg-gradient-to-b from-[#3B82F6] to-[#2563EB] flex flex-col items-center justify-center border-2 border-white shadow-inner relative overflow-hidden">
                {/* Gloss effect */}
                <div className="absolute top-0 w-full h-1/2 bg-white/10 rounded-t-full"></div>
                
                {/* Bag Icon Placeholder */}
                <img 
                  src="https://foodbagusa.com/wp-content/uploads/2026/01/Smartbag-icon.png" 
                  alt="Bag"
                  className="w-8 h-8 object-contain mb-[-2px] drop-shadow-md"
                />
                
                <span className="text-[9px] text-white font-bold tracking-tight leading-none drop-shadow-sm">
                  SmartBag
                </span>
             </div>
          </button>
        </div>

        <button 
          onClick={() => onNavigate?.('orders')}
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-brand-blue w-16 mb-1"
        >
          <Package className="w-6 h-6" strokeWidth={2} />
          <span className="text-[10px] font-medium">Orders</span>
        </button>
        
        <button 
          onClick={() => onNavigate?.('profile')}
          className={`flex flex-col items-center gap-1 w-16 mb-1 ${activeTab === 'profile' ? 'text-brand-blue' : 'text-gray-500 hover:text-brand-blue'}`}
        >
          <User className="w-6 h-6" strokeWidth={2} />
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;