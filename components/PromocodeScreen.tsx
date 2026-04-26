import React from 'react';
import { ChevronLeft, ShoppingBag } from 'lucide-react';

interface PromocodeScreenProps {
  onBack: () => void;
  onNavigateToDetails: () => void;
}

const PromocodeScreen: React.FC<PromocodeScreenProps> = ({ onBack, onNavigateToDetails }) => {
  const coupons = [
    {
      id: 1,
      percentage: '30%',
      title: 'Black\nCoffee',
      expiry: 'Jan 30, 2021',
      bgLeft: 'bg-[#93282A]',
      bgRight: 'bg-[#EF4444]',
      buttonColor: 'text-[#F04445]',
    },
    {
      id: 2,
      percentage: '25%',
      title: 'Oreo\nBiscuits',
      expiry: 'Feb 28, 2021',
      bgLeft: 'bg-[#2B478B]',
      bgRight: 'bg-[#3B70F3]',
      buttonColor: 'text-[#3B70F3]',
    },
    {
      id: 3,
      percentage: '49%',
      title: 'Lifeboy\nHandwash',
      expiry: 'Mar 02, 2021',
      bgLeft: 'bg-[#985F31]',
      bgRight: 'bg-[#F29446]',
      buttonColor: 'text-[#F29446]',
    },
    {
      id: 4,
      percentage: '60%',
      title: 'Sunflower\nOil',
      expiry: 'Mar 02, 2021',
      bgLeft: 'bg-[#1D6F39]',
      bgRight: 'bg-[#33C763]',
      buttonColor: 'text-[#33C763]',
    },
    {
      id: 5,
      percentage: '53%',
      title: 'Amul\nChocolate',
      expiry: 'Mar 02, 2021',
      bgLeft: 'bg-[#7C2D8F]',
      bgRight: 'bg-[#A86AD6]',
      buttonColor: 'text-[#A86AD6]',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans pb-24">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-5 bg-transparent sticky top-0 z-40 bg-gray-50/95 backdrop-blur-sm">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Promocode</h1>
        <button className="relative w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <ShoppingBag className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#F97316] rounded-full ring-1 ring-white"></span>
        </button>
      </header>

      <div className="px-5 space-y-4 pt-2 overflow-y-auto no-scrollbar flex-1">
        {coupons.map((coupon) => (
          <div 
            key={coupon.id} 
            onClick={onNavigateToDetails}
            className="w-full h-36 rounded-2xl flex relative overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow group"
          >
            {/* Left Side */}
            <div className={`w-[32%] ${coupon.bgLeft} flex flex-col items-center justify-center relative transition-colors`}>
                 <div className="border-r-2 border-dashed border-white/30 h-full absolute right-0 top-0"></div>
                 <span className="text-white text-3xl font-bold leading-none">{coupon.percentage}</span>
                 <span className="text-white text-lg font-medium">Off</span>
            </div>
            
            {/* Right Side */}
            <div className={`flex-1 ${coupon.bgRight} p-5 relative flex flex-col justify-center pl-6 transition-colors`}>
                 {/* Decorative Waves */}
                 <div className="absolute inset-0 opacity-20 pointer-events-none">
                     <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="none">
                         <path d="M0,50 C50,20 100,80 200,50" stroke="white" strokeWidth="2" fill="none" />
                         <path d="M0,30 C60,60 120,0 200,40" stroke="white" strokeWidth="2" fill="none" />
                         <path d="M0,70 C40,40 150,90 200,60" stroke="white" strokeWidth="2" fill="none" />
                     </svg>
                 </div>

                 <h2 className="text-white text-xl font-medium leading-tight mb-1 relative z-10 whitespace-pre-line drop-shadow-sm">
                     {coupon.title}
                 </h2>
                 
                 <div className="absolute top-4 right-4 z-20">
                     <button className={`bg-white ${coupon.buttonColor} text-[10px] font-bold px-3 py-1 rounded-md shadow-sm active:scale-95 transition-transform`}>
                         Collect
                     </button>
                 </div>

                 <div className="absolute bottom-4 right-4 z-20">
                     <span className="text-white/80 text-[9px] font-medium tracking-wide">Exp: {coupon.expiry}</span>
                 </div>

                 {/* Right Edge Cutout - Half Circle */}
                 <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-8 bg-gray-50 rounded-full z-10"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromocodeScreen;