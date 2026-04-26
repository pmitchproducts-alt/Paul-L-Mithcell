
import React from 'react';
import { Search, MapPin, Bell, User, ShoppingBag, Grid, Package } from 'lucide-react';

interface DesktopHeaderProps {
  onNavigate: (screen: string) => void;
  activeTab: string;
}

const DesktopHeader: React.FC<DesktopHeaderProps> = ({ onNavigate, activeTab }) => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 w-full hidden md:block">
      <div className="max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between gap-8">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer shrink-0"
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center p-2 shadow-sm">
             <ShoppingBag className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">ReviewMaster</span>
        </div>

        {/* Location Selector */}
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors shrink-0">
          <MapPin className="w-4 h-4 text-red-500" />
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold uppercase leading-tight">Deliver to</span>
            <span className="text-xs font-bold text-gray-700">Mithakhali, Navrangpura</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search for groceries, vegetables and more..."
            className="w-full bg-gray-50 border-transparent border focus:border-brand-blue focus:bg-white px-12 py-3 rounded-xl text-sm font-medium transition-all outline-none"
          />
        </div>

        {/* Nav Links */}
        <nav className="flex items-center gap-1">
          <NavLink 
            icon={<Grid className="w-5 h-5" />} 
            label="Categories" 
            active={activeTab === 'categories'} 
            onClick={() => onNavigate('categories')} 
          />
          <NavLink 
            icon={<Package className="w-5 h-5" />} 
            label="Orders" 
            active={activeTab === 'orders'} 
            onClick={() => onNavigate('orders')} 
          />
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 shrink-0">
          <button className="relative w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          
          <button 
            onClick={() => onNavigate('checkout')}
            className="flex items-center gap-3 bg-brand-blue/5 text-brand-blue px-5 py-2.5 rounded-xl hover:bg-brand-blue/10 transition-colors group"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-brand-blue text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">2</span>
            </div>
            <span className="font-bold text-sm">Cart</span>
          </button>

          <button 
            onClick={() => onNavigate('profile')}
            className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full border border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden">
               <img src="https://i.pravatar.cc/150?u=lucy" alt="Lucy" className="w-full h-full object-cover" />
            </div>
            <User className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-bold text-sm transition-colors ${active ? 'text-brand-blue bg-brand-blue/5' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default DesktopHeader;
