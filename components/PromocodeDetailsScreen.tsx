import React, { useState } from 'react';
import { ChevronLeft, ShoppingBag } from 'lucide-react';

interface PromocodeDetailsScreenProps {
  onBack: () => void;
}

const PromocodeDetailsScreen: React.FC<PromocodeDetailsScreenProps> = ({ onBack }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCollect = () => {
    // Copy the code to clipboard
    const promoCode = "BLACKCOFFEE30";
    
    // Using simple promise handling for clipboard API
    // Fallback to simpler alerting or state update if clipboard API fails (e.g. non-secure context)
    if (navigator.clipboard) {
        navigator.clipboard.writeText(promoCode)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
            })
            .catch((err) => {
                console.error("Clipboard write failed", err);
                setIsCopied(true); // Show visual feedback regardless for demo purposes
                setTimeout(() => setIsCopied(false), 2000);
            });
    } else {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans relative">
       {/* Header */}
       <header className="flex justify-between items-center px-6 py-5 bg-transparent sticky top-0 z-40 bg-gray-50/95 backdrop-blur-sm">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Promocode Details</h1>
        <button className="relative w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <ShoppingBag className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
          {/* Notification Dot */}
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#F97316] rounded-full ring-1 ring-white"></span>
        </button>
      </header>

      <div className="px-5 pt-4">
        {/* Coupon Card - Changed Left side Brown to Blue (#1E40AF) */}
        <div className="w-full h-44 rounded-2xl flex relative overflow-hidden shadow-lg shadow-orange-200">
            {/* Left Side - Blue replacing the previous Brown (#9A3412) */}
            <div className="w-[32%] bg-[#1E40AF] flex flex-col items-center justify-center relative">
                 <div className="border-r-2 border-dashed border-white/30 h-full absolute right-0 top-0"></div>
                 <span className="text-white text-4xl font-bold leading-none">30%</span>
                 <span className="text-white text-xl font-medium">Off</span>
            </div>
            
            {/* Right Side - Standard Orange (#F97316) */}
            <div className="flex-1 bg-[#F97316] p-6 relative flex flex-col justify-center">
                 {/* Decorative Waves */}
                 <div className="absolute inset-0 opacity-20 pointer-events-none">
                     <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="none">
                         <path d="M0,50 C50,20 100,80 200,50" stroke="white" strokeWidth="2" fill="none" />
                         <path d="M0,30 C60,60 120,0 200,40" stroke="white" strokeWidth="2" fill="none" />
                         <path d="M0,70 C40,40 150,90 200,60" stroke="white" strokeWidth="2" fill="none" />
                     </svg>
                 </div>

                 <h2 className="text-white text-2xl font-medium leading-tight mb-1 relative z-10">
                     Black<br/>Coffee
                 </h2>
                 
                 <div className="absolute top-4 right-4 z-20">
                     <button 
                        onClick={handleCollect}
                        className="bg-white text-[#F97316] text-[10px] font-bold px-3 py-1 rounded-md shadow-sm active:scale-95 transition-transform min-w-[60px]"
                     >
                         {isCopied ? 'Copied' : 'Collect'}
                     </button>
                 </div>

                 <div className="absolute bottom-4 right-4 z-20">
                     <span className="text-white/80 text-[10px] font-medium">Exp: Jan 30, 2021</span>
                 </div>

                 {/* Right Edge Cutout - Half Circle */}
                 <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-8 bg-gray-50 rounded-full z-10"></div>
            </div>
        </div>

        {/* Details Content */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm min-h-[400px]">
            {/* Title - Orange */}
            <h2 className="text-[#F97316] text-xl font-bold mb-2">30 % Off only for you.</h2>
            <p className="text-gray-500 text-sm font-medium mb-8">
                To get this discount and apply the voucher
            </p>

            <div className="space-y-6 mb-8">
                <BulletPoint text="Redeemable at Black Coffee and all Nescafe products" />
                <BulletPoint text="Not Valid with any other Discount and Promotion" />
                <BulletPoint text="Not Valid with Cash payment" />
            </div>

            {/* Exp Badge - Orange */}
            <div className="inline-block bg-[#F97316] text-white px-6 py-3 rounded-xl text-xs font-bold shadow-md shadow-orange-100">
                Exp: Jan 30, 2021
            </div>
        </div>

      </div>
    </div>
  );
};

const BulletPoint = ({ text }: { text: string }) => (
    <div className="flex items-start gap-4">
        {/* Bullet - Orange */}
        <div className="w-2 h-2 rounded-full bg-[#F97316] mt-1.5 flex-shrink-0"></div>
        <p className="text-gray-700 text-sm font-medium leading-relaxed">{text}</p>
    </div>
);

export default PromocodeDetailsScreen;