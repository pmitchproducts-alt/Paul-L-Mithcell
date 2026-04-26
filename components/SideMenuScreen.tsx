import React from 'react';
import { User, ShoppingBag, CreditCard, Heart, RefreshCw, Percent, MapPin, Bell, Settings, Headphones, LogOut } from 'lucide-react';

interface SideMenuScreenProps {
  onNavigate: (screen: string) => void;
  onSignOut: () => void;
}

const SideMenuScreen: React.FC<SideMenuScreenProps> = ({ onNavigate, onSignOut }) => {
  // Using 'orders' as active to match the screenshot provided
  const activeId = 'orders';

  const menuItems = [
    { id: 'profile', label: 'My Profile', icon: User, target: 'aboutMe' },
    { id: 'orders', label: 'My Orders', icon: ShoppingBag, target: 'orders' },
    { id: 'payment', label: 'My Payment', icon: CreditCard, target: 'myPayment' },
    { id: 'favourite', label: 'My Favourite', icon: Heart, target: 'myFavourite' },
    { id: 'transactions', label: 'Transactions', icon: RefreshCw, target: 'home' }, // Placeholder
    { id: 'promocode', label: 'Promocode', icon: Percent, target: 'promocode' }, // Changed target to 'promocode' list
    { id: 'address', label: 'My Address', icon: MapPin, target: 'deliveryAddress' },
    { id: 'notification', label: 'Notification', icon: Bell, target: 'notification' },
    { id: 'settings', label: 'Settings', icon: Settings, target: 'home' }, // Placeholder
    { id: 'support', label: 'Support Center', icon: Headphones, target: 'liveChat' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center font-sans md:p-12">
       <div className="w-full max-w-6xl flex flex-col md:flex-row bg-white rounded-[40px] shadow-2xl overflow-hidden min-h-[700px] border border-gray-100">
          
          {/* Dashboard Sidebar */}
          <div className="w-full md:w-80 bg-brand-blue flex flex-col p-10 text-white shrink-0">
             {/* Header */}
             <div className="flex flex-col items-center text-center gap-4 mb-12">
                <div className="w-24 h-24 rounded-[32px] bg-white/20 p-1 shadow-2xl backdrop-blur-md">
                    <div className="w-full h-full rounded-[28px] bg-white overflow-hidden border-2 border-white shadow-inner">
                       <img 
                           src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" 
                           alt="Lucy" 
                           className="w-full h-full object-cover"
                       />
                    </div>
                </div>
                <div>
                   <h2 className="font-black text-2xl tracking-tight">Lucy Martin</h2>
                   <p className="text-sm text-blue-100 font-bold opacity-80">Premium Member</p>
                </div>
             </div>

             {/* Sign Out (Desktop) */}
             <div className="mt-auto hidden md:block">
                <button onClick={onSignOut} className="w-full flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-4 rounded-2xl transition-all font-black text-sm uppercase tracking-widest border border-white/10">
                   <LogOut className="w-5 h-5" /> Sign Out
                </button>
             </div>
          </div>

          {/* Dashboard Content */}
          <div className="flex-1 p-8 md:p-16 overflow-y-auto bg-white">
             <div className="mb-12">
                <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 uppercase tracking-tight">User Dashboard</h1>
                <p className="text-gray-400 font-bold">Manage your account, orders and settings</p>
             </div>

             {/* Menu Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {menuItems.map((item) => {
                    const isActive = item.id === activeId;
                    return (
                       <button
                           key={item.id}
                           onClick={() => onNavigate(item.target)}
                           className={`group flex flex-col items-start gap-4 p-8 rounded-[32px] transition-all duration-300 w-full text-left border-2
                              ${isActive 
                                 ? 'bg-blue-50/50 border-brand-blue shadow-xl shadow-blue-50' 
                                 : 'bg-white border-gray-50 hover:border-blue-100 hover:bg-gray-50/50 hover:-translate-y-1'
                              }
                           `}
                       >
                           <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 ${isActive ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-brand-blue group-hover:text-white'}`}>
                              <item.icon className="w-7 h-7" strokeWidth={2.5} />
                           </div>
                           <div>
                              <span className={`text-lg font-black tracking-tight block ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                                  {item.label}
                              </span>
                              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1 block">Account Section</span>
                           </div>
                       </button>
                    );
                })}
             </div>

             {/* Mobile Sign Out */}
             <div className="md:hidden pt-8 border-t border-gray-100">
                <button onClick={onSignOut} className="w-full flex items-center justify-center gap-3 bg-rose-50 text-rose-500 hover:bg-rose-100 px-6 py-5 rounded-3xl transition-all font-black text-lg uppercase tracking-tight">
                   <LogOut className="w-6 h-6" /> Sign Out
                </button>
             </div>
          </div>
       </div>
    </div>
  );
};

export default SideMenuScreen;