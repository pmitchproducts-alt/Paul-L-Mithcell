import React from 'react';
import { ChevronLeft, ShoppingCart, MoreHorizontal, Calendar, ChevronDown, CheckCircle2, Wallet, Plus, ArrowRight } from 'lucide-react';

// Custom component for the Visa Icon to match design
const VisaIcon = () => (
  <div className="w-8 h-5 bg-[#1a1f71] rounded flex items-center justify-center">
    <span className="text-white text-[8px] font-bold italic tracking-tighter">VISA</span>
  </div>
);

// Custom component for Cash Icon
const CashIcon = () => (
  <div className="w-8 h-8 flex items-center justify-center bg-orange-50 rounded-lg border border-orange-100">
    <Wallet className="w-5 h-5 text-orange-500" />
  </div>
);

interface CheckoutScreenProps {
  onBack?: () => void;
  onAddCard?: () => void;
  onManageAddress?: () => void;
  onManageCards?: () => void;
}

const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ onBack, onAddCard, onManageAddress, onManageCards }) => {
  return (
    <div className="bg-gray-50 min-h-screen pb-28 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-5 bg-transparent sticky top-0 z-40 bg-gray-50/95 backdrop-blur-sm supports-[backdrop-filter]:bg-gray-50/60">
        <button 
          onClick={onBack} 
          className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Checkout</h1>
        <button className="relative w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
          <ShoppingCart className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-yellow-400 rounded-full ring-1 ring-white"></span>
        </button>
      </header>

      <div className="max-w-6xl mx-auto px-6 pt-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Delivery & Time */}
          <div className="lg:col-span-7 space-y-8">
            {/* Order ID Banner */}
            <div className="bg-[#F97316] rounded-3xl px-8 py-6 flex justify-between items-center text-white shadow-2xl shadow-orange-100">
               <div className="flex flex-col">
                  <span className="font-bold text-xs uppercase tracking-widest opacity-80 mb-1">Current Order</span>
                  <span className="font-black text-2xl tracking-tight">#OD-2204-PRO</span>
               </div>
               <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-bold border border-white/30">
                  EST: 25-35 MIN
               </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-100 group cursor-pointer transition-all hover:shadow-2xl">
               <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-gray-900 font-black text-xl uppercase tracking-tight mb-1">Delivery Address</h3>
                    <p className="text-gray-400 font-bold text-sm">Where should we send your items?</p>
                  </div>
                  <button 
                    onClick={onManageAddress}
                    className="bg-gray-50 p-3 rounded-2xl text-gray-400 hover:text-orange-500 hover:bg-orange-50 transition-all"
                  >
                      <MoreHorizontal className="w-6 h-6" />
                  </button>
               </div>
               <div onClick={onManageAddress} className="bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:bg-white hover:border-orange-200 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500">
                      <CheckCircle2 className="w-6 h-6 fill-orange-500 text-white" />
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 text-lg uppercase">Home Sweet Home</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 font-medium text-base mb-2">
                     A/234, Kigs Plaza Commercial Complex, Mithakhali Circle, Ahmedabad, Gujarat 380009
                  </p>
                  <p className="text-gray-400 font-bold text-sm">
                     <span className="text-gray-900">Primary Contact:</span> +91 234 567 8900
                  </p>
               </div>
            </div>

            {/* Delivery Time Settings */}
            <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-100">
               <h3 className="text-gray-900 font-black text-xl uppercase tracking-tight mb-6">Delivery Schedule</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Time Slot Preference</label>
                     <button className="w-full bg-gray-50 border border-gray-100 hover:bg-white hover:border-orange-200 transition-all text-sm font-black text-gray-700 py-4 px-6 rounded-2xl flex justify-between items-center group">
                        <span>10:00 AM - 12:00 PM</span>
                        <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-orange-500" />
                     </button>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Delivery Date</label>
                     <button className="w-full bg-gray-50 border border-gray-100 hover:bg-white hover:border-orange-200 transition-all text-sm font-black text-gray-700 py-4 px-6 rounded-2xl flex justify-between items-center group">
                        <span>January 26, 2026</span>
                        <Calendar className="w-5 h-5 text-gray-400 group-hover:text-orange-500" />
                     </button>
                  </div>
               </div>
            </div>

            {/* Notes */}
            <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-100">
               <h3 className="text-gray-900 font-black text-xl uppercase tracking-tight mb-6">Delivery Instructions</h3>
               <textarea 
                  placeholder="Ring the doorbell thrice, leave at the front desk, or any other special instructions..."
                  className="w-full h-32 p-6 bg-gray-50 border border-gray-100 rounded-3xl text-sm font-medium placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:bg-white transition-all underline-offset-4"
               ></textarea>
            </div>
          </div>

          {/* Right Column: Bill & Payment */}
          <div className="lg:col-span-5 space-y-8">
            {/* Order Summary */}
            <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-100 sticky top-28">
               <h3 className="text-gray-900 font-black text-xl uppercase tracking-tight mb-8">Order Summary</h3>
               
               {/* Coupon Code */}
               <div className="bg-emerald-50 p-6 rounded-3xl mb-8 border border-emerald-100 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-emerald-500 shadow-sm">
                      <CheckCircle2 className="w-6 h-6 fill-emerald-500 text-white" />
                    </div>
                    <div>
                      <span className="block text-gray-400 text-[10px] font-black uppercase tracking-widest">Active Coupon</span>
                      <span className="font-black text-emerald-600 text-lg uppercase">FRESH50</span>
                    </div>
                  </div>
                  <button className="text-emerald-500 font-black text-xs hover:underline">REPLACE</button>
               </div>

               {/* BILL */}
               <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-base font-bold text-gray-500">
                     <span>Items (4 Products)</span>
                     <span className="text-gray-900">$100.00</span>
                  </div>
                  <div className="flex justify-between items-center text-base font-bold text-gray-500">
                     <span>Delivery Logistics</span>
                     <span className="text-emerald-500 font-black uppercase text-xs tracking-widest">Complimentary</span>
                  </div>
                  <div className="flex justify-between items-center text-base font-bold text-gray-500">
                     <span>Promotional Discount</span>
                     <span className="text-rose-500">-$10.00</span>
                  </div>
                  <div className="pt-6 mt-6 border-t border-gray-100 flex justify-between items-end">
                     <div>
                       <span className="block text-gray-400 text-xs font-black uppercase tracking-widest mb-1">Total Payable</span>
                       <span className="text-4xl font-black text-gray-900">$90.00</span>
                     </div>
                  </div>
               </div>

               {/* Payment Method */}
               <div className="mb-10">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-gray-900 font-black uppercase text-sm tracking-widest">Payment Source</h4>
                    <button onClick={onAddCard} className="text-brand-blue font-black text-xs bg-blue-50 px-3 py-1 rounded-lg hover:bg-blue-100 transition-colors">Add New</button>
                  </div>
                  
                  <div className="space-y-4">
                     {/* Visa */}
                     <div 
                       onClick={onManageCards} 
                       className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-orange-500 cursor-pointer shadow-lg shadow-orange-50"
                     >
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-8 bg-black rounded-lg flex items-center justify-center p-2 shadow-sm">
                              <span className="text-white text-[10px] font-black italic tracking-tighter">VISA</span>
                           </div>
                           <span className="text-sm text-gray-900 font-black tracking-widest leading-none pt-1">**** 1234</span>
                        </div>
                        <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center">
                           <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        </div>
                     </div>

                     {/* Others (Paypal, etc) */}
                     <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors cursor-pointer opacity-60">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-8 bg-blue-50 rounded-lg flex items-center justify-center p-2">
                             <Wallet className="w-5 h-5 text-blue-600" />
                           </div>
                           <span className="text-sm text-gray-500 font-bold">PayPal</span>
                        </div>
                        <div className="w-6 h-6 rounded-full border-2 border-gray-200"></div>
                     </div>
                  </div>
               </div>

               {/* Final CTA */}
               <button className="w-full bg-brand-blue hover:bg-blue-700 text-white font-black text-xl py-6 rounded-[32px] shadow-2xl shadow-blue-200 transition-all active:scale-[0.98] group flex items-center justify-center gap-4">
                  Confirm & Place Order
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CheckoutScreen;