import React from 'react';
import { ChevronLeft, ScanLine, CreditCard, User, Calendar, Lock } from 'lucide-react';

interface AddCardScreenProps {
  onBack: () => void;
}

const AddCardScreen: React.FC<AddCardScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-5 bg-transparent sticky top-0 z-40 bg-gray-50/95 backdrop-blur-sm">
        <button 
          onClick={onBack} 
          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Add New Credit Card</h1>
        <button className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <ScanLine className="w-5 h-5 text-gray-800" strokeWidth={2} />
        </button>
      </header>

      <div className="flex-1 px-5 pt-2 pb-8 overflow-y-auto no-scrollbar">
        {/* Card Preview */}
        <div className="w-full aspect-[1.586] rounded-2xl p-6 relative overflow-hidden shadow-2xl shadow-red-900/20 mb-8 transform transition-transform hover:scale-[1.01] duration-500 ease-out group">
          {/* Background Gradient & Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8E1C27] via-[#A62432] to-[#C43845] z-0"></div>
          
          {/* Geometric shapes overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
             {/* Big Triangle */}
             <div className="absolute top-[-50%] right-[-50%] w-[100%] h-[200%] bg-gradient-to-l from-black to-transparent transform rotate-45"></div>
             {/* Highlight */}
             <div className="absolute bottom-[-20%] left-[-20%] w-[80%] h-[80%] bg-gradient-to-tr from-white to-transparent blur-3xl opacity-30"></div>
             {/* Angular slice */}
             <div className="absolute top-0 right-[30%] w-[1px] h-[200%] bg-white/10 transform rotate-[15deg] origin-top"></div>
             <div className="absolute top-0 right-[15%] w-[100px] h-[200%] bg-white/5 transform rotate-[15deg] origin-top blur-sm"></div>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-between text-white">
            <div className="flex justify-between items-start">
               {/* Visa Logo */}
               <div className="italic font-bold text-2xl tracking-tighter opacity-90">VISA</div>
            </div>

            <div className="space-y-6">
              <div className="font-mono text-2xl tracking-widest drop-shadow-md flex justify-between w-full">
                 <span>9658</span>
                 <span>2145</span>
                 <span>8452</span>
                 <span>6547</span>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[8px] text-white/60 uppercase tracking-widest mb-1 font-semibold">Card Holder</div>
                  <div className="font-medium tracking-widest text-sm uppercase text-shadow-sm">LUCY MARTIN</div>
                </div>
                <div className="text-right">
                  <div className="text-[8px] text-white/60 uppercase tracking-widest mb-1 font-semibold">Exp Date</div>
                  <div className="font-medium tracking-widest text-sm text-shadow-sm">24/08</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 mb-8">
            {/* Name */}
            <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm border border-transparent focus-within:border-orange-100 focus-within:ring-1 focus-within:ring-orange-100 transition-all">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-500">
                    <User className="w-5 h-5" />
                </div>
                <input 
                  type="text" 
                  placeholder="Name on the Card" 
                  className="flex-1 w-full text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent" 
                />
            </div>

            {/* Card Number */}
            <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm border border-transparent focus-within:border-orange-100 focus-within:ring-1 focus-within:ring-orange-100 transition-all">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-500">
                    <CreditCard className="w-5 h-5" />
                </div>
                <input 
                  type="text" 
                  placeholder="Card Number" 
                  className="flex-1 w-full text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent" 
                />
            </div>

            <div className="flex gap-4">
                 {/* Month/Year */}
                <div className="flex-1 bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm border border-transparent focus-within:border-orange-100 focus-within:ring-1 focus-within:ring-orange-100 transition-all">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-500">
                        <Calendar className="w-5 h-5" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Month/Year" 
                      className="flex-1 w-full text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent min-w-0" 
                    />
                </div>

                 {/* CVV */}
                 <div className="flex-1 bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm border border-transparent focus-within:border-orange-100 focus-within:ring-1 focus-within:ring-orange-100 transition-all">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-500">
                        <Lock className="w-5 h-5" />
                    </div>
                    <input 
                      type="password" 
                      placeholder="CVV" 
                      className="flex-1 w-full text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent min-w-0" 
                    />
                </div>
            </div>
        </div>
        
        {/* Submit Button */}
        <button 
           onClick={onBack}
           className="w-full bg-[#F97316] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 transition-all active:scale-[0.98] mt-4"
        >
            Add Credit Card
        </button>

      </div>
    </div>
  );
};

export default AddCardScreen;